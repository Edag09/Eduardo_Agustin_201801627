"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddWorkerEntryPointPlugin = void 0;
const webpackVersion = require('webpack/package.json').version;
const SingleEntryPlugin = require('webpack/lib/SingleEntryPlugin');
const LoaderTargetPlugin = require('webpack/lib/LoaderTargetPlugin');
const WebWorkerTemplatePlugin = require('webpack/lib/webworker/WebWorkerTemplatePlugin');
function getCompilerHook(compiler, { id, entry, filename, chunkFilename, plugins }) {
    return function (compilation, callback) {
        const outputOptions = {
            filename,
            chunkFilename,
            publicPath: compilation.outputOptions.publicPath,
            // HACK: globalObject is necessary to fix https://github.com/webpack/webpack/issues/6642
            globalObject: 'this',
        };
        const childCompiler = compilation.createChildCompiler(id, outputOptions, [
            new WebWorkerTemplatePlugin(),
            new LoaderTargetPlugin('webworker'),
        ]);
        new SingleEntryPlugin(compiler.context, entry, 'main').apply(childCompiler);
        plugins.forEach((plugin) => plugin.apply(childCompiler));
        childCompiler.runAsChild((err, entries, compilation) => callback(err));
    };
}
class AddWorkerEntryPointPlugin {
    constructor({ id, entry, filename, chunkFilename = undefined, plugins }) {
        this.options = { id, entry, filename, chunkFilename, plugins };
    }
    apply(compiler) {
        const compilerHook = getCompilerHook(compiler, this.options);
        if (webpackVersion < '4') {
            compiler.plugin('make', compilerHook);
        }
        else {
            compiler.hooks.make.tapAsync('AddWorkerEntryPointPlugin', compilerHook);
        }
    }
}
exports.AddWorkerEntryPointPlugin = AddWorkerEntryPointPlugin;
