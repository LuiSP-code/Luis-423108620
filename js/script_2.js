// let opciones = prompt(`
// Opcion:
// 1-Peliculas
// 2-Juegos
// 3-Series
// `)

// switch(opciones){
//     case 1:
//         console.log('El ballenato')
//         break
//     case 2:
//         console.log('50 Sombras de quien sabe quien ')
//         break
//     case 3:
//         console.log('Hola la cabra montes')
//         break
//     default :
//         console.log('ERROR')
// }

// i=0
// while(i<=10){
//     console.log(i)
// i+=1
// }

// a=parseInt(prompt('Primer numero: '))
// b=parseInt(prompt('Segundo numero: '))


// if(a===b){
//     console.log('ES IGUAL')
// }else if(a>b){
//     console.log(`${a} ES MAYOR`)
// }else if(b>a){
//     console.log(`${b} ES MAYOR`)
//
const m = Math.floor(Math.random() * 10) + 1;
// let h = parseInt(prompt('Ingrese un numero'));
h=true
let v = 3;
while (h !== m) {
    h = parseInt(prompt('Ingrese un numero'));
    if (h === m) {
        console.log('Adivinaste');
    } else if (v > 0) {
        console.log(`No es el numero, te quedan ${v} vidas`);
        v--;
    } else {
        console.log(`No adivinaste, el número era ${m}`);
        break
    }
}

