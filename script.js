//#region 
//en esta region estaran las variables
var nombre = "Adrian";
let edad = 18;
const apellido = "Vazquez";
let value = 0;
var arreglo = [1, 2, 3, 4, 5, 6];
//#endregion
//#region 
//en esta region estaran las funciones basicas matematicas
var suma = num => num + num;
let resta = num => num - num;
const multiplicacion = num => num * num;
var division = num => num / num;
//#endregion
//#region 
//en esta region se imprimen los datos
console.log("Nombre : " + nombre);
console.log(`Apellido : ` + apellido);
console.log('Edad : ' + edad);
for (value of arreglo) {
    console.log(arreglo[value]);
    value++;
}
//#endregion