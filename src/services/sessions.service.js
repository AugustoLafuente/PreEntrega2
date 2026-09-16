/**
 * Lógica de negocio para el registro y autenticación de usuarios.
 */
import usersRepository from '../repositories/users.repository.js';
import { hashPassword } from '../utils/hash.js';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_PASSWORD_LENGTH = 8;

class ServiceError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
}

const toSafeUser = (user) => ({
    id: user._id,
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
    role: user.role
});

export const registerUser = async ({ first_name, last_name, email, password }) => {
    if (!first_name || !last_name || !email || !password) {
        throw new ServiceError('Faltan campos obligatorios', 400);
    }

    const normalizedEmail = String(email).trim().toLowerCase();

    if (!EMAIL_REGEX.test(normalizedEmail)) {
        throw new ServiceError('El formato del email es inválido', 400);
    }

    if (String(password).length < MIN_PASSWORD_LENGTH) {
        throw new ServiceError(
            `La contraseña debe tener al menos ${MIN_PASSWORD_LENGTH} caracteres`,
            400
        );
    }

    const existingUser = await usersRepository.getUserByEmail(normalizedEmail);
    if (existingUser) {
        throw new ServiceError('El email ya está registrado', 409);
    }

    const hashedPassword = await hashPassword(password);

    const newUser = await usersRepository.createUser({
        first_name: String(first_name).trim(),
        last_name: String(last_name).trim(),
        email: normalizedEmail,
        password: hashedPassword
        // role no se acepta desde el body: siempre queda el valor por defecto del modelo
    });

    return toSafeUser(newUser);
};

export default {
    registerUser
};
