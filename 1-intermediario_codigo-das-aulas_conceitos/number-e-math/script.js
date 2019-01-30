// OBJETOS  - Number e Math

// NUMBER : É a construtora de números, todo número possui as propriedades e métodos do prototype de Number. Number também possui alguns métodos.

// Ex:
// const ano = 2018;
// const preco = new Number(99);


// NUMBER.ISNAN() E NUMBER.ISINTEGER() : isNaN() é um método de Number, ou seja, não faz parte to protótipo. 
// isInteger() verifica se é uma integral.

// Ex:
// Não é um número - not a number?
Number.isNaN(NaN); // true
Number.isNaN(4 + 5); // false

// Ex:
// É inteiro?
Number.isInteger(20); // true
Number.isInteger(23.6); // false

// Obs: existem dois tipos de números: int - valor inteiro e float - valor quebrado - decimal

// NUMBER.PARSEFLOAT() E NUMBER.PARSEINT() : parseFloat() serve para retornarmos um número a partir de uma string. A String deve começar com um número. parseInt recebe também um segundo parâmetro que é o Radix, 10 é para decimal.

// Ex:
parseFloat('99.50'); // Mesma função sem o Number
// Ex:
Number.parseFloat('99.50'); // 99.5
// Ex:
Number.parseFloat('100 Reais'); // 100 - conseguiu retornar um número pq os demais caracteres eram depois do 100.
// Ex:
Number.parseFloat('R$ 100'); // NaN - aqui não conseguiu retornar numero pq os caracteres sao antes do 1000.
// Ex:
parseInt('99.50', 10); // 99 - ele corta tudo que for decimal pra retonar um numero inteiro
// Ex:
parseInt(5.43434355555, 10); // 5
// Ex:
Number.parseInt('100 Reais', 10); // 100

// Obs: Float possui decimal, Integer não.


// N.TOFIXED(DECIMAIS) : Arredonda o número com base no total de casas decimais do argumento.

// Ex:
const preco = 2.99;
preco.toFixed(); // "3"
// Ex:
const carro = 1000.455;
carro.toFixed(2) // "1000.46" - duas casas decimais como parâmetro
// Ex:
const preco2 = 1499.49;
preco2.toFixed() // "1499"

// OBS IMPORTANTE: ESSA FUNÇÃO SEMPRE ARREDONDA UMA STRING!


// N.TOSTRING(RADIX) : Transforma o número em uma string com base no Radix. Use o 10 para o sistema decimal.

// Ex:
const preco3 = 2.99;
preco3.toString(10); // '2.99'


// N.TOLOCALESTRING(LANG, OPTIONS) : Formata o número de acordo com a língua e opções passadas.

// Ex:
const preco4 = 59.49;
preco4.toLocaleString('en-US', {style: 'currency', currency: 'USD'}); // $59.49 - dólar americado
// Ex:
preco4.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}); // R$ 59,49 - reais


// MATH : É um Objeto nativo que possui propriedades e métodos de expressões matemáticas comuns.

// Ex:
Math.PI // 3.14159
// Ex:
Math.E // 2.718
// Ex:
Math.LN10 // 2.303



// MATH.ABS(), MATH.CEIL(), MATH.FLOOR() E MATH.ROUND() : 
// abs() retorna o valor absoluto, ou seja, transforma negativo em positivo. 
// ceil() arredonda para cima, retornando sempre uma integral e floor para baixo. 
// round() arredonda para o número integral mais próximo.

// Ex:
Math.abs(-5.5); // 5.5
// Ex:
Math.ceil(4.8334); // 5
// Ex:
Math.ceil(4.3); // 5
// Ex:
Math.floor(4.8334); // 4
// Ex:
Math.floor(4.3); // 4
// Ex:
Math.round(4.8334); // 5
// Ex:
Math.round(4.3); // 4



// MATH.MAX(), MATH.MIN() E MATH.RANDOM() : 
// max() retorna o maior número de uma lista de argumentos
// min() retorna o menor número
// random() retorna um número aleatório entre 0 e 1.

// Ex:
Math.max(5,3,10,42,2); // 42
// Ex:
Math.min(5,3,10,42,2); // 2
// Ex:
Math.random(); // 0.XXX
// Ex:
Math.floor(Math.random() * 100); // entre 0 e 100
// Ex:
Math.floor(Math.random() * 500);  // entre 0 e 500
//Ex: Número random entre 0 e 10
const aleatorio = Math.floor(Math.random() * 10)

//Ex: Número random entre 72 e 32
// Math.floor(Math.random() * (max - min + 1)) + min;
Math.floor(Math.random() * (72 - 32 + 1)) + 32; 


// EXERCÍCIOS:

// Retorne um número aleatório entre 1050 e 2000
// R:
const aleatorioNumber = Math.floor(Math.random() * (2000 - 1050 + 1)) + 1050
console.log(aleatorioNumber); 


// Retorne o maior número da lista abaixo

// jeito do vitor:
const numeros = '4, 5, 20, 8, 9';
// R:
const numerosArray = numeros.split(',');
let arrayNumeros = [];
let contador = 0;
let maior = 0;
numerosArray.forEach((item) => {
  const numerosSemEspaco = +item.trim();
  arrayNumeros[contador] =  numerosSemEspaco;
  if(arrayNumeros[contador] > maior){
    maior = arrayNumeros[contador];
  }
  contador++;
});
console.log(arrayNumeros);
let resultadoFinal = Math.max(arrayNumeros);
console.log(maior);

// jeito do professor: 

const arrayNumerosOrigamid = numeros.split(', ');
const numeroMaximo = Math.max(...arrayNumerosOrigamid);
console.log(numeroMaximo);


// Crie uma função para limpar os preços e retornar os números com centavos arredondados depois retorne a soma total

const listaPrecos = ['R$ 59,99', ' R$ 100,222',
                     'R$ 230  ', 'r$  200'];

// R:
let soma = 0; 
listaPrecos.forEach((item) => {
  const numeroLimpo = item.trim().toUpperCase();
  const arrayPrecos = numeroLimpo.split('R$ ');
  const precosNumber = parseInt(arrayPrecos[1]);
  soma += precosNumber;
})
console.log('A soma total é: ' + 'R$ ' + soma + ",00");

// Jeito do professor:

function limparPreco(preco) {
  preco = +preco.toUpperCase().replace('R$', '').trim().replace(',','.');
  preco = +preco.toFixed(2);
  return preco;
}
let somaOrigamid = 0;
listaPrecos.forEach((preco) => {
  somaOrigamid += limparPreco(preco);
})
console.log(somaOrigamid.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}));
