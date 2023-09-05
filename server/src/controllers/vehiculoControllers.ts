import{Request,Response}from'express';
import pool from "../database";

class VehiculoController{
public async list(req: Request,resp:Response){
    const vehiculo= await pool.query('SELECT * FROM vehiculo')
    resp.json(vehiculo);
}

public async create(req:Request, resp:Response){
    console.log([req.body]);
    await pool.query('INSERT INTO vehiculo set ?',[req.body])
    resp.json({text:'creating a booking'});
}
public async delete(req:Request, resp:Response){
    const {matricula}=req.params;
    await pool.query('DELETE FROM vehiculo WHERE matricula=?',[matricula]);
    resp.json({message:'deleting a booking'});
}
public async update(req:Request, resp:Response){
    const {matricula}=req.params;
    await pool.query('UPDATE vehiculo set ? WHERE matricula = ?',[req.body, matricula]);
    resp.json({message:'Updating a booking'});
}
public async getOne(req:Request, resp:Response){
    const {matricula}=req.params;
    const vehiculo = await pool.query('SELECT * FROM vehiculo WHERE matricula=?',[matricula]);
    if(vehiculo.length >0){
        return resp.json(vehiculo[0]);
    }
    resp.status(404).json({text: 'La matricula no existe'});
}

}
const vehiculoController = new VehiculoController();
export default vehiculoController;
