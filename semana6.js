/**
 * Funcion de primer orden, se puede guardar una 
 * función en una variable
 * */
const fn = (a) => "soy una funcion"+a;
console.log(fn(" llamada fn"));

/**
 * Funcion de orden superior
 */
const fn2 = (f, some) => {
    console.log("Algo pasa aqui");
    console.log(f(some));
}
fn2(fn, " que se llama desde otra función");

//Función pura no tiene efectos colaterales.

//---------------------EJERCICIOS--------------------
//Punto 1
function sumar(p1,p2,callback){
    return callback(p1,p2);
}

const suma = (p1,p2) => p1+p2;

console.log(sumar(5,3,suma));

//Punto 2
function aplicarOperacion(numero, callback){
    return callback(numero);
}

const potencia = (numero) => numero**2;

//Punto 3
function imprimirMensaje(callback){
    setTimeout(()=>{
        callback();
    }, 2000);
}

const mensaje = () =>{
    console.log("hola");
}

imprimirMensaje(mensaje);

//Punto 4
function ordenarArray(array, callback){

}

const convertirMayusculas = array.map(callback(elemento.toUpperCase));


//Punto 8
console.log("---------------------");
function verificarArreglo(array, callback){
    callback(array);
}

const operaciones = (array) => {
    let sumaTotal = array.reduce((sumaTotal, elemento) => sumaTotal+elemento);
    let multiplicacionTotal = array.reduce((multiplicacionTotal, elemento) => multiplicacionTotal*elemento);
    let divisionTotal = array.reduce((multiplicacionTotal, elemento) => multiplicacionTotal/elemento);
    console.log(`La suma total es: ${sumaTotal}\nLa multiplicación total es: ${multiplicacionTotal}\nLa division total es: ${divisionTotal}`);
}

let array = [1,2,3,4,5,6,7,8,9];
verificarArreglo(array, operaciones);