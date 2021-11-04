import { Component } from '@angular/core';
import { AppService } from './app.service';
import { saveAs } from 'file-saver';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private conexion: AppService) { }

  EditorOptions = {
    theme: "vs-dark",
    automaticLayout: true,
    scrollBeyondLastLine: false,
    fontSize: 16,
    minimap: {
      enabled: true
    },
    language: 'java'
  }

  ConsoleOptions = {
    theme: "vs-dark",
    readOnly: true,
    automaticLayout: true,
    scrollBeyondLastLine: false,
    fontSize: 16,
    minimap: {
      enabled: true
    },
    language: 'markdown'
  }

  title = 'SYSCOMPILER';
  entrada: string = '';
  salida: string = '';
  fname: string = '';
  simbolos: any = [];
  errores: any = [];

  // nueva pestaña
  newWindow() {
    window.open("/", "_blank");
  }

  // se cierra la pestaña
  closeWindow() {
    window.close();
  }

  // Manda las peticiones a los servicios para ejecutar el compile.js
  Compilar() {
    if (this.entrada != "") {
      const lenguaje = { "input": this.entrada }
      this.conexion.Interprete(lenguaje).subscribe(
        data => {
          console.log('Procesando Datos');
          this.salida = data.output;
          this.simbolos = data.arreglo_simbolos;
          this.errores = data.arreglo_errores;
        },
        error => {
          console.log('Hubo un error :(', error);
          this.simbolos = [];
          this.errores = [];
          if (error.error) {
            if (error.error.output)
              this.salida = error.error.output;
            else if (error.error.message)
              this.salida = error.error.message;
            else
              this.salida = error.error;
          }
          else {
            this.salida = "Error en la entrada.\nIngrese otra entrada.";
          }
        }
      );
    } else
      this.salida = "Entrada vacía. \n Ingresa una nueva entrada.";
  }

  // Genera el AST
  DrawAST() {
    this.simbolos = [];
    this.errores = [];
    if (this.entrada != "") {
      const lenguaje = { "input": this.entrada }
      this.conexion.ReporteAST(lenguaje).subscribe(
        data => {
          saveAs(data, "AST");
          this.salida = "Generando AST y Descargandolo... :D!";
          console.log('AST recibido');
        },
        error => {
          console.log('Error en la generacion del AST :(', error);
          this.salida = "Ocurrió un error al analizar la entrada.\nNo se generó el AST."
        }
      );
    } else
      alert("Entrada vacía. No se puede generar el AST.");
  }

  // Guarda el archivo
  GuardarArchivo() {
    var f = document.createElement('a');
    f.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(this.entrada));
    f.setAttribute('download', this.fname ? this.fname.replace("C:\\fakepath\\", "") : 'Nuevo Archivo.sc');
    if (document.createEvent) {
      var event = document.createEvent('MouseEvents');
      event.initEvent('click', true, true);
      f.dispatchEvent(event);
    }
    else {
      f.click();
    }
    console.log('File saved!');
  }

  // Abre el cuadro de dialogo
  openDialog() {
    document.getElementById("fileInput")!.click();
  }

  // Lee el archivo
  readFile(event: any) {
    let input = event.target;
    let reader = new FileReader();
    reader.onload = () => {
      var text = reader.result;
      if (text) {
        this.entrada = text.toString();
      }
    }
    reader.readAsText(input.files[0]);
    this.salida = '';
    console.log('File opened!')
  }

  // Limpia los editores
  limpiar(){
    if(this.entrada === "" && this.salida === ""){
      alert("Los editores esta vacios, no se puede limpiar nada por el momento :D \n Sigue Programando Feliz :D")
    }else{
      this.entrada = "";
      this.salida = "";
    }
  }

}
