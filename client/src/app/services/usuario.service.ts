import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Usuario } from '../models/Usuario';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  checkEmailExistence(correo: string) {
    throw new Error('Method not implemented.');
  }

  
  API_URI = 'http://localhost:3000/api';
 // API_URI= 'http://localhost:3000/src/data'; 
  
  constructor(private http: HttpClient) {}

  getUsuarios(){
    return this.http.get(`${this.API_URI}/usuario`)
  }

  getUsuario(idUsuario: string) {
    return this.http.get(`${this.API_URI}/usuario/${idUsuario}`);
  }

  saveUsuario(usuario: Usuario){
    return this.http.post(`${this.API_URI}/usuario`,usuario)
}

deleteUsuario(idUsuario: string){
  return this.http.delete(`${this.API_URI}/usuario/${idUsuario}`);
  }
  
  updateUsuario(idUsuario:string, updateUsuario : Usuario){
  return this.http.put(`${this.API_URI}/usuario/${idUsuario}`,updateUsuario);
}
}