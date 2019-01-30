//Formas de atribuição de valor:

//Ex:
var numero = 20;
// numero = numero + 10; ou
numero += 10; 
console.log(numero); //30

//Outros exemplos:
var x = 5;
var y = 10;
x += y; //x = x + y (15)
x -= y; //x = x - y (-5)
x *= y; //x = x * y (50)
x %= y; //x = x % y (0) //resto da divisão
x /= y; //x = x / y (0.5)

//Operador Ternário - serve para abreviar condicionais if e else
//Estrutura: condição ? true : false
//Ex:
var idade = 19;
var podeBeber = (idade >= 18) ? 'Pode beber' : 'Não pode beber';
console.log(podeBeber);

//Geralmente utilizando quando precisamos atribuir valor à uma variável dependendo de uma condição.

//EXERCÍCIOS:

// Some 500 ao valor de scroll abaixo, atribuindo o novo valor a scroll.
var scroll = 1000;
// scroll = scroll + 500; ou
scroll += 500; 
console.log(scroll);

// Atribua true para a variável darCredito caso o cliente possua carro e casa. E false caso o contrário.
var possuiCarro = true;
var possuiCasa = true;
var darCredito;

var darCredito = (possuiCarro && possuiCasa); //Isso é a mesmo coisa que isso: 
// var darCredito = (possuiCarro && possuiCasa) ? true : false;
//mas fica redundante pois isso ja retorna true or false sozinha.
console.log(darCredito);

