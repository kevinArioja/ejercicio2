function multiplicacion(a, b) {
    return a * b;
}

const numero1 = parseFloat(prompt('Ingresa el primer número:'));
const numero2 = parseFloat(prompt('Ingresa el segundo número:'));

console.log(`Resultado de la multiplicación: ${multiplicacion(numero1, numero2)}`);