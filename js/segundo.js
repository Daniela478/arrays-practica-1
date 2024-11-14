/**2. Sea el array de objetos personas, donde cada objeto persona tiene 
   la estructura: {nombre:'Ana', edad: 20}.
   Se requiere programar la función nombresConEdad(edad) que retorne 
   un array de strings (datos simples) con los nombres de las personas 
   que tienen la edad enviada por argumento.
   entrada. ARRAY OJETOS PERSONAS
   SALIDA: NOMBRES DE PERSONAS CON MISMA CIERTA EDAD */

   let nombresConedad = (array, edad) => {
    let nombre =[];
    for (let i = 0; i < array.length; i++){
        if (array[i].edad == edad){
            nombre.push(array[i].nombre);
        }
    }
    return nombre;
   };
   let array = [
    {nombre:'Ana', edad: 20},
    {nombre:'lola', edad: 20},
    {nombre:'laura', edad: 20},
   ];

   let salida = document.getElementById("salida");

   salida.innerHTML = `Nombres de las personas con 20 años: ${nombresConedad(array, 20)}`;