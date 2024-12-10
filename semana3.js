/** PUNTO 1
 * Escriba una función que tenga cómo parámetros la base y altura de un rectángulo y retorne su área.
 */
const calcularArea = (base, altura) => base*altura;
//console.log(`El area del rectángulo es: ${calcularArea(2,2)}`);

/** PUNTO 2
 * Escriba una función que reciba el lado de un cubo y retorne su volumen.
 */
const calcularVolumenCubo = (lado) => Math.pow(lado, 3);

// let lado = parseFloat(prompt("Ingrese el lado del cubo"));
// console.log(`El volumen del cubo es: ${calcularVolumenCubo(lado)}`);

/** PUNTO 3
 * Escriba una función que tenga como parámetro un nombre y retorne la cadena “Hola Juan”, por ejemplo si 
 * el nombre pasado es Juan.
 */
const mostrarSaludo = (nombre) => `Hola ${nombre}`;
// console.log(mostrarSaludo("juan"));

/** PUNTO 4
 * Escriba una función que muestre los números de 1 a n, teniendo n como parámetro.
 */
function mostrarNumeros(n){
    for(let i=1; i<=n; i++){
        console.log(i);
    }
}
// let n = parseInt(prompt(`Ingrese el valor de n:`));
// mostrarNumeros(n);

/** PUNTO 5
 * Escriba una función que reciba un número n como parámetro y genere su factorial.
 */
function mostrarFactorial(n){
    let resultado = 1;
    for(let i = 1; i<=n; i++){
        resultado *= i;
    }
    return resultado;
}
// let n1 = parseInt(prompt("Ingrese un número para calcular el factorial"));
// console.log(`El factorial del número ${n1} es: ${mostrarFactorial(n1)}`);

/** PUNTO 6
 * Escriba una función con el nombre de esVocal() que tome un carácter , devuelva True si es vocal
 * (no importa si es mayúscula o minúscula), y devuelva False en caso contrario.
//  */
function esVocal(caracter){
    if(caracter == 'a' || caracter == 'e' || caracter == 'i'|| caracter == 'o'|| caracter == 'u'){
        return true;
    }else if(caracter == 'A' || caracter == 'E' || caracter == 'I' || caracter == 'O' || caracter == 'U'){
        return true;
    }else{
        return false;
    }
}
// let letra = prompt(`Ingrese una letra:`);
// console.log(`Es vocal: ${esVocal(letra)}`);

/**PUNTOT 7
 * Escriba una función la cual reciba como parámetro una cadena y genere como
    retorno la misma cadena pero con todos su contenido en mayúscula.
 */
function generarMayusculas(cadena){
    return cadena.toUpperCase();
}

// let cadena = prompt("Ingresa una palabra: ");
// console.log(`La palabra convertida en mayuscula: ${generarMayusculas(cadena)}`);

/** PUNTO 8
 * Escriba una función llamada obtenerPrimeraLetra() que reciba un nombre y devuelva
la primera letra del nombre.
 */
const obtenerPrimeraLetra = (nombre) => nombre.charAt(0);
// let nombre = prompt("ingrese un nombre");
// console.log(obtenerPrimeraLetra(nombre));

/** PUNTO 9
 * Escriba una función la cual reciba una cadena como parámetro y retorne la cantidad
de vocales que contiene la cadena.
 */
function contarVocales(cadena){
    let contador = 0;
    for(let i=0; i<cadena.length; i++){
        if(cadena[i] == 'a' || cadena[i] == 'e' || cadena[i] == 'i'|| cadena[i] == 'o'|| cadena[i] == 'u'){
            contador++;
        }
    }
    return contador;
}
// let cadena = prompt("Ingrese una cadena");
// console.log(`La cantidad de vocales que tiene ${cadena} es ${contarVocales(cadena)}`);

/** PUNTO 10
 * Escriba una función la cual reciba una cadena como parámetro y ésta retorne la misma cadena pero sin sus vocales.
 */
function eliminarVocales(cadena){
    let cadenaNueva = "";
    for(let i=0; i<cadena.length; i++){
        if(cadena[i] !== 'a' && cadena[i] !== 'e' && cadena[i] !== 'i' && cadena[i] !== 'o'&& cadena[i] !== 'u'){
            cadenaNueva += cadena[i];
        }
    }
    return cadenaNueva;
}
// let cadena = prompt("Ingrese una cadena");
// console.log(`La palabra: ${cadena} sin vocales: ${eliminarVocales(cadena)}`);

/** PUNTO 11
 * Escriba una función que al llamarla retorne un número entero aleatorio entre 1 y 20.
 */
const generarNumeroAleatorio = ()=> Math.floor(Math.random()*20)+1;
console.log(`El número aleatorio generado es ${generarNumeroAleatorio()}`);

/**PUNTO 12
 * Escriba una función la cual reciba 5 notas de un estudiante y genere un mensaje
informando si el estudiante aprobó o no la materia, para que la materia se de como
aprobada el promedio del estudiante debe ser mayor o igual a 3,0.
 */
function calcularMateria(n1,n2,n3,n4,n5){
    let nota = (n1+n2+n3+n4+n5)/5;
    if(nota>=3){
        console.log("El estudiante aprobó la materia");
    }else{
        console.log("El estudiante no aprobó la materia");
    }
}
calcularMateria(3,3,2.5,4,3.7);

/** PUNTO 13
 * Escriba una función que reciba un número entero y dicha función pueda determinar si el número enviado 
 * es positivo o negativo.
 */
function determinarNumero(numero){
    if(numero>=0){
        console.log("El número es positivo");
    }else{
        console.log("El número es negativo");
    }
}
determinarNumero(-2);

/** PUNTO 14
 * Escriba una función la cual permita o no la entrada a un parque de atracciones,
dicha función recibe la edad, estatura y permiso parental como parámetros. Para
permitir el acceso el usuario deberá de ser mayor de edad y medir más de 150 cm,
en caso de ser menor de edad debe contar con un permiso parental para que sea
concedido el acceso.
 */
function permitirAcceso(edad, estatura, permisoParental) {
    if (edad >= 18 && estatura > 150) {
        return "Acceso permitido";
    } 
    else if (edad < 18 && permisoParental && estatura > 150) {
        return "Acceso permitido";
    } 
    else {
        return "Acceso denegado. No cumples con los requisitos para ingresar.";
    }
}
console.log(permitirAcceso(20, 160, false));

/**PUNTO 15
 *Escriba una función generarContraseña la cual reciba n como parámetro y esta cree una contraseña 
de n caracteres aleatorios. (Los caracteres pueden ser números, letras o signos).
 */
function generarContraseña(n){
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:',.<>?/`~";
    let contraseña = "";
    for (let i = 0; i < n; i++) {
        const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
        contraseña += caracteres[indiceAleatorio];
    }
    return contraseña;
}
console.log(generarContraseña(10));

/**PUNTO 16
 * Escriba una función que se llame facturacion() La función tiene que recibir como
parámetro el monto de un producto , y el medio de pago : C (tarjeta de crédito), E (efectivo) y D (tarjeta de débito).
Si el monto del producto es menor a $200 no se aplicará ningún descuento. Si el monto a pagar es
entre $200 y $400 se aplicará un descuento del 30% si el medio de pago es efectivo, 20% si se realiza con débito y
10% con tarjeta de crédito. Para montos mayores a $400, el descuento es del 40% sin importar el medio 
de pago La función deberá retornar el monto final a pagar.
 */
function facturacion(monto, medioPago) {
    let descuento = 0;

    if (monto >= 200 && monto <= 400) {
        if (medioPago === 'E') {
            descuento = 0.30;
        } else if (medioPago === 'D') {
            descuento = 0.20;
        } else if (medioPago === 'C') {
            descuento = 0.10;
        }
    } else if (monto > 400) {
        descuento = 0.40;
    }

    const montoFinal = monto - (monto * descuento);
    return montoFinal;
}
console.log(facturacion(150, 'E'));

/**PUNTO 17 
 * Escriba una función la cual reciba como parámetro 2 números enteros y 1 cadena, La idea es que los números 
 * recibidos se puedan operar según la operación que hallamos recibido en la cadena, ejemplo miFuncion(2, 5, ”suma”).
 */
function miFuncion(num1, num2, operacion) {
    switch (operacion) {
        case "suma":
            return num1 + num2;
        case "resta":
            return num1 - num2;
        case "multiplicacion":
            return num1 * num2;
        case "division":
            if (num2 !== 0) {
                return num1 / num2;
            } else {
                return "Error, división por cero no permitida.";
            }
        default:
            return "Operación no reconocida.";
    }
}
let operacion = prompt("Ingrese la operación");
let num1 = prompt("Ingrese el primer valor");
let num2 = prompt("Ingrese el segundo valor");
console.log(miFuncion(num1, num2, operacion));

/** PUNTO 18
 * Escriba una función que tenga una cadena de ADN como parámetro y retorne un string con el número de bases 
 * en ella, por ejemplo, si la cadena es “AACAGT” entonces debe retornar “Cantidad de A: 3, Cantidad de 
 * C: 1, Cantidad de G: 1, Cantidad de T: 1”
 */
function contarBasesADN(cadenaADN) {
    let cantidadA = 0;
    let cantidadC = 0;
    let cantidadG = 0;
    let cantidadT = 0;

    for (let base of cadenaADN) {
        switch (base) {
            case 'A':
                cantidadA++;
                break;
            case 'C':
                cantidadC++;
                break;
            case 'G':
                cantidadG++;
                break;
            case 'T':
                cantidadT++;
                break;
        }
    }

    return `Cantidad de A: ${cantidadA}, Cantidad de C: ${cantidadC}, Cantidad de G: ${cantidadG}, Cantidad de T: ${cantidadT}`;
}
console.log(contarBasesADN("AACAGT"));

/** PUNTO 19
 * Escriba un programa que convierta entre grados Celsius y Fahrenheit utilizando dos funciones:
● celsiusToFahrenheit(celsius): convierte grados Celsius a Fahrenheit.
● fahrenheitToCelsius(fahrenheit): convierte grados Fahrenheit a Celsius.
 */
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}
console.log(celsiusToFahrenheit(25)); 
console.log(fahrenheitToCelsius(77));

/** PUNTO 20
 * Escriba un programa que calcule el área y el perímetro de un rectángulo. Usa dos funciones:
● calcularArea(largo, ancho): calcula el área del rectángulo.
● calcularPerimetro(largo, ancho): calcula el perímetro.
 */
function calcularAreaRectangulo(largo, ancho){
    return largo * ancho;
}
function calcularPerimetro(largo, ancho){
    return 2*(largo+ancho);
}
let largo = parseInt(prompt("Ingrese el largo del rectángulo: "));
let ancho = parseInt(prompt("Ingrese el ancho del rectángulo: "));

const area = calcularArea(largo, ancho);
const perimetro = calcularPerimetro(largo, ancho);

console.log(`El área del rectángulo es: ${area}`);
console.log(`El perímetro del rectángulo es: ${perimetro}`);

/**PUNTO 21
 * Escriba un programa que verifique si un número es primo utilizando dos funciones:
● esPrimo(numero): determina si un número es primo.
● imprimirResultado(numero): imprime si el número es primo o no, llamando a la función esPrimo.
 */

function esPrimo(numero){
    if (numero <= 1){
        return false;
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0){
            return false;
        }
    }
    return true;
}
function imprimirResultado(numero){
    if (esPrimo(numero)) {
        console.log(`${numero} es un número primo.`);
    } else {
        console.log(`${numero} no es un número primo.`);
    }
}
const numero = parseInt(prompt("Ingresa un número:"));
imprimirResultado(numero);

/**PUNTO 22
 * Escriba un programa que calcule si un estudiante aprueba o reprueba con base en tres notas. Usa tres funciones:
● calcularPromedio(notas): calcula el promedio de las tres notas.
● esAprobado(promedio): determina si el estudiante aprueba o no (promedio >= 6).
● mostrarResultado(aprobado): imprime si el estudiante aprueba o reprueba.
 */
function calcularPromedio(notas){

}
function esAprobado(promedio){

}
function mostrarResultado(aprobado){
    
}