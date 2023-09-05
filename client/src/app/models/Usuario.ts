import { AbstractControl } from "@angular/forms";

export interface Usuario{
    checkEmailExistence(correo: string): unknown;
    idUsuario ?: number;
    nombre ?: string;
    apeP ?: string;
    apeM ?: string;
    telefono ?: string;
    correo ?: string;
    password1 ?: string;
    created_at ?: Date;
}