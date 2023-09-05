import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/Usuario';
import { UsuariosService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iniciose-form',
  templateUrl: './iniciose-form.component.html',
  styleUrls: ['./iniciose-form.component.css']
})
export class InicioseFormComponent {
  usuario: Usuario = {
    idUsuario: 0,
    nombre: '',
    apeP: '',
    apeM: '',
    telefono: '',
    correo: '',
    password1: '',
    created_at: new Date(),
    checkEmailExistence: function (correo: string): unknown {
      throw new Error('Function not implemented.');
    }
  };

  // Variable para controlar la visibilidad del mensaje de error
  mostrarErrorContrasena: boolean = false;

  constructor(private usuariosService: UsuariosService, private router: Router) {}

  newUsuario() {
    if (!this.usuario.password1 || this.usuario.password1.length < 8) {
      // Muestra el mensaje de error y retorna
      this.mostrarMensaje('La contraseña debe tener al menos 8 caracteres');
      return;
    }

    // Restablece la visibilidad del mensaje de error
    this.mostrarErrorContrasena = false;

    delete this.usuario.created_at;
    this.usuariosService.saveUsuario(this.usuario).subscribe(
      resp => {
        console.log(resp);
        this.router.navigate(['/home/login']);
      },
      err => {
        if (err.status === 409) {
          // El correo ya existe, muestra un mensaje de error
          this.mostrarMensaje('El correo que intentas registrar ya existe, prueba con otro');
        } else {
          console.error('Error al registrar usuario:', err);
          this.mostrarMensaje('Error al registrar usuario. Inténtalo de nuevo más tarde.');
        }
      }
    );
  }

  mostrarMensaje(mensaje: string) {
    // Aquí puedes implementar tu lógica para mostrar el mensaje de error en el formato que desees
    // Por ejemplo, puedes usar una alerta o mostrarlo en la interfaz de usuario de alguna manera
    alert(mensaje);
  }
}
