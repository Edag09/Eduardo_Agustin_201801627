const express = require('express');
const aplication = express(),
    bodyparse = require("body-parser");
port = 3000;
let cors = require('cors');

aplication.use(cors());
aplication.use(bodyparse.json());
aplication.use(bodyparse.urlencoded({extended:true}));

const convertidor = require('./Analizador');
require('./routs/Compiler.js')(convertidor, aplication)
require(',/routs/AST.js')(convertidor, aplication)

aplication.get('/', (req, res)=>{
    res.send("Iniciando servidor!")
});

aplication.listen(port, ()=>{
    console.log(`Servicio levantado en el puerto : ${port}`);
})