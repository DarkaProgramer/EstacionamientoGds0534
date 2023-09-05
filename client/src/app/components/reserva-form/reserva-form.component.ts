import { Component, OnInit,HostBinding } from '@angular/core';
import { Vehiculo } from 'src/app/models/Vehiculo';
import { VehiculosService } from 'src/app/services/vehiculos.service';

@Component({
  selector: 'app-reserva-form',
  templateUrl: './reserva-form.component.html',
  styleUrls: ['./reserva-form.component.css']
})
export class ReservaFormComponent {
  @HostBinding('class') classes = 'row';
  vehiculo: Vehiculo= { 
   matricula: '',
   nombreDue: '',
   modelo: '',
   color: '',
   espacio: '',
   created_at: new Date()
 
  }
  constructor(private vehiculosService : VehiculosService){}
  ngOInit(){}
   
 newReserva(){
  delete this.vehiculo.created_at;
   this.vehiculosService.saveVehiculos(this.vehiculo).subscribe(
   resp =>{console.log(resp)},
   err => console.log(err)
 
   ) 

 }
}
