/**
 * Modelo base para la entidad User (Usuario / Atleta / Organizador).
 * Preparado para la integración con persistencia (MongoDB/Mongoose u otro DAO).
 */

export class User {
    constructor({
        id = null,
        first_name,
        last_name,
        email,
        password,
        role = 'athlete' // 'athlete' (deportista/participante), 'organizer' (organizador del evento), 'admin'
    } = {}) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.password = password;
        this.role = role;
    }
}

export default User;
