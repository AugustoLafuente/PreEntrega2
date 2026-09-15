/**
 * Modelo base para la entidad Event (Evento Deportivo: torneos, carreras, partidos, etc.).
 * Preparado para la integración con persistencia (MongoDB/Mongoose u otro DAO).
 */

export class Event {
    constructor({
        id = null,
        title,
        description,
        sport_type, // Ej: 'Fútbol', 'Running', 'Básquetbol', 'Tenis', etc.
        category,   // Ej: 'Amateur', 'Profesional', 'Sub-20', etc.
        date,
        location,
        capacity,
        price = 0,
        status = 'active'
    } = {}) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.sport_type = sport_type;
        this.category = category;
        this.date = date;
        this.location = location;
        this.capacity = capacity;
        this.price = price;
        this.status = status;
    }
}

export default Event;
