// Cruces_1
function cruz_abajo(num) {
    for (let i = 1; i < num; i++) {
        a='*'
        console.log(a+'*');
    }
}
cruz_abajo(10)

// Cruces_2
function cruz_alado(num) {
    let a = '*';
    console.log(a.repeat(num));
}
cruz_alado(10)

// Tablas de multiplicar
for (i=1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i}X${j}=${i * j}\n`);
    }
}

// RECORRIDO DE UNA LISTA
function longuitud_lista(lista) {
    lista.forEach((element,i)=> {
        console.log(element,i)
    });
}
let lista = ['Manzana', 'Pera', 'Aguacate', 'Guayaba', 'Sandia', 'Jitomate', 'Piña', 'Naranja', 'Toranja', 'Plantano'];
longuitud_lista(lista);

