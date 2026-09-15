/**
 * Controlador para la gestión de Eventos
 */

export const getEvents = async (req, res) => {
    try {
        // En esta etapa inicial devolvemos una lista vacía
        const events = [];
        return res.status(200).json({
            status: "success",
            payload: events
        });
    } catch (error) {
        return res.status(500).json({
            status: "error",
            message: error.message
        });
    }
};

export default {
    getEvents
};
