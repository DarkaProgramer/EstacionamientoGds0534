import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Vehiculo } from '../models/Vehiculo';

@Injectable({
  providedIn: 'root'
})
export class VehiculosService {

  
  API_URI = 'http://localhost:3000/api';
 // API_URI= 'http://localhost:3000/src/data'; 
  
  constructor(private http: HttpClient) {}

  getReservas(){
    return this.http.get(`${this.API_URI}/vehiculos`)
  }

  getReserva(matricula: string) {
    return this.http.get(`${this.API_URI}/vehiculos/${matricula}`);
  }

  saveVehiculos(vehiculo: Vehiculo){
    return this.http.post(`${this.API_URI}/vehiculos`,vehiculo)
}

deleteVehiculo(matricula: string){
  return this.http.delete(`${this.API_URI}/vehiculos/${matricula}`);
  }
  
  
  updateVehiculo(matricula:string, updateVehiculo : Vehiculo){
  return this.http.put(`${this.API_URI}/vehiculos/${matricula}`,updateVehiculo);
}
}
