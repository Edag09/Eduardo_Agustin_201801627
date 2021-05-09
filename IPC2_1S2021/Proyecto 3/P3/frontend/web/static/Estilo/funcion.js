/*Cargar El archivo */
var fileChooser = document.getElementById('fileChooser');
var send = document.getElementById('btn_enviar');
var consultar = document.getElementById('btn_consulta');
var resetear = document.getElementById('btn_reset');
var mostrar = document.getElementById('mostrartxt');
var mostrarxml = document.getElementById('mostrarxml');

if (fileChooser)
fileChooser.addEventListener("change", subirArchivo)

function subirArchivo()
{
let reader = new FileReader();

reader.onload = function ()
{
  let datos = {
    data: reader.result.replace('data:', '')
      .replace(/^.+,/, '')
  }
  fetch('http://localhost:5000/abrirArchivo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(datos)
  }).then(res =>
  {
    location.reload();
  });
}

reader.onerror = function (error)
{
  console.log('Error: ', error);
};

reader.readAsDataURL(fileChooser.files[0]);
}

function abrirArchivo(input)
{
input.click();
}

  /*enviar informacion*/
  send.addEventListener("click", (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/abrirArchivo", {
      method: "GET",
      headers: {
        "Content-Type": "text/plain",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.text();
        }
      })
      .then((res_txt) => {
        mostrar.innerText = res_txt;
      });
  });

  /*consulta de xml*/
  consultar.addEventListener('click', (e)=>{
    e.preventDefault();
    fetch("http://localhost:5000/mostrarXML",{
      method: 'GET',
      headers: {
        "Content-Type": "text/xml",
      },
    }).then((res)=>{
      if (res.ok){
        return res.text()
      }
    }).then((res_txt)=>{
      mostrarxml.innerText = res_txt;
    });
  });

  /*borrar el servidor*/
  resetear.addEventListener('click', (e)=>{
    e.preventDefault();
    fetch("http://localhost:5000/reset", {
      method: 'GET',
      headers: {
        'Content-Type': 'text/plain'
      },
    }).then((res)=>{
      if(res.ok){
        return res.text()
      }
    }).then((res_txt)=>{
      mostrar.innerText='';
      mostrarxml.innerText='';
    });
  });


  /*enviar la fecha*/
  var graficaUser = document.getElementById('btn_busUser');
  graficaUser.addEventListener('click', (e)=>{
    var user_date = document.getElementById('ffu');
    e.preventDefault();
      fetch("http://localhost:5000/prueba", {
        method = 'POST',
        headers:{
          'Content-Type': 'text/plain',
        },
        body: user_date.value,
      }).then((res)=>{
        if(res.ok){
          console.log="Enviado"
        }
      });
  });
