import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

  postRegistro(data : any){
    return this.http.post<any>("http://localhost:3000/ListaClientes/", data);
  }
  getRegistro(){
    return this.http.get<any>("http://localhost:3000/ListaClientes/");
  }
  putRegistro(data:any, id : number){
    return this.http.put<any>("http://localhost:3000/ListaClientes/"+id, data);
  }
  borrar(id:number){
    return this.http.delete<any>("http://localhost:3000/ListaClientes/"+id);
  }
}
