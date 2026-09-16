/**
 * Controlador para la gestión de Sesiones y Autenticación
 * (login preparado para próximas entregas: JWT, Passport, cookies, etc.)
 */
import sessionsService from '../services/sessions.service.js';

export const register = async (req, res) => {
    try {
        const { first_name, last_name, email, password } = req.body;

        const payload = await sessionsService.registerUser({
            first_name,
            last_name,
            email,
            password
        });

        return res.status(201).json({
            status: 'success',
            payload
        });
    } catch (error) {
        const statusCode = error.statusCode || 500;
        return res.status(statusCode).json({
            status: 'error',
            message: error.message
        });
    }
};

export const login = async (req, res) => {
    try {
        return res.status(501).json({
            status: 'info',
            message: 'Login pendiente de implementación'
        });
    } catch (error) {
        return res.status(500).json({
            status: 'error',
            message: error.message
        });
    }
};

export default {
    register,
    login
};
