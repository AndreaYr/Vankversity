/** PUNTO 1
 * Cree un programa que lea la edad de un usuario y muestre cuántos años tendrá el usuario
   dentro de tantos años como éste indique. Por ejemplo, si el usuario tiene 20 años y quiere saber
   cuántos años tendrá dentro de 15 años, el programa deberá mostrar que tendrá 35 años.
 */
let edad = parseInt(prompt("Ingrese su edad"));
let años = parseInt(prompt("Ingrese la cantidad de años en la que desea saber su edad"));
let edadFutura = edad+años;
console.log(edadFutura);


/** PUNTO 2
 * Cree un programa que lea dos números y muestre su producto, su módulo, su cociente, su suma y su resta.
 */
let numero1 = parseInt(prompt("Ingrese el primer número"));
let numero2 = parseInt(prompt("ingrese el segundo número"));
let producto = numero1*numero2;
let modulo = numero1%numero2;
let cociente = numero1/numero2;
let suma = numero1+numero2;
let resta = numero1-numero2;
console.log("Las operaciones de los dos números son: \n",
    "Producto: ", producto,"\n",
    "Módulo: ",modulo,"\n",
    "Cociente: ",cociente,"\n",
    "Suma: ",suma,"\n",
    "Resta: ",resta);


/** PUNTO 3
 * En un almacén de electrodomésticos se venden éstos a crédito y de contado. Si el cliente
    compra a crédito, el valor del electrodoméstico aumenta en un 5% por cada mes que dure el
    crédito. Cree un programa para un almacén donde el administrador ingrese el precio de un
    electrodoméstico y el plazo en meses para pagarlo a crédito y muestre el valor fijo de las cuotas
    mensuales que deberá pagar por el electrodoméstico.
 */
const CREDITO = 0.05;
let precio = parseInt(prompt("Ingrese el valor del electrodoméstico"));
let meses = parseInt(prompt("Ingrese los meses de plazo"));
let valor_credito = precio * Math.pow( 1+CREDITO, meses);
let valor_mes = valor_credito/meses;
console.log("Las cuotas que debe pagar durante los",meses," meses son de: ",valor_mes);

/** PUNTO 4
 * Cree un programa que tome la base y la altura de un triángulo e imprima su área.
*/
let base = parseFloat(prompt("Ingrese la base del triángulo"));
let altura = parseFloat(prompt("Ingrese la altura del triángulo"));
let area = 1/2*base*altura;
console.log("El area del triángulo es: ", area);

/** PUNTO 5
 * Cree un programa que tome el radio de un círculo e imprima su área y perímetro.
 */
let radio = parseFloat(prompt("Ingrese el radio del círculo"));
let area = Math.PI*Math.pow(radio, 2);
let perimetro = 2*Math.PI*radio;
console.log("Area: ",area,"\nperímetro: ",perimetro);

/** PUNTO 6
 * Cree un programa que tome el lado de un cubo e imprima su volumen.
 */
let lado = parseInt(prompt("Ingrese el lado de un cubo"));
let volumen = Math.pow(lado, 3);
console.log("El volumen del cubo es:", volumen);

/** PUNTO 7
 * Cree un programa que tome el precio de un producto e imprima su precio final al consumidor
    con un IVA de 19%.
 */
const IVA = 0.19;
let precio = parseFloat(prompt("Ingrese el precio del producto"));
let precioIva = (precio*IVA)+precio;
console.log("El precio del producto con iva es: ", precioIva);

/** PUNTO 8
 * Cree un programa que tome el valor de un producto e imprima su precio final si éste tiene siempre un descuento 
 * del 10%.
 */
const DESCUENTO = 0.1;
let precio = parseFloat(prompt("Ingrese el precio del producto"));
let precioDescuento = precio-(precio*DESCUENTO);
console.log("El precio del producto con descuento es: ", precioDescuento);

/** PUNTO 9
 * Cree un programa que lea una cantidad e imprima un porcentaje a calcular requerido sobre esa cantidad.
 */
let cantidad = parseInt(prompt("Ingrese la cantidad"));
let porcentaje = parseInt(prompt("Ingrese el porcentaje a calcular"));
let porcentajeDeCantidad = cantidad*(porcentaje/100);
console.log("El ",porcentaje,"% a calcular de la cantidad es", porcentajeDeCantidad);

/** PUNTO 10
 * Cree un programa que tome un número real e imprima su valor absoluto.
 */
let numero = parseFloat(prompt("ingrese el número"));
let valorAbsoluto = Math.abs(numero);

/** PUNTO 11
 * Cree un programa que simule el lanzamiento de dos dados y muestre la suma de los resultados
 */
let dado1 = Math.floor(Math.random()*6)+1;
let dado2 = Math.floor(Math.random()*6)+1;
let suma = dado1+dado2;
console.log("Dado 1: ",dado1,"\nDado 2: ",dado2," \nsuma de los dados: ", suma);

/** PUNTO 12
 * Cree un programa que realice la conversión de grados Celsius a Fahrenheit
 */
let gradoC = parseInt(prompt("Ingrese los grados celcius: "));
let gradoF = (gradoC*9/5)+32;
console.log("Los grados Fahrenheit son: ", gradoF);

/** PUNTO 13
 * Cree un programa que calcule el factorial de 5
 */
let factorial = 5*4*3*2*1;
console.log("El factorial del número 5 es: ", factorial);

/** PUNTO 14
 * Cree un programa que genere un número aleatorio dentro de un rango específico.
 */
let inicio = parseInt(prompt("Ingrese el valor de inicio del rango: "));
let fin = parseInt(prompt("Ingrese el valor final del rango: "));
let numeroAleatorio = Math.floor(Math.random()*fin)+inicio;
console.log("El número aleatorio es: ", numeroAleatorio);

/** PUNTO 15
 * Cree un programa que calcule horas y minutos a partir de segundos.
 */
let segundos = parseInt(prompt("Ingrese los segundos a calcular: "));
let horas = Math.floor(segundos/3600);
let minutos = Math.floor((segundos%3600)/60);
console.log(`son ${horas} horas y ${minutos} minutos.`);

/** PUNTO 16
 * Cree un programa que dados a, b y c, use la fórmula general para resolver la ecuación cuadrática correspondiente.
 */
let a = parseInt(prompt("Ingrese un valor para a:"));
let b = parseInt(prompt("Ingrese un valor para b:"));
let c = parseInt(prompt("Ingrese un valor para c:"));
let x1 = (-b+Math.sqrt(Math.pow(b,2)-4*a*c))/2*a;
let x2 = (-b-Math.sqrt(Math.pow(b,2)-4*a*c))/2*a;

console.log(`Los valores son ${x1} y ${x2}`);