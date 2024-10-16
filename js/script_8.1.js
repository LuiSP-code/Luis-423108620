document.getElementById('calculator-form').addEventListener('submit',function(event){
    event.preventDefault();

    let num_1=parseFloat(document.getElementById('num1').value);
    let num_2=parseFloat(document.getElementById('num2').value);
    let operador= document.getElementById('operador').value;
    let resultado;

    switch(operador){
        case 'suma':
            resultado=num_1 + num_2;
            break
        case 'resta':
            resultado=num_1-num_2;
            break
        case 'multiplicación':
            resultado=num_1*num_2;
            break
        case 'divición':
            resultado= num_1/num_2;
            break
        default:
            resultado= 'Operador no valido';
    }
    document.getElementById('resultado').innerText=`El resultado es ${resultado}`;
});