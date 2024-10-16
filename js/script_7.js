// Agregar un ojeto dentro de una lista

let frutas=[],fruta
fruta=prompt('Agregar un fruta');

frutas.push(fruta);
while(confirm("Deseas agregar una nueva fruta?")){
    let fruta_agrega=prompt("Agrega otra fruta:\n");
    frutas.push(fruta_agrega);
};

// for (const element of frutas) {
//     console.log(frutas);
//     alert(`${frutas}`);
// };

frutas.forEach((numero,valor)=>{
    console.log(`-${valor+1} ${numero}`)
})

// // Número aleatorio 
// // ->Funcion declarativa

// function num_aleatorio(){
//     return (Math.floor(Math.random()*500));
// };

// console.log(num_aleatorio());

// // Funcion expresada
// let a= function num(){
//     return (Math.round(Math.random()*500));
// };

// console.log(a());

// // Funcion flecha

// let $numero=(val_1,val_2)=>{
//     console.log(Math.round(Math.random()*(val_1-val_2)+val_2));
// };

// $numero(1,500);

// const frutas=['Manzana','Pera','Naranja','Aguacate']
// frutas.forEach(i=> {
//     console.log(i);
// });


