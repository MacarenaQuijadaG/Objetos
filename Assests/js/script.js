// Definición de la función constructora para el objeto Paciente
function Paciente(nombre, edad, genero, historiaMedica) {
    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero;
    this.historiaMedica = historiaMedica;
}

// Implementación de métodos getters y setters para acceder y modificar datos
Paciente.prototype.getNombre = function() {
    return this.nombre;
};

Paciente.prototype.setNombre = function(nombre) {
    this.nombre = nombre;
};

Paciente.prototype.getEdad = function() {
    return this.edad;
};

Paciente.prototype.setEdad = function(edad) {
    this.edad = edad;
};

Paciente.prototype.getGenero = function() {
    return this.genero;
};

Paciente.prototype.setGenero = function(genero) {
    this.genero = genero;
};

Paciente.prototype.getHistoriaMedica = function() {
    return this.historiaMedica;
};

Paciente.prototype.setHistoriaMedica = function(historiaMedica) {
    this.historiaMedica = historiaMedica;
};

// Método para buscar pacientes por nombre
Paciente.prototype.buscarPorNombre = function(nombre) {
    return this.nombre.toLowerCase() === nombre.toLowerCase();
};

// Método para mostrar todos los datos de los pacientes
Paciente.prototype.mostrarTodosLosDatos = function() {
    console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}, Género: ${this.genero}, Historia Médica: ${this.historiaMedica}`);
};

// Instanciar objetos Paciente
const paciente1 = new Paciente("Juan Pérez", 35, "Masculino", "Problemas respiratorios");
const paciente2 = new Paciente("María García", 28, "Femenino", "Dolores de cabeza");

// Mostrar todos los pacientes
console.log("Todos los pacientes:");
paciente1.mostrarTodosLosDatos();
paciente2.mostrarTodosLosDatos();

// Buscar paciente por nombre
const nombreBuscado = "Juan Pérez";
console.log(`\nBuscando paciente por nombre "${nombreBuscado}":`);
if (paciente1.buscarPorNombre(nombreBuscado)) {
    paciente1.mostrarTodosLosDatos();
} else {
    console.log(`No se encontró ningún paciente con el nombre "${nombreBuscado}".`);
}