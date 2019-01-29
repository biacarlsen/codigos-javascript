//BOOLEAN: false ou true (0 ou 1);
//serve para verificar se uma expressão é verdadeira com if, caso contrário o else será ativado.
//ex:
var possuiGraduacao = true;
if(possuiGraduacao) {
  console.log("é vero");
} else  {
  console.log("é fake");
}

//ex2:
var possuiGraduacao = false;
var possuiMestrado = false;
if(possuiGraduacao) {
  console.log("graduado");
} else if(possuiMestrado)  {
  console.log("mestre");
} else {
  console.log("é um noia");
}

//EXPRESSÕES QUE RETORNAM FALSE:
// if(false)
// if(0) //ou -0
// if(NaN)
// if(null)
// if(undefined)
// if('') //ou "" ou ``
//todo o resto é true

//EXPRESSÕES QUE RETORNAM TRUE:
// if(true)
// if(1)
// if(' ')
// if('bia')
// if(-5)
// if({})

//OPERADOR LÓGICO DE NEGAÇÃO (!):
// if(!true) //false
// if(!1) //false

//DICA: vc pode utilizar o !! para verificar se uma expressão é true or false.
// if(!!' ') //true
// if(!!'') //false

//OPERADORES DE COMPARAÇÃO: vão sempre retornar um valor booleano
//ex:
10 > 5; //true
5 > 10; //false
20 < 10; //false
10 <= 10; //true
10 >= 11; //false

//OPERADORES DE COMPARAÇÃO: o == faz uma comparação não tão estrita e o === faz uma estrita(o tipo de dado deve ser o mesmo).
//Ex:
10 == '10'; //true
10 == 10; //true
10 === '10'; //false
10 === 10; //true
10 != 15; //true
10 != '10'; //false
10 !== '10'; //true

//OPERADORES LÓGICOS: && - compara se uma expressão E a outra são verdadeiras. (Retorna o primeiro valor false ou o último true)

true && true; //true 
true && false; //false
false && true; //false
'Gato' && 'Cão'; //'Cão' - duas strings - retornou o último valor verificado.
(5 - 5) && (5 + 5); // 0 - duas operações matemáticas - retornou o zero pq é um valor false.
'Gato' && false; //false
(5 >= 5) && (3 < 6); //true -comparações sempre retornam true or false - como as duas comparações são iguais - retorna TRUE.

//Obs: se ambos os valores forem true, ele irá retornar o último valor verificado. Se algum valor for false, ele irá retornar o mesmo e não irá continuar a verificar os próximos.

//Ex:
if((5-5) && (5+5)) {
  console.log('true');
} else {
  console.log('false');
}

//OPERADORES LÓGICOS: || - OU - compara se uma expressão ou outra é verdadeira - Busca o primeiro TRUE.

true || true; //true - primeiro valor true
true || false; //true - primeiro valor true
false || true; //true - primeiro valor true
'Gato' || 'Cão'; //'Gato' - primeiro valor true
(5 - 5) || (5 + 5); // 10 - duas operações matemáticas - retornou o 10 pq é um valor true.
(5 >= 5) || (3 < 6); //true.

//SWITCH - serve para verificar se uma variável é igual à diferentes valores utilizando o CASE. Caso ela seja igual, vc pode fazer alguma coisa e utilizar o BREAK para finalizar. O valor DEFAULT ocorrerá caso nenhuma das anteriores seja a verdadeira. 
//Ex:
var corFavorita = 'branco';
switch (corFavorita) {
  case 'azul':
  console.log('olhe para o céu');
  break;
  case 'amarelo':
  console.log('olhe para o sol');
  break;
  case 'verde':
  console.log('olhe para a floresta');
  break;
default:
console.log('feche os olhos');
}

//EXERCICIOS:

// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'

var idadeBia = 22;
var idadeVitor = 27;
if(idadeBia > idadeVitor) {
  console.log('é maior');
}  else if(idadeBia < idadeVitor) {
  console.log('é menor');
}else if(idadeBia === idadeVitor){
  console.log('é igual');
}

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
console.log(expressao); //retonar 3 - true

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre'; // string completa - true
var idade = 28; //number - true
var possuiDoutorado = false; //false
var empregoFuturo; //undefined - valor false
var dinheiroNaConta = 0; //zero - valor false
//Como verificar:
console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta)


// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if(brasil > china) {
  console.log('Brasil tem mais habitantes');
} else {
  console.log('Brasil tem menos habitantes');
}

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
} //false pq 'Gato' nao é igual a 'gato';

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
} //'Cão' pq é a última condição verdadeira; No caso seria TRUE.


















