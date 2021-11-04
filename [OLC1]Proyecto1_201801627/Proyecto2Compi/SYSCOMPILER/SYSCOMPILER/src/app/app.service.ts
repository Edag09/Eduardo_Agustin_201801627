import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  conectar = "http://localhost:3080";

  constructor(private http: HttpClient) { }

  Interprete(input: any) {
    return this.http.post<any>(this.conectar + '/Compiler', input);
  }

  ReporteAST(input: any) {
    return this.http.post(this.conectar + '/ReportarAST', input, {
      responseType: 'blob',
    });
  }

}
