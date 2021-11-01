import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConectarService {

  conectar = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  compilar(input:any){
    return this.http.post<any>(this.conectar+'/compilar', input);
  }

  generarAST(input:any){
    return this.http.post(this.conectar+'/reportAST', input,{
      responseType: 'blob',
    });
  }

}
