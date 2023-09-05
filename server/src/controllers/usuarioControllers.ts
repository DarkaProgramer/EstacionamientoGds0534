import express, { Router, Request, Response } from "express";
import pool from "../database";

class UsuarioController{
verificarCorreo(correo: any) {
    throw new Error("Method not implemented.");
}
public async list(req: Request,resp:Response){
    const usuario= await pool.query('SELECT * FROM usuario')
    resp.json(usuario);
}

public async create(req:Request, resp:Response){
    console.log([req.body]);
    await pool.query('INSERT INTO usuario set ?',[req.body])
    resp.json({text:'creating a user'}); 
}
public async delete(req:Request, resp:Response){
    const {IdUsuario}=req.params;
    await pool.query('DELETE FROM usuario WHERE IdUsuario=?',[IdUsuario]);
    resp.json({message:'deleting a user'});
}
public async update(req:Request, resp:Response){
    const {IdUsuario}=req.params;
    await pool.query('UPDATE usuario set ? WHERE IdUsuario = ?',[req.body, IdUsuario]);
    resp.json({message:'Updating a user'});
}
public async getOne(req:Request, resp:Response){
    const verificarCorreo = async (correo: string) => {
        try {
        const usuario = await pool.query('SELECT * FROM usuario WHERE correo = ?', [correo]);
        return usuario.length > 0;
    } catch (error) {
        console.error('Error al verificar correo:', error);
        throw error;
    }
};
const getOne = async (req: Request, res: Response) => {
    const { IdUsuario } = req.params;

    try {
        const usuario = await pool.query('SELECT * FROM usuario WHERE IdUsuario = ?', [IdUsuario]);

        if (usuario.length > 0) {
            return res.json(usuario[0]);
        } else {
            res.status(404).json({ text: 'El usuario no existe' });
        }
    } catch (error) {
        console.error('Error al buscar usuario:', error);
        res.status(500).json({ text: 'Error interno del servidor' });
    }
};
module.exports = {
    verificarCorreo,getOne,
};
}
}
const usuarioController = new UsuarioController();
export default usuarioController ;