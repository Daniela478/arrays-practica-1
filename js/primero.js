/**1. Sea el array de objetos personas, donde cada objeto persona tiene
   la estructura: {nombre:'Ana', edad: 20}.
   Se requiere programar la función cuantosConEdad(edad) que retorne
   la cantidad de personas que tienen la edad enviada por argumento. 
   entrada: array de objetos personas.
   salida: numero personas de cierta edad*/

   let cuantosConEdad = (array, edad) => {
    let cont = 0;
    for(let i = 0; i < array.length; i++){
        if (array [i] = edad) {cont++;}
    }
    return cont;
   };
   let array = [
    {nombre:'Ana', edad: 20},
   ];

   let salida = document.getElementById("salida");
   salida.innerHTML = `Cantidad de personas con 20 años de edad = ${cuantosConEdad(array, 20)}`;



