a= new Object();
a.cosa_1=12,
a.cosa_2='dos',
a.cosa_3=false

console.log(a)


console.log(a.cosa_1)
console.log(a.cosa_2)
console.log(a.cosa_3)


let perro={
    nombre:'bola de pelo',
    comida:['Croquetas','Jamon','Queso'],
    hacer_baño:true,
    color:'gris',

    comer:function(){
        return `${this.nombre} esta comiendo ${this.comida[2]}`
    },
    ruido:function(){
        console.log('Gua Gua')
    }
};

console.log(perro.comer())


