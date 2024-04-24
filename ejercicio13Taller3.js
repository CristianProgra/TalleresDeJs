function determinarEdades() {
    let menoresDeEdad = 0;
    let mayoresDeEdad = 0;

    for (let i = 1; i <= 10; i++) {
        let edad = parseInt(prompt("Ingrese la edad del estudiante" + i));

        if (edad < 18) {
            menoresDeEdad++;
        } else {
            mayoresDeEdad++;
        }
    }

    document.write("Cantidad de estudiantes menores de edad:" + menoresDeEdad);
    document.write("Cantidad de estudiantes mayores de edad: " + mayoresDeEdad);
}

determinarEdades();