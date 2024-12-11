/**
 * Solución de ejercicios semana 4
 * @author Yuri Andrea Ramírez
 */

// Punto 1
function imprimirNumeros(){
    let j = [200, -100, 45, 78, 32];

    j.forEach((elemento, indice) => {
        if(indice === 2 || indice === 4){
            console.log(`El elemento de indice ${indice} es: ${elemento}`);
        }
    });
}

// Punto 2 
function imprimirLetras(){
    let f = ["ab", "cd", "ef", "gh"];

    f.forEach((elemento) => {
        if(elemento === "cd" || elemento === "gh"){
            console.log(`Elemento: ${elemento}`);
        }
    });
}

//Punto 3
function eliminarElemento(){
    let array = [1, 2, false];
    let eliminado = array.splice(2, 1);
    console.log(`Arreglo: ${array}\nelemento eliminado del arreglo: ${eliminado} `);
}

// Punto 4
function imprimirElementos(){
    let aux = [10,true,"k200",20.7];
    aux.forEach(function(elemento, indice, aux){
        console.log(elemento);
    });
}

// Punto 5
function imprimirNumerosImpares(){
    let k = [17,4,64,79,109,112];
    k.forEach(function(elemento){
        if(elemento%2 !== 0){
            console.log(`Elemento impar: ${elemento}`);
        }
    });
}

// Punto 6
function cambiarBooleano(){
    let h = [true,true,false,true,false];
   
    h.splice(2,1,true);
    h.splice(3,1,false);
    console.log(`Arreglo nuevo: ${h}`);    
}

// Punto 7
function cambiarElemento(){
    let w = ["wc", "jp", "zx", "qr"];
    w.forEach((elemento, indice) => {
        if(elemento === "jp"){
            w.splice(indice,1,true);
        }else if(elemento === "qr"){
            w.splice(indice,1,30);
        }
    });
    console.log(`Nuevo arreglo: ${w}`);
}
// Punto 8
function imprimirArreglo(array){
    array.forEach(function(elemento,indice){
        console.log(`Elemento ${indice}: ${elemento}`);
    })
}
let array = [2,5,7,9];

// Punto 9
function mostrarCantidadElementos(array){
    let contador = 0;
    array.forEach((elemento,indice) => {
        contador++;
    });
    return contador;
}
//console.log(`El número de elementos que contiene el arreglo es ${mostrarCantidadElementos(array)}`);

// Punto 10
function mostrarIndices(){
    let array=[30,44,54,89,100];
    console.log(`Indice de 44: ${array.indexOf(44)}
Indice de 89: ${array.indexOf(89)}
Indice de 70: ${array.indexOf(70)}`);
}
// Punto 11
function eliminarElemntoIndice(){
    let array = [34,["q"],67,1,99,1/2];
    array.splice(3,2);
    console.log(array);
}
// Punto 12
function ordenarArreglos(){
    let arreglo1 = ["Pera", "Cebolla", "Limón", "Pimentón"];
    let arreglo2 = ["Manzana", "Banano", "Lechuga", "Perejíl"];
    let frutas = [];
    let verduras = [];

    for(let i = 0; i<arreglo1; i++){

    }
            if(arreglo1[i] === "Pera" || elemento === "limón" || elemento === "Manzana" || elemento === "Banano"){
                frutas += elemento;
            }
      
    console.log(frutas);

}


//Punto 13
function mostrarLetra(nombres){
    let contador = 0;
    nombres.forEach((elemento) => {
        for(let i=0; i<elemento.length; i++){
            if(elemento.charAt(i) === 'c'){
                contador++;
            }
        }
    })
    console.log(`La letra c aparece ${contador} veces.`);
}
let nombres = prompt("Ingrese el arreglo de nombres separado por espacio: ");
let arrayNombres = nombres.split(" ");
//mostrarLetra(arrayNombres);

//Función reutilizable que permite validar datos repetidos.
function validarRepetidos(array){
    let op = false;
    for(let i=0; i<array.length; i++){
        for(let j = array.length-1; j>i; j--){
            if(array[i] === array[j]){
                return true;
            }else{
                op += false;
            }
        }
    }
    return op;
}

//Punto 14
function mostrarArreglo(numeros){
    if(validarRepetidos(numeros) === true){
        console.log("Los números están repetidos porfavor vuelva a ingresar.");
    }else{
        console.log(`El arreglo ordenado es ${numeros.sort((a,b) => a-b)}`);
    }
}
let arrayNumeros = prompt("Ingrese el arreglo de números separados por coma: ");
let arrayNum = arrayNumeros.split(",");
let num = arrayNum.map(Number);
// mostrarArreglo(num);

//punto 15
function mostrarLetras(letras){
    if(validarRepetidos(letras) === true){
        console.log("El arreglo contiene letras repetidas porfavor vuelva a ingresar.");
    }else{
        console.log(`El arreglo ordenado es ${letras.sort()}`);
    }
}

let letras = prompt("Ingrese el arreglo de letras separado de espacios:");
let arrayLetras = letras.split(" ");
mostrarLetras(arrayLetras);
