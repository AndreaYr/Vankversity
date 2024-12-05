/*let numero = parseInt(prompt("Ingrese un número:"));
if(numero%2==0){
    console.log("El número es par");
}else{
    console.log("El número es impar")
}

let numero = parseInt(prompt("Ingrese un número:"));
let validarNumero = numero%2;

switch(numero){
    case 0:
        console.log("El número ",numero," es par");
        break;
    default:
        console.log("El número ",numero," es impar");
        break;
}
 
*/

//-----------------------------------CICLOS-----------------------------
/*
for(let i=1; i<=20; i++){
    console.log(i);
}

let numero=-100;
while(numero<=600){
    console.log(numero);
    numero++;
}


for(let i=0; i<=50; i++){
    let mult = 3 * i;
    console.log(mult);
}

let n = parseInt(prompt("ingrese la cantidad de números naturales"));
let contador = 1;
let suma = 0;
while(contador <= n){
    suma += contador;
    contador++;
}
console.log(suma);


let numero=0;
let suma  = 0;
for(let i=1; i!=0; i++){
    numero = parseInt(prompt(`ingrese el número ${i}`));
    if(numero==0){
        break;
    }else{
        suma += numero;
    }
}
let promedio = suma/i;
console.log(`El promedio es ${promedio}`);


let suma = 0;
let n = parseInt(prompt("ingrese un valor"));
for(let i=1; i<=n; i++){
    suma += Math.pow(i, 2);
}
console.log(`La suma de los cuadrados es ${suma}`);
*/

//----------TALLER-----------------
/*1. Cree un programa que lea la edad de un usuario e imprima un mensaje que diga si el usuario es mayor de
edad o no.
let edad = parseInt(prompt("Ingrese su edad"));
if(edad >= 18){
    console.log("El usuario es mayor de edad");
}else{
    console.log("El usuario es menor de edad");
}
*/
/*2. En un supermercado se tiene los siguientes productos: lentejas, crema, arroz y vino. Las lentejas y el arroz no
pagan IVA, el vino y la crema si. Cree un programa que reciba el nombre de alguno de los productos
mencionados y muestre si el producto paga IVA o no. Realice una versión con condicionales y otra con estructura
switch-case.

//Versión condicional
let producto = prompt("Ingrese el nombre del producto");
if(producto.equals("vino" || "crema")){
    console.log("El producto paga IVA");
}else{
    console.log("El producto no paga IVA");
}

//Versión estructura switch-case
let product = prompt("Ingrese el nombre del producto");
switch(product){
    case "vino": case "crema":
        console.log("El producto paga IVA");
        break;
    case "lentejas": case "arroz":
        console.log("El producto no paga IVA");
        break;
    default:
        console.log("El producto no encontrado");
        break;
}

/*3. Cree un programa que reciba dos números y muestre el mayor. En caso de que los números sean iguales
también se debe mostrar al usuario.
let numero1 = parseInt(prompt("Ingrese el primer número"));
let numero2 = parseInt(prompt("Ingrese el segundo número"));
if(numero1 > numero2){
    console.log(`El número ${numero1} es mayor`);
}else if(numero2>numero1){
    console.log(`El número ${numero2} es mayor`);
}else{
    console.log("Los números son iguales");
}

/*4. Cree un programa que lea los tres ángulos internos de un triángulo y muestre si los ángulos corresponden a un
triángulo o no. Realice una versión con condicionales y otra con estructura switch-case.*/
let angulo1 = parseInt(prompt("Ingrese el primer ángulo"));
let angulo2 = parseInt(prompt("Ingrese el segundo ángulo"));
let angulo3 = parseInt(prompt("Ingrese el tercer ángulo"));
let sumaAngulos = angulo1+angulo2+angulo3;

if(sumaAngulos == 180){
    console.log("Los ángulos corresponden al de un triángulo");
}else{
    console.log("Los ángulos no corresponden al de un triángulo");
}  

//Versión switch-case
switch(sumaAngulos){
    case 180:
        console.log("Los ángulos corresponden al de un triángulo");
        break;
    default:
        console.log("Los ángulos no corresponden al de un triángulo");
        break;
}

/*5. Cree un programa que lea un número y muestre si este es par o impar. Realice una versión con condicionales
y otra con estructura switch-case.*/
let numero = parseInt(prompt("Ingrese un número"));

if(numero%2==0){
    console.log(`El número ${numero} es par`);
}else{
    console.log(`El número ${numero} es impar`);   
}

//Versión switch-case
let validar = numero%2;
switch(validar){
    case 0:
        console.log(`El número ${numero} es par`);
        break;
    default:
        console.log(`El número ${numero} es impar`);   
        break;
}

/*6. Cree un programa que lea un número y muestre si este es divisible entre cinco o no. Realice una versión con
condicionales y otra con estructura switch-case.*/
let numero = parseInt(prompt("Ingrese un número"));
if(numero/5==0){
    console.log(`El número ${numero} es divisible entre 5`);
}else{
    console.log(`El número ${numero} no es divisible entre 5`);
}

//Versión switch-case
switch(numero/5){
    case 0:
        console.log(`El número ${numero} es divisible entre 5`);
        break;
    default:
        console.log(`El número ${numero} no es divisible entre 5`);
        break;
}
        

/*7. Cree un programa que lea un número entre 1 y 15 y muestre si éste es primo o no. Realice una versión con
condicionales y otra con estructura switch-case.*/
let numero = parseInt(prompt("Ingrese un número"));

*/