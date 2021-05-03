/*Cargar El archivo */
var fileChooser = document.getElementById('fileChooser');
var send = document.getElementById('btn_enviar');
var mostrar = document.getElementById('mostrartxt');


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