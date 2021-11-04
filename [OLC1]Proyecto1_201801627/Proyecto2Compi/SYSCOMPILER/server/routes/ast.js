var fs = require('fs');
const path = require('path');
const Graph = require("../Controller/Arbol/Graph")
const { exec } = require('child_process');

module.exports = (parser, app) => {
    app.post('/AST_report', (req, res) => {
        try {
            var input = req.body.input;
            var ast = parser.parse(input);
            var parse = ast.parse;
            var errores = ast.errores;
            if (errores.length > 0) {
                res.status(500).send(new Error("La entrada contiene errores léxicos o sintácticos.\nIntente de nuevo para generar el AST"));
                return;
            }
            var graph = new Graph(parse);
            var dot = graph.getDot();
            const filepath = path.join(__dirname, '../Controller/Arbol/AST')
            fs.writeFile(filepath + '.dot', dot, function (err) {
                if (err) {
                    console.log(err)
                    res.status(500).send(String(err));
                    return;
                }
                exec('dot -Tpdf ' + filepath + '.dot' + ' -o ' + filepath + '.pdf', (err) => {
                    if (err) {
                        console.log(err)
                        res.status(500).send(String(err));
                        return;
                    }
                    res.sendFile(filepath + '.pdf');
                });
            });

        } catch (error) {
            console.log(error)
            res.status(500).send(String(error));
        }
    });
}