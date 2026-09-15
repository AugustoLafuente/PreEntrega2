import app from './app.js';
import { config } from './config/config.js';

const PORT = config.port;

app.listen(PORT, () => {
    console.log(` Servidor escuchando en el puerto ${PORT}`);
    console.log(` Entorno: ${config.nodeEnv}`);
    console.log(` Health check: http://localhost:${PORT}/api/health`);
    console.log(` Events endpoint: http://localhost:${PORT}/api/events`);
});
