/**3. Sea el array de objetos personas, donde cada objeto persona tiene 
   la estructura: {nombre:'Ana', edad: 20}.
   Se requiere programar la función agregarPersona(nombre, edad), la 
   cual recibe los datos simples y los agrega al array como objeto 
   persona, siempre que el nombre no exista. La función debe retornar 
   un valor booleano indicando true si se agregó la persona, false 
   caso contrario.
   
   */
  let persona = []
  let agregarPersona = (nombre, edad) => {
    let existe= false
    persona.forEach(persona => {
        if (persona.nombre === nombre) {
            existe = true;
        }
    });

    if (existe) {
        return false;
        }
        persona.push({nombre: nombre, eda: edad});
        return true;
    };

    let salida = document.getElementById("salida");
    salida.innerHTML += `Agregar nombre: Ana edad: 20: ${agregarPersona(`Ana`, 20)}`;
    salida.innerHTML += `<br> Agregar nombre: luis edad: 30: ${agregarPersona(`luis`, 30)}`;
    salida.innerHTML += `<br> Agregar nombre: carlos edad: 25: ${agregarPersona(`Ana`, 25)}`;