
//Funcion para renderizar una lista de tareas en formato json

export function renderizarListaSuperheroes(superheroes) {
     //formatea el array de superheroes en formato json con identacion 
    return JSON.stringify(superheroes, null, 2);
}


//Funcion para renderizar un mensaje generico en formato json

export function renderizarSuperheroe(superheroe) {
   //Formatea una tarea individual en formato json con identacion 
    return JSON.stringify(superheroe, null, 2);
}

