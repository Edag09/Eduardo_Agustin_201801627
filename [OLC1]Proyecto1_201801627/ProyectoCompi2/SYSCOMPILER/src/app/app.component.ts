import { Component } from '@angular/core';
//import {graphviz} from "d3-graphviz"
//import {wasmFolder} from "@hpcc-js/wasm"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SYSCOMPILER';
  MostrarTablaSimbolos :boolean = true;
  MostrarErrores : boolean = false;
  MostrarAst : boolean = false
  Entrada : string = ""
  Consola : string = "";

  Cargar(event: any){
    let files = event.target.files;
    var lectura = new FileReader();
    lectura.readAsText(files[0]);
    lectura.onload = () => {
      let text:any = lectura.result;
      if (text){
        this.Entrada = text;
      }
    }
  }

  GuardarArchivo(){
    if (this.Entrada != ""){
      var element = document.createElement('a');
      element.setAttribute('href','data:text/plain;charset=utf-8,'+ encodeURIComponent(this.Entrada));
      element.setAttribute('download', "Code.sc");
      element.style.display = 'none';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    }
  }

  Ejecutar():void{
    let analisis
    this.Consola = "";
    if(this.Entrada != ""){
      let ejecutar = analisis;
      //this.Consola = ejecutar;
    }
  }
}
