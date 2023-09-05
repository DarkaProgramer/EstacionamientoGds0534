import usuarioController from "../controllers/usuarioControllers";
import { Router } from "express";

    class UsuarioRoutes {
        public router: Router = Router();

        constructor() {
            this.config();
        }

        config(): void {
            this.router.get('/', usuarioController.list);
            this.router.post('/', async (req, res) => {
                const { correo, password1 } = req.body;

                try {
                    // Verificar si el correo ya existe
                    const correoExistente = await usuarioController.verificarCorreo(correo);

                    if (correo) {
                        return res.status(409).json({ text: 'El correo ya está registrado' }); // 409 Conflict status code
                    }
                    res.status(200).json({ text: 'Nuevo usuario registrado' });
                } catch (error) {
                    console.error('Error al registrar usuario:', error);
                    res.status(500).json({ text: 'Error interno del servidor' });
                }
            });
            this.router.delete('/:IdUsuario', usuarioController.delete);
            this.router.put('/:IdUsuario', usuarioController.update);
            this.router.get('/:IdUsuario/:correo', usuarioController.getOne);
        }
    }

    const usuarioRoutes = new UsuarioRoutes();
    export default usuarioRoutes.router;

