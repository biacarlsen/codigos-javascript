// OBJETOS : Array Iteração

// [].FOREACH() :
// [].forEach(callback(itemAtual, index, array)) a função de callback é executada para cada item da array. Ela possui três argumentos, itemAtual (valor do item da array), index (index do valor na array) e array (array original).

// Ex:
const carros = ['Ford', 'Fiat', 'Honda'];
carros.forEach(function(item, index, array) {
  item.toUpperCase();
});
// Ex com Arrow Function:
carros.forEach((item, index, array) => {
  item.toUpperCase();
});


// ARROW FUNCTION - formas abrevidas
// Ex:
const li = document.querySelectorAll('li');
li.forEach(i => i.classList.add('ativa')); // Obs: o i é referente a item; 

// Mesma coisa que:
li.forEach(function(item) {
  item.classList.add('ativa');
});


// MODIFICAR A ARRAY ORIGINAL :
// O terceiro argumento do callback é uma referência direta e se modificado irá também modificar a array original.

// Ex:
const carros2 = ['Ford', 'Fiat', 'Honda'];
carros2.forEach((item, index, array) => {
  array[index] = 'Carro ' + item;
});

carros2; // ['Carro Ford', 'Carro Fiat', 'Carro Honda']

// Obs: É melhor utilizarmos o map para isso


// [].MAP() : 
// [].map(callback(itemAtual, index, array)) funciona da mesma forma que o forEach(), porém ao invés de retornar undefined, retorna uma nova array com valores atualizados de acordo com o return de cada iteração.

// Ex:
const carros3 = ['Ford', 'Fiat', 'Honda'];
const newCarros = carros3.map((item) => {
  return 'Carro ' + item;
});

carros3; // ['Ford', 'Fiat', 'Honda']
newCarros; // ['Carro Ford', 'Carro Fiat', 'Carro Honda']; 

// Obs: o map é utilizado quando queremos retonar os valores do array modificados;


// VALOR RETORNADO
// Se não retornarmos nenhum valor durante a iteração utilizando map, o valor retornado como de qualquer função que não possui o return, será undefined.

// Ex:
const carros4 = ['Ford', 'Fiat', 'Honda'];
const newCarros2 = carros4.map((item) => {
  const novoValor = 'Carro ' + item;
});

newCarros2; // [undefined, undefined, undefined];


// ARROW FUNCTION E [].MAP()
// Uma Arrow Function de linha única e sem chaves irá retornar o valor após a fat arrow =>.
// Ex:
const numeros = [2, 4, 6, 8, 10, 12, 14];
const numerosX3 = numeros.map(n => n * 3);

numerosX3; // [6, 12, 18, 24, 30, 36, 42];


// [].MAP() VS [].FOREACH() :
// Se o objetivo for modificar os valores da array atual, sempre utilize o map, pois assim uma nova array com os valores modificados é retornada e você pode imediatamente iterar novamente sobre estes valores.

// Ex:
const numeros2 = [2, 4, 6, 8, 10, 12, 14];
const numerosVezes3 = numeros.map(n => n * 3);

numerosVezes3; // [6, 12, 18, 24, 30, 36, 42];


// [].MAP() COM OBJETOS :
// Map pode ser muito útil para interagirmos com uma array de objetos, onde desejamos isolar um valor único de cada objeto.

// Ex:
const aulas = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
]
// Da pra fazer isso com função anônima dessa forma:
const tempoAulas = aulas.map(aula => aula.min);
// [15, 10, 20, 25];

// ou tbm da pra fazer dessa forma - definindo uma função antes:
const puxarNomes = aula => aula.nome;
// mesma coisa que isso:
// const puxarNomes = function(aula) {
//   return aula.nome;
// };

const nomesAulas = aulas.map(puxarNomes);
// ['HTML 1', 'HTML 2', 'CSS 1', 'JS 1']


// [].REDUCE() : 
// [].reduce(callback(acumulador, valorAtual, index, array), valorInicial) executa a função de callback para cada item da Array. Um valor especial existe nessa função de callback, ele é chamado de acumulador, mas é na verdade apenas o retorno da iteração anterior.
// Parâmetros e suas siglas:
// Acumulador (acc)
// Valor Atual (cur)
// Index Atual (idx)
// Array original (src)

// Ex:
const aulas2 = [10, 25, 30];
const total1 = aulas2.reduce((acumulador, item) => {
  return acumulador + item;
}, 0);
total1; // 65

// Ex com abreviação:
const total2 = aulas2.reduce((acumulador, item) => acumulador + item, 100);
total2; // 165

// Obs: Reduce retorna um valor único, dirente do map.


// REDUCE PASSO A PASSO 
// O primeiro parâmetro do callback é o valor do segundo argumento passado no reduce(callback, inicial) durante a primeira iteração. Nas iterações seguintes este valor passa a ser o retornado pela anterior.

// Ex:
// const aulas = [10, 25, 30];

// // PASSO 1
// aulas.reduce((0, 10) => {
//   return 0 + 10;
// }, 0); // retorna 10

// // PASSO 2
// aulas.reduce((10, 25) => {
//   return 10 + 25;
// }, 0); // retorna 35

// // PASSO 3
// aulas.reduce((35, 30) => {
//   return 35 + 30;
// }, 0); // retorna 65


// MAIOR NÚMERO COM [].REDUCE()

// Ex:
const numeros3 = [10, 25, 60, 5, 35, 10];

const maiorNumero = numeros3.reduce((anterior, atual) => {
  return anterior < atual ? atual : anterior;
}, 0);

maiorNumero; // 60

// Obs: a palavra 'anterior' refere-se ao 'acumulador', e a palavra 'atual' refere-se ao 'item';

// Esse exemplo tbm da pra fazer dessa maneira:
const maiorNumero2 = numeros3.reduce((anterior, atual) => {
  if(anterior > atual) {
    return anterior
  } else {
    return atual
  }
}, 0)
maiorNumero2;


// PODEMOS RETORNAR OUTROS VALORES:

// Ex:
const aulas3 = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
]

// Neste caso o acumulador é um objeto vazio assim:
// let acumulador = {}; - dessa forma é possível alterar ele em cada loop como se fosse um objeto.

const listaAulas = aulas3.reduce((acumulador, item, index) => {
  acumulador[index] = item.nome;
  return acumulador;
}, {})

// PASSO A PASSO REDUCE
// Passo a passo do método reduce criando um Objeto.

// PASSO 1
// aulas.reduce(({}, {nome: 'HTML 1', min: 15}, 0) => {
//   {}[0] = 'HTML 1';
//   return {0: 'HTML 1'};
// }, {})

// PASSO 2
// aulas.reduce(({0: 'HTML 1'}, {nome: 'HTML 2', min: 10}, 1) => {
//   {0: 'HTML 1'}[1] = 'HTML 2';
//   return {0: 'HTML 1', 1: 'HTML 2'};
// }, {})

// PASSO 3
// aulas.reduce(({0: 'HTML 1', 1: 'HTML 2'}, {nome: 'CSS 1', min: 20}, 2) => {
//   {0: 'HTML 1', 1: 'HTML 2'}[2] = 'CSS 1';
//   return {0: 'HTML 1', 1: 'HTML 2', 2: 'CSS 1'};
// }, {})

// PASSO 4
// aulas.reduce(({0: 'HTML 1', 1: 'HTML 2', 2: 'CSS 1'}, {nome: 'JS 1', min: 25}, 3) => {
//   {0: 'HTML 1', 1: 'HTML 2', 2: 'CSS 1'}[3] = 'JS 1';
//   return {0: 'HTML 1', 1: 'HTML 2', 2: 'CSS 1', 3: 'JS 1'};
// }, {})


// [].REDUCERIGHT()
// Existe também o método [].reduceRight(), a diferença é que este começa a iterar da direita para a esquerda, enquanto o reduce itera da esquerda para a direita.

// Ex:
const frutas = ['Banana', 'Pêra', 'Uva'];

const frutasRight = frutas.reduceRight((acc, fruta) => acc + ' ' + fruta);
const frutasLeft = frutas.reduce((acc, fruta) => acc + ' ' + fruta);

frutasRight; // Uva Pêra Banana
frutasLeft; // Banana Pêra Uva


// [].SOME() :
// [].some(), se pelo menos um return da iteração for truthy, ele retorna true.

// Ex:
const frutas2 = ['Banana', 'Pêra', 'Uva'];
const temUva = frutas2.some((fruta) => {
  return fruta === 'Uva';
}); // true

// Ex:
function maiorQue100(numero) {
  return numero > 100;
}
const numeros4 = [0, 43, 22, 88, 101, 2];
const temMaior = numeros4.some(maiorQue100); // true


// [].EVERY() :
// [].every(), se todos os returns das iterações forem truthy, o método irá retornar true. Se pelo menos um for falsy, ele irá retornar false.

// Ex:
const frutas3 = ['Banana', 'Pêra', 'Uva', ''];
const arraysCheias = frutas3.every((fruta) => {
  return fruta; // false - pois pelo menos uma fruta está vazia '', o que é um valor falsy;
});

const numeros5 = [6, 43, 22, 88, 101, 29];
const maiorQue3 = numeros5.every(item => item > 3); // true


// [].FIND() E [].FINDINDEX() :
// [].find(), retorna o valor atual da primeira iteração que retornar um valor truthy. 
// Já o [].findIndex(), ao invés de retornar o valor, retorna o index deste valor na array.

// Ex:
const frutas4 = ['Banana', 'Pêra', 'Uva', 'Maçã'];
const buscaUva = frutas4.findIndex((fruta) => {
  return fruta === 'Uva'; 
}); // 2

// Ex:
const numeros6 = [6, 43, 22, 88, 101, 29];
const buscaMaior45 = numeros6.find(item => item > 45); // 88


// [].FILTER() :
// [].filter(), retorna uma array com a lista de valores que durante a sua iteração retornaram um valor truthy.

// Ex:
const frutas5 = ['Banana', undefined, null, '', 'Uva', 0, 'Maçã'];
const arrayLimpa = frutas5.filter((fruta) => {
  return fruta; 
}); // ['Banana', 'Uva', 'Maçã']

const numeros7 = [6, 43, 22, 88, 101, 29];
const buscaMaior43 = numeros7.filter(x => x > 43); // [88, 101]


// FILTER EM OBJETOS

// Ex:
const aulas4 = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
]

const aulasMaiores = aulas4.filter((aula) => { 
  return aula.min >= 15;
});
// [{nome: 'CSS 1', min: 20}, {nome: 'JS 1', min: 25}]



// EXERCÍCIOS

// 1-
// Selecione cada curso e retorne uma array com objetos contendo o título, descricao, aulas e horas de cada curso

// R:
const cursos = document.querySelectorAll('.curso');
const arrayCursos = Array.from(cursos);

const objetosCurso = arrayCursos.map((item) => {
  const titulo = item.querySelector('h1').innerText;
  const descricao = item.querySelector('p').innerText;
  const aulas = item.querySelector('.aulas').innerText;
  const horas = item.querySelector('.horas').innerText;
  return {
    titulo,
    descricao,
    aulas,
    horas
  }
})
objetosCurso;

// 2-
// Retorne uma lista com os números maiores que 100
const numeros8 = [3, 44, 333, 23, 122, 322, 33];

// R:
const numeroMaior100 = numeros8.filter((item) => { 
  return item > 100;
});

// 3-
// Verifique se Baixo faz parte da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']

// R:
const temBaixo = instrumentos.some((item) => {
  return item === 'Baixo';
});

// 4-
// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  }
]

// R:

const valorTotal = compras.reduce((acumulador, item) => {
  const precoLimpo = +item.preco.replace('R$ ', '').replace(',', '.');
  return acumulador + precoLimpo;
}, 0)
console.log(valorTotal);