let lista = [];

// FUNCION-1
function agregar() {
    const var_1 = prompt('¿Qué quieres agregar?: ');
    lista.push(var_1);
    console.log('Se agrego la nueva tarea 👍');
}

// FUNCION-2
function ver() {
    if (lista.length === 0) {
        console.log('La lista esta vacia ingresa un valor primero 😮');
    } else {
        console.log('La lista de tareas es la siguiente:😴');
        for (let i of lista) {
            console.log(i);
        }
    }
}

// FUNCION-3
function borrar() {
    if (lista.length <= 0) {
        console.log('La lista esta vacia agregue un elemento 😮');
    } else {
        const v1 = parseInt(prompt('¿Qué tarea quiere eliminar?: '));
        console.log(`La tarea ${lista[v1 - 1]} se elimino`);
        lista.splice(v1 - 1, 1);
        console.log(`La lista de tareas tiene ${lista.length} elementos 😎`);
    }
}

// FUNCION-4
function completar() {
    if (lista.length <= 0) {
        console.log('La lista esta vacia ingresa un elemento 😮');
    } else {
        const v2 = parseInt(prompt('¿Qué tarea quiere completar?: '));
        lista[v2 - 1] = `✔️ ${lista[v2 - 1]}`;
    }
}

// FUNCION-5
function salir() {
    console.log('Saliendo... 🤗');
}

// BUCLES
try {
    while (true) {
        const a = parseInt(prompt(
            `
            Lista de opciones:
            1-Agregar tarea
            2-Ver tarea
            3-Eliminar tarea
            4-Marcar las tareas
            5-Salir

            Opcion: 
            `));

        if (a === 1) {
            agregar();
        } else if (a === 2) {
            ver();
        } else if (a === 3) {
            borrar();
        } else if (a === 4) {
            completar();
        } else if (a === 5) {
            salir();
            break;
        } else {
            console.log('Error intentalo de nuevo');
            break;
        }
    }
} catch (error) {
    console.log('ERROR: Ingrese un valor numérico valido..');
}

