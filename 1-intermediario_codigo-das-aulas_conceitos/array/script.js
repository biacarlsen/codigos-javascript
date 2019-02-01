// OBJETOS : Array

// ARRAYS : Arrays armazenam uma coleção de elementos. Estes podem ser strings, arrays, boolean, number, functions, objects e mais.

// Ex:
const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
// Ex:
const precos = [49, 99, 69, 89];
// Ex:
const dados = [new String('Tipo 1'), ['Carro', 'Portas', {cor: 'Azul', preco: 2000}], function andar(nome) { console.log(nome) }];

// Acessando dados da array:
// Ex:
instrumentos[1]; //retorna baixo
// Ex:
dados[1][2].cor; // retorna azul - primeiro[] acessa a array que está dentro da array; o segundo[] acessa o terceiro item de dentro dessa array; e o .cor acessa o valor definido pelo objeto cor;
// Ex:
instrumentos[0] = 'saxofone'; //Definindo um novo valor pro item do array;



// CONSTRUÇÃO DE ARRAYS : Toda array herda os métodos e propriedades do protótipo do construtor Array.

// Ex:
const instrumentos2 = ['Guitarra', 'Baixo', 'Violão'];
// Ex:
const carros = new Array('Corola', 'Mustang', 'Honda');

carros[1] // retorna Mustang
// Ex:
carros[2] = 'Ferrari';
// Ex:
carros[10] = 'Parati'; //cria outros item vazios até conseguir retornar o valor definido do 11º item;
carros.length; // 11 - prova que a array cresceu até 11 itens;

// Obs: Os valores das array's não são estáticos;



// MÉTODOS DO CONSTRUTOR: ARRAY
// ARRAY.FROM() : Array.from() é um método utilizado para transformar array-like objects, em uma array.

// Ex:
let li = document.querySelectorAll('li'); // NodeList
liArray = Array.from(li); // Array

// Para um objeto virar uma array, ele deve ser construído da seguinte maneira:
// Ex:
const carros2 = {
  0: 'Fiat',
  1: 'Honda',
  2: 'Ford',
  length: 3,
}
const carros2Array = Array.from(carros2);



// ARRAY.ISARRAY() : Verifica se o valor passado é uma array e retorna um valor booleano.

// Ex:
Array.isArray(li); // false
// Ex:
Array.isArray(liArray); // true



// ARRAY.OF(), ARRAY() E NEW ARRAY() : Verifica se o valor passado é uma array e retorna um valor booleano. A palavra chave new não é necessária para utilizar o construtor Array.

// Ex:
Array.of(10); // [10] - retorna uma array com 1 item;
// Ex:
Array.of(1,2,3,4); // [1,2,3,4] - retorna uma array com 4 itens;
// Ex:
new Array(5); // [,,,,] - retorna uma array vazia com 5 itens;
// Ex:
Array(5); // [,,,,] - retorna uma array vazia com 5 itens;
// Ex:
Array(1,2,3,4); // [1,2,3,4] - retorna uma array com os itens colocados como parâmetros;



// PROPRIEDADES E MÉTODOS DO PROTOTYPE : [].length retorna o tamanho da array.

// Ex:
const frutas = ['Banana', 'Pêra', ['Uva Roxa', 'Uva Verde']];
frutas.length; // 3

// Ex:
frutas[0].length; // 6 - retornou o lenght da string [0], no caso banana tem 6 caracteres;
// Ex:
frutas[1].length; // 4 - retornou o lenght da string [1], no caso pera tem 4 caracteres;
// Ex:
frutas[2].length; // 2 - retorna 2 pq ele pegou o terceiro item da array que neste caso é outra array com 2 itens;
// Ex:
frutas[2][0].length; // 8 - retornou o lenght da string [0] dentro do terceiro item da array(que é outra array), no caso Uva Roxa tem 8 caracteres;



// MÉTODOS MODIFICADORES [].SORT() : Os próximos métodos que vamos falar sobre, são métodos modificadores (mutator methods). Além de retornarem um valor, eles modificam a array original. [].sort() organiza a pelo unicode.

// Ex:
const instrumentos3 = ['Guitarra', 'Baixo', 'Violão'];
instrumentos3.sort();
instrumentos3; // ['Baixo', 'Guitarra', Violão] - o método sort() modificou a array colocando tudo em ordem alfabética;

// Ex:
const idades = [32,21,33,43,1,12,8];
idades.sort();
idades; // [1, 12, 21, 32, 33, 43, 8] - o método sort() modificou a array colocando tudo em crescente, porém esse método pega um caracter de cada vez, por isso não fica 'teoricamente na ordem';



// [].UNSHIFT() E [].PUSH() : 
// [].unshift() adiciona elementos ao início da array e retorna o length da mesma. 
// [].push() adiciona elementos ao final da array e retorna o length da mesma.

// Ex:
const carros3 = ['Ford', 'Fiat', 'VW'];
carros3.unshift('Honda', 'Kia'); // 5 - valor total da nova array(lenght)
carros3; // ['Honda', 'Kia', 'Ford', 'Fiat', 'VW']; - valores adicionados no inicio da array;

carros3.push('Ferrari'); // 6 - valor total da nova array(lenght)
carros3; // ['Honda', 'Kia', 'Ford', 'Fiat', 'VW', 'Ferrari'];  - valores adicionados ao final da array;



// [].SHIFT() E [].POP(): 
// [].shift() remove o primeiro elemento da array e retorna o mesmo. 
// [].pop() remove o último elemento da array e retorna o mesmo.

// Ex:
const carros4 = ['Ford', 'Fiat', 'VW', 'Honda'];
const primeiroCarro = carros4.shift(); // 'Ford' - item removido;
carros4; // ['Fiat', 'VW', 'Honda']; - array modificada;

const ultimoCarro = carros4.pop(); // 'Honda' - item removido;
carros4; // ['Fiat', 'VW']; - array modificada;



// [].REVERSE() : 
// [].reverse() inverte os itens da array e retorna a nova array.

const carros5 = ['Ford', 'Fiat', 'VW', 'Honda'];
carros5.reverse(); // ['Honda', 'VW', 'Fiat', 'Ford'];



// [].SPLICE()
// [].splice(index, remover, item1, item2, ...) adiciona valores na array a partir do index. Remove a quantidade de itens que for passada no segundo parâmetro (retorna esses itens).
// [].splice(index, remover, item1, item2, ...)

// Ex:
const carros6 = ['Ford', 'Fiat', 'VW', 'Honda'];
carros6.splice(1, 0, 'Kia', 'Mustang'); // [] - retorna vazio pq nenhum item foi removido;

carros6; // ['Ford', 'Kia', 'Mustang', 'Fiat', 'VW', 'Honda'] - como foi passado 0 no segundo item do parâmetro, não removeu nenhum outro item, apenas adicionou a partir do primeiro.

// Ex:
carros6.splice(3, 2, 'Ferrari'); // ['Fiat', 'VW'] - retorna os itens que foram removidos;

carros6; // ['Ford', 'Kia', 'Mustang', 'Ferrari', 'Honda'] - removou o fiat e o VW e adicionou o ferrari no lugar;



// [].COPYWITHIN() :
// [].copyWithin(alvo, inicio, final) a partir do alvo, ele irá copiar a array começando do inicio até o final e vai preencher a mesma com essa cópia. Caso omita os valores de início e final, ele irá utilizar como inicio o 0 e final o valor total da array.

// Ex:
['Item1', 'Item2', 'Item3', 'Item4'].copyWithin(2, 0, 3);
// ['Item1', 'Item2', 'Item1', 'Item2']

// Ex:
['Item1', 'Item2', 'Item3', 'Item4'].copyWithin(-1);
// ['Item1', 'Item2', 'Item3', 'Item1']

// Obs: posso criar uma array sem estar dentro de uma variavel



// [].FILL() :
// [].fill(valor, inicio, final) preenche a array com o valor, do início até o fim.

// Ex:
['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana');
// ['Banana', 'Banana', 'Banana', 'Banana']
// Ex:
['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana', 2);
// ['Item1', 'Item2', 'Banana', 'Banana']
// Ex:
['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana', 1, 3);
// ['Item1', 'Banana', 'Banana', 'Item4']



// MÉTODOS DE ACESSO - [].CONCAT() :
// Os métodos abaixo não modificam a array original, apenas retornam uma array modificada. [].concat() irá concatenar a array com o valor passado.

// Ex:
const transporte1 = ['Barco', 'Aviao'];
const transporte2 = ['Carro', 'Moto'];
const transportes = transporte1.concat(transporte2);
// ['Barco', 'Aviao', 'Carro', 'Moto'];

const maisTransportes = [].concat(transporte1, transporte2, 'Van');
// ['Barco', 'Aviao', 'Carro', 'Moto', 'Van'];



// [].INCLUDES(), [].INDEXOF() E [].LASTINDEXOF()
// [].includes(valor) verifica se a array possui o valor e retorna true ou false. 
// [].indexOf(valor) verifica se a array possui o valor e retorna o index do primeiro valor na array. 
// Já o [].lastIndexOf(valor) retorna o index do último.

// Ex:
const linguagens = ['html', 'css', 'js', 'php', 'python', 'js'];

linguagens.includes('css'); // true
// Ex:
linguagens.includes('ruby'); // false
// Ex:
linguagens.indexOf('python'); // 4
// Ex:
linguagens.indexOf('js'); // 2
// Ex:
linguagens.lastIndexOf('js'); // 5



// [].JOIN() :
// [].join(separador) junta todos os valores da array e retorna uma string com eles. Se você passar um valor como parâmetro, este será utilizado durante a junção de cada item da array.

// Ex:
const linguagens2 = ['html', 'css', 'js', 'php', 'python'];
linguagens2.join(); // 'html,css,js,php,python'
// Ex:
linguagens2.join(' '); // 'html css js php python'
// Ex:
linguagens2.join('-_-'); // 'html-_-css-_-js-_-php-_-python'

// Ex: cortando com split e adicionado com join:
let htmlString = '<h2>Título Principal</h2>'
htmlString = htmlString.split('h2');
// ['<', '>Título Principal</', '>']
htmlString = htmlString.join('h1');
// <h1>Título Principal</h1>



// [].SLICE() : 
// [].slice(inicio, final) retorna os itens da array começando pelo início e indo até o valor de final.

const linguagens3 = ['html', 'css', 'js', 'php', 'python'];
linguagens3.slice(3); // ['php', 'python']
linguagens3.slice(1, 4); // ['css', 'js', 'php']

// Muito usado para clonar arrays:
// Ex:
const cloneLinguagens = linguagens3.slice();


// EXERCÍCIOS:

// 1-
const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma variável
// R:
const removePrimeiro = comidas.shift();

// Remova o último valor de comidas e coloque em uma variável
// R:
const removeUltimo = comidas.pop();

// Adicione 'Arroz' ao final da array
// R:
comidas.push('Arroz');

// Adicione 'Peixe' e 'Batata' ao início da array
// R:
comidas.unshift('Peixe', 'Batata');
console.log(comidas);

// 2-
const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// Arrume os estudantes em ordem alfabética
// R:
estudantes.sort();

// Inverta a ordem dos estudantes
// R:
estudantes.reverse();

// Verifique se Joana faz parte dos estudantes
// R:
estudantes.includes('Joana');

// Verifique se Juliana faz parte dos estudantes
// R:
estudantes.includes('Juliana');


// 3-
let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`
// Substitua section por ul e div com li,
// utilizando split e join
// R:

html = html.split('section').join('ul').split('div').join('li');
console.log(html);


// 4-
const carros7 = ['Ford', 'Fiat', 'VW', 'Honda'];
// Remova o último carro, mas antes de remover salve a array original em outra variável
// R:

const cloneCarros7 = carros7.slice();
const removeUltimoCarro = carros7.pop();
carros7; // ['Ford', 'Fiat', 'VW'];


