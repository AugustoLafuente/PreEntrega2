# 🏆 Plataforma de Gestión e Inscripción de Eventos Deportivos

## 📌 Descripción y Temática Elegida
Este proyecto consiste en el backend y base arquitectónica para una **Plataforma de Organización e Inscripción de Eventos Deportivos** (torneos de fútbol, carreras, maratones, torneos de tenis, básquetbol, ciclismo, etc.).

La plataforma está pensada para conectar a:
- **Organizadores de eventos**: Creación, administración, fijación de cupos, categorías y sedes deportivas.
- **Atletas / Participantes**: Búsqueda de eventos según disciplina deportiva, inscripción, reserva de plazas y seguimiento.
- **Administradores**: Control general, moderación de eventos y gestión de usuarios.

Esta primera entrega sienta las bases con un diseño limpio, desacoplado y preparado para escalar con arquitectura por capas (N-Tier).

---

## 🛠️ Tecnologías Utilizadas
- **Node.js**: Entorno de ejecución para JavaScript del lado del servidor.
- **Express.js**: Framework minimalista para crear APIs REST.
- **ES Modules (ESM)**: Sistema nativo de módulos con sintaxis `import` / `export`.
- **Dotenv**: Gestión de variables de entorno seguras.

---

## 📁 Estructura de Carpetas

```text
proyecto-eventos/
├── src/
│   ├── app.js                # Configuración de Express, middlewares y rutas principales
│   ├── server.js             # Inicialización y levantamiento del servidor HTTP
│   ├── config/               # Configuración de variables de entorno y constantes
│   │   └── config.js
│   ├── routes/               # Definición de rutas y endpoints de la API
│   │   ├── events.router.js  # Rutas de eventos deportivos
│   │   └── sessions.router.js# Rutas de autenticación y sesiones
│   ├── controllers/          # Controladores que reciben las peticiones y orquestan la respuesta
│   │   ├── events.controller.js
│   │   └── sessions.controller.js
│   ├── services/             # Lógica de negocio de la aplicación
│   ├── repositories/         # Capa intermedia de acceso a datos y mapeo
│   ├── dao/                  # Data Access Object (persistencia en DB o memoria)
│   ├── models/               # Modelos y esquemas de entidades del dominio deportivo
│   │   ├── User.js           # Usuario (Atleta / Organizador / Admin)
│   │   └── Event.js          # Evento deportivo (disciplina, cupos, categoría, etc.)
│   ├── middlewares/          # Middlewares de validación, autenticación y manejo de errores
│   └── utils/                # Utilidades, funciones auxiliares y helpers
├── .env                      # Variables de entorno locales (ignorado en Git)
├── .env.example              # Plantilla de variables de entorno requeridas
├── .gitignore                # Reglas para excluir archivos sensibles y dependencias
├── package.json              # Configuración y dependencias del proyecto
└── README.md                 # Documentación del proyecto
```

---

## ⚙️ Configuración de Variables de Entorno

Copia el archivo `.env.example` y renómbralo a `.env`:

```bash
cp .env.example .env
```

Configura las siguientes variables según tu entorno:

| Variable | Descripción | Valor por defecto |
| :--- | :--- | :--- |
| `PORT` | Puerto donde correrá el servidor | `8080` |
| `NODE_ENV` | Entorno de ejecución (`development` / `production`) | `development` |
| `MONGO_URL` | URI de conexión a la base de datos MongoDB | `mongodb://localhost:27017/eventos_deportivos_db` |
| `JWT_SECRET` | Clave secreta para la firma de tokens JWT | `supersecretjwtkey123` |

> ⚠️ **Nota:** El archivo `.env` nunca debe ser subido al repositorio de control de versiones.

---

## 🚀 Instalación y Ejecución

### 1. Clonar el repositorio e instalar dependencias
```bash
git clone <URL_DEL_REPOSITORIO>
cd <CARPETA_DEL_PROYECTO>
npm install
```

### 2. Iniciar el servidor

- **Modo producción / estándar:**
  ```bash
  npm start
  ```

- **Modo desarrollo (watch mode):**
  ```bash
  npm run dev
  ```

---

## 📍 Rutas y Endpoints Disponibles

### 🩺 Health Check
- **`GET /api/health`**
  - **Descripción**: Comprueba el estado de la API y si el servidor está respondiendo adecuadamente.
  - **Respuesta `200 OK`**:
    ```json
    {
      "status": "ok",
      "message": "Servidor activo"
    }
    ```

### ⚽ Eventos Deportivos
- **`GET /api/events`**
  - **Descripción**: Obtiene el listado de eventos deportivos disponibles (carreras, torneos, partidos, etc. - inicialmente vacío).
  - **Respuesta `200 OK`**:
    ```json
    {
      "status": "success",
      "payload": []
    }
    ```

### 🔐 Sesiones (Estructura inicial)
- **`POST /api/sessions/register`**
  - **Descripción**: Endpoint preparado para registro de atletas y organizadores.
- **`POST /api/sessions/login`**
  - **Descripción**: Endpoint preparado para inicio de sesión y emisión de credenciales.
