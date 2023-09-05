"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const usuarioControllers_1 = __importDefault(require("../controllers/usuarioControllers"));
const express_1 = require("express");
class UsuarioRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', usuarioControllers_1.default.list);
        this.router.post('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { correo, password1 } = req.body;
            try {
                // Verificar si el correo ya existe
                const correoExistente = yield usuarioControllers_1.default.verificarCorreo(correo);
                if (correo) {
                    return res.status(409).json({ text: 'El correo ya está registrado' }); // 409 Conflict status code
                }
                res.status(200).json({ text: 'Nuevo usuario registrado' });
            }
            catch (error) {
                console.error('Error al registrar usuario:', error);
                res.status(500).json({ text: 'Error interno del servidor' });
            }
        }));
        this.router.delete('/:IdUsuario', usuarioControllers_1.default.delete);
        this.router.put('/:IdUsuario', usuarioControllers_1.default.update);
        this.router.get('/:IdUsuario/:correo', usuarioControllers_1.default.getOne);
    }
}
const usuarioRoutes = new UsuarioRoutes();
exports.default = usuarioRoutes.router;
