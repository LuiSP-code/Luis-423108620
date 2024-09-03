// Variables
let lista=[];
//FUNCIONES
// Funcion_1
function agregar(){
let var_1=prompt(`¿Qué quieres agregrar?: `);
lista.push(var_1);
console.log('Se agrego la nueva tarea 😉👍');
};
// Funcion_2
function ver(){
if (lista.length<=0){
    console.log('La lista esta vacia, ingresa un valor primero 😥');
}else{
    console.log(`La lista de las tareas es la siguiente:`);
    for (i of lista){
        console.log(i);
    }
}};
// Funcion_3
function vaciar(){
if (lista.length<=0){
    console.log(`La lista esta vacia agrega un elemento 😮`);
}else{
    lista.pop();
    console.log(`La lista tiene las siguientes tareas: ${lista.length}`);
}
};
function salir(){
    console.log('Saliendo...🤗')
};
// BUCLES
try {
    while (true) {
        const a = parseInt(prompt(`
        Lista de opciones:
        1-Agregar tarea
        2-Ver tarea
        3-Marcar las tareas
        4-Salir

        Opcion: 
        `));

        if (a === 1) {
            agregar();
        } else if (a === 2) {
            ver();
        } else if (a === 3) {
            vaciar();
        } else if (a === 4) {
            salir();
            break;
        } else {
            console.log('Error intentalo de nuevo');
            break;
        }
    }
} catch (e) {

    if (e instanceof TypeError){
        console.log('ERROR: Ingrese un valor numérico valido..');
    }
    if (e instanceof SyntaxError){
        console.log('ERROR: Ingrese un valor valido')
    }
}
