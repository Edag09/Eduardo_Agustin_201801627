import { Component } from '@angular/core';
import Controlador from 'src/Clases/Controlador';
import Evaluar from 'src/Clases/Evaluar';
import { TablaSimbols } from 'src/Clases/Tabla_de_Simbolos/TablaSimbols';

import *as analice from '../Clases/Analisis'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SYSCOMPILER';
  MostrarErrores : boolean = false;
  MostrarTablaSimbolos :boolean = true;
  MostrarAst : boolean = false
  entrada : string = ""
  consola : string = "";


  GuardarArchivo(){
    if(this.entrada != ""){
      var element = document.createElement('a');
      element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(this.entrada));
      element.setAttribute('download', "Code.sc");
    
      element.style.display = 'none';
      document.body.appendChild(element);
    
      element.click();
    
      document.body.removeChild(element);
    }
  }

CargarArchivo(event : any){
    let files = event.target.files;
  
    var lector = new FileReader();
    lector.readAsText(files[0]);
    lector.onload = () => {
    let texto:any = lector.result;
    if(texto){
      this.entrada = texto;
    }
  }
}

CrearArchivo(){
  if(this.entrada == ""){
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(this.entrada));
      element.setAttribute('download', "NuevoArchivo.sc");
    
      element.style.display = 'none';
      document.body.appendChild(element);
    
      element.click();
    
      document.body.removeChild(element);
  }
}

Ejecutar():void{
  let cons = ""
  cons += "Analizando..\n"
  this.consola = cons;
  let analitico = new analice.Analisis();
  this.consola = "Analizando...\n";
  if(this.entrada != ""){
    let execute = analitico.ejecutar(this.entrada);

    this.consola = execute.consola;
  }
}

NewWindow(){
  window.open("/", "_blank");
}

CloseWindow(){
  window.close();
}

}
