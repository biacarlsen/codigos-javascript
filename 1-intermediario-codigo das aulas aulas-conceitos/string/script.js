
// OBJETOS: String - propriedades e métodos

// STRING : É a construtora de strings, toda string possui as propriedades e métodos do prototype de String.

// const comida = 'Pizza';
// const liquido = new String('Água');


// STR.LENGTH : Propriedade com o total de caracteres da string.

const comida = 'Pizza';
const frase = 'A melhor comida'; //os espaços tbm contam

comida.length; // 5
frase.length; // 15

comida[0] // P - retornando o primeiro caracter
frase[0] // A - retornando o primeiro caracter
frase[frase.length - 1] // a - retornando o último caracter


// STR.CHARAT(N) : Retorna o caracter de acordo com o index de (n).

const linguagem = 'JavaScript';

linguagem.charAt(0); // J - retornando o primeiro caracter
linguagem.charAt(2); // v - retornando o terceiro caracter
linguagem.charAt(linguagem.length - 1); // t - retornando o último caracter


// STR.INCLUDES(SEARCH, POSITION) : Procura pela string exata dentro de outra string. A procura é case sensitive.
// Ex:

// const fruta = 'Banana';
// const listaFrutas = 'Melancia, Banana, Laranja';

// listaFrutas.includes(fruta); // true
// fruta.includes(listaFrutas); // false


// STR.ENDSWITH(SEARCH) E STR.STARTSWITH(SEARCH) :  Procura pela string exata dentro de outra string. A procura é case sensitive.
// Ex:

const fruta = 'Banana';

fruta.endsWith('nana'); // true - termina com...
fruta.startsWith('Ba'); // true - começa com...
fruta.startsWith('ba'); // false - começa com... -deu false pq a procura é case sensitive -ba não é a mesma coisa que Ba;
fruta.startsWith('na'); // false - começa com...


// STR.SLICE(START, END) : Corta a string de acordo com os valores de start e end.
// Ex:
const transacao1 = 'Depósito de cliente';
const transacao2 = 'Depósito de fornecedor';
const transacao3 = 'Taxa de camisas';

transacao1.slice(0, 3); // Dep
transacao2.slice(0, 3); // Dep
transacao3.slice(0, 3); // Tax

transacao1.slice(12); // cliente
transacao1.slice(-4); // ente
transacao1.slice(3, 6); // ósi



// STR.SUBSTRING(START, END) : Corta a string de acordo com os valores de start e end. Não funciona com valores negativos como o slice.
// Ex:

// const linguagem = 'JavaScript';
// linguagem.substring(3,5); // aS
// linguagem.substring(0,4); // Java
// linguagem.substring(4); // Script
// linguagem.substring(-3); // JavaScript (nao funcionou com valor negativo - retornou tudo)


// STR.INDEXOF(SEARCH) E STR.LASTINDEXOF(SEARCH) : Retorna o index da string, assim que achar o primeiro resultado ele já retorna. No caso do lastIndexOf ele retorna o último resultado.
// Ex:
const instrumento = 'Guitarra';

instrumento.indexOf('r'); // 5 (primeiro 'r)
instrumento.lastIndexOf('r'); // 6 (ultimo 'r')
instrumento.indexOf('ta'); // 3 (primeiro 'na')


// STR.PADSTART(N, STR) E STR.PADEND(N, STR) : Aumenta o tamanho da string para o valor de n. Ou seja, uma string com 8 caracteres, se passarmos n = 10, ela passará a ter 10 caracteres. O preenchimento é feito com espaços, caso não seja declarado o segundo argumento.
// Ex:
const listaPrecos = ['R$ 99', 'R$ 199', 'R$ 12000'];

listaPrecos.forEach((preco) => {
  console.log(preco.padStart(10, '.'));
})

listaPrecos[0].padStart(10, '.'); // .....R$ 99
listaPrecos[0].padEnd(10, '.');   // R$ 99.....



// STR.REPEAT(N) : Repete a string (n) vezes.
// Ex:
// const frase = 'Ta';
// frase.repeat(5); // TaTaTaTaTa


// STR.REPLACE(REGEXP|SUBSTR, NEWSTR|FUNCTION) : Troca parte da string por outra. Podemos utilizar uma regular expression ou um valor direto. Se usarmos um valor direto ele irá trocar apenas o primeiro valor que encontrar.
// Ex:

let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';
listaItens = listaItens.replace(/[ ]+/g, ', ');

// Ex 2:
let preco = 'R$ 1200,43';
preco = preco.replace(',', '.'); // 'R$ 1200.43'

