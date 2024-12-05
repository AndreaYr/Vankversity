let user = {};
//agregar elementos
user.nombre = "VankVersity";
user.edad = 1;

console.log(user.nombre);
//console.log(user[edad]);

//Agregamos valores con notación de corchetes
user["estatura"] = 180;
console.log(user);

user.edad = 20;
console.log(user);

//eliminar
delete user.edad;
console.log(user);

/*Cree un objeto donde se almacenen los productos de un supermercado con su respectivo precio. Los productos son:
Papa, Arroz, Lentejas, Aceite. Luego imprima cada uno de los precios almacenados en el
objeto anterior con su respectivo producto.*/

let productos = {papa: 1000, arroz: 2000, lentejas: 2500, aceite: 8000};
console.log(productos);
for(let producto in productos){
    console.log(`${producto}: $${productos[producto]}`);
}

let objeto = {}
    objeto.nombre = "Yuri";
    objeto.edad = 23;
    objeto.sexo = "femenino";

console.log(objeto);

let obj = {dos:2, cinco:5, siete:7, cuarenta:40, cincuenta:50}
for(let valor in obj){
    if(obj[valor]%2==0){
        console.log(`Valor par\n
            ${valor}: ${obj[valor]}`);
    }
}

function habilitados(objeto){
    let contador = 0;
    for(let habilitado in objeto){
        if(objeto[habilitado] === "habilitado"){
            contador++;
        }
    }
    console.log(`${contador} usuarios se encuentran habilitados`);
}

objeto = {
    183344: "habilitado",
    354625: "habilitado", 
    6762442: "inhabilitado", 
    88552: "inhabilitado", 
    438276: "habilitado"  
}
habilitados(objeto);

function recorrerObjeto(){
    let objeto = { numeros: [45, 78, 22, 89, 8] };

    Object.entries(objeto).forEach(([]) => {
        console.log()
    })
}


function mostrarPaises(){
    let continentes = {
        america: [],
    }


    let continente = prompt("Ingrese el nombre de un continente: \n",
        "América\n África\n Asia\n Europa\n Oceanía");


}