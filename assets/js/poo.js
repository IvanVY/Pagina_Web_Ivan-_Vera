// Clase base "Animal"
class Animal {
    constructor(nombre) {
        this.nombre = nombre; // Propiedad "nombre"
    }

    // Método "hablar" común a todos los animales
    hablar() {
        return `${this.nombre} hace un sonido.`;
    }
}

// Clase derivada "Perro" que extiende "Animal"
class Perro extends Animal {
    hablar() {
        return `${this.nombre} ladra.`; // Sobrescribe el método "hablar"
    }
}

// Clase derivada "Gato" que extiende "Animal"
class Gato extends Animal {
    hablar() {
        return `${this.nombre} maúlla.`; // Sobrescribe el método "hablar"
    }
}

// Crear instancias de las clases
const animales = [new Perro("Rex"), new Gato("Miau")];

// Iterar sobre el array y mostrar el resultado de "hablar" para cada animal
animales.forEach(animal => console.log(animal.hablar()));