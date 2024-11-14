/** Ejercicios tipo Micro Maratón Nº4
 * =================================

1. Sea el array de objetos personas, donde cada objeto persona tiene
   la estructura: {nombre:'Ana', edad: 20}.
 Se requiere programar la función cuantosConEdad(edad) que retorne
la cantidad de personas que tienen la edad enviada por argumento.*/
/** entrada: array objetos personas
 * salidas:  número entero personas que tienen la edad enviada por argumento.
 */
let cntMayotque = (array, num) => {
    let cont = 0;
    for(let i = 0; i < array.length; i++){
        if (array[i] > num) {cont++;}
        }

    return cont;
};
let array = [4,2,6,5,8,9,1,7,3,10];
let salida = document.getElementById("salida");
salida.innerHTML = `Mayores que 5 = ${cntMayotque(array, 5)}`;
salida.innerHTML += `<br> Mayores que 3 = ${cntMayotque(array, 3)}`;