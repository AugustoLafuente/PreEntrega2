/**
 * Helper reutilizable para hashear y comparar contraseñas con bcrypt.
 */
import bcrypt from 'bcrypt';

const SALT_ROUNDS = 10;

export const hashPassword = async (plainPassword) => {
    return bcrypt.hash(plainPassword, SALT_ROUNDS);
};

export const comparePassword = async (plainPassword, hashedPassword) => {
    return bcrypt.compare(plainPassword, hashedPassword);
};

export default {
    hashPassword,
    comparePassword
};
