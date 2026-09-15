/**
 * Controlador para la gestión de Sesiones y Autenticación
 * (Estructura inicial preparada para próximas entregas: JWT, Passport, cookies, etc.)
 */

export const register = async (req, res) => {
    try {
        return res.status(501).json({
            status: "info",
            message: "Registro pendiente de implementación"
        });
    } catch (error) {
        return res.status(500).json({
            status: "error",
            message: error.message
        });
    }
};

export const login = async (req, res) => {
    try {
        return res.status(501).json({
            status: "info",
            message: "Login pendiente de implementación"
        });
    } catch (error) {
        return res.status(500).json({
            status: "error",
            message: error.message
        });
    }
};

export default {
    register,
    login
};
