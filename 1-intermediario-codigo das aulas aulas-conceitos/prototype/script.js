
// PROTOTYPE : A propriedade prototype é um objeto adicionado a uma função quando a mesma é criada.

// Ex:
// function Pessoa(nome, idade) {
//   this.nome = nome;
//   this.idade = idade;
// }
// const andre = new Pessoa('André', 28);

// console.log(Pessoa.prototype); // retorna o objeto
// console.log(andre.prototype); // undefined pq andre é um objeto e Pessoa é uma função.


// FUNCAO.PROTOTYPE : É possível adicionar novas propriedades e métodos ao objeto prototype.

// Ex:
// Pessoa.prototype.andar = function() {
//   return this.nome + ' andou';
// }
// Pessoa.prototype.nadar = function() {
//   return this.nome + ' nadou';
// }
// console.log(Pessoa.prototype); // retorna o objeto


// ACESSO AO PROTÓTIPO : O objeto criado utilizando o construtor, possui acesso aos métodos e propriedades do protótipo deste construtor. Lembrando, prototype é uma propriedade de funções apenas.

// Ex:
// const andre = new Pessoa('André', 28);

// andre.nome;
// andre.idade;
// andre.andar();
// andre.nadar();


// PROTO : O novo objeto acessa os métodos e propriedades do protótipo através da propriedade __proto__. É papel da engine fazer essa busca, não devemos falar com __proto__ diretamente.

// Acessam o mesmo método mas __proto__ não terá acesso ao this.nome
// // Ex:
// andre.andar();
// andre.__proto__.andar(); //undefined


// HERANÇA DE PROTÓTIPO : O objeto possui acesso aos métodos e propriedades do protótipo do construtor responsável por criar este objeto. O objeto abaixo possui acesso a métodos que nunca definimos, mas são herdados do protótipo de Object.

// Ex:
// Object.prototype;
// andre.toString();
// andre.isPrototypeOf();
// andre.valueOf();



// CONSTRUTORES NATIVOS : Objetos, Funções, Números, Strings e outros tipos de dados são criados utilizando construtores. Esses construtores possuem um protótipo com propriedades e métodos, que poderão ser acessadas pelo tipo de dado

// const pais = 'Brasil'; //retorna somente a string
// const cidade = new String('Rio'); //retorna todo o objeto 

// pais.charAt(0); // B - selecionando o primeiro caracter
// cidade.charAt(0); // R - selecionando o primeiro caracter

// String.prototype; //conferir todos os métodos



// É POSSÍVEL ACESSAR A FUNÇÃO DO PROTÓTIPO : É comum, principalmente em códigos mais antigos, o uso direto de funções do protótipo do construtor Array.

// const lista = document.querySelectorAll('li');

// // Transforma em uma array
// const listaArray = Array.prototype.slice.call(lista);
// com isso é possível usar todos os métodos existentes no protótipo de array. Senão só teriam disponíveis os protótipos de Nodelist.

// Obs: Existe o método Array.from() - pra transformar listas em array tbm. 


// MÉTODO DO OBJETO VS PROTÓTIPO : Nos objetos nativos existem métodos linkados diretamente ao Objeto e outros linkados ao protótipo.
// Ex:

// Array.prototype.slice.call(lista);
// Array.from(lista);

// // Retorna uma lista com os métodos / propriedades
// Object.getOwnPropertyNames(Array);
// Object.getOwnPropertyNames(Array.prototype);

// Obs: dado.constructor.name, retorna o nome do construtor; 

// APENAS OS MÉTODOS DO PROTÓTIPO SÃO HERDADOS

// [1,2,3].slice(); // existe
// [1,2,3].from(); // não existe


// ENTENDA O QUE ESTÁ SENDO RETORNADO : Os métodos e propriedades acessado com o . são referentes ao tipo de dados que é retornado antes desse .

// const Carro = {
//   marca: 'Ford',
//   preco: 2000,
//   acelerar() {
//     return true;
//   }
// }

// Carro // Object
// Carro.marca // String
// Carro.preco // Number
// Carro.acelerar // Function
// Carro.acelerar() // Boolean
// Carro.marca.charAt // Function
// Carro.marca.charAt(0) // String

// Obs:Verifique o nome do construtor com .constructor.name 


// EXERCÍCIOS :

// Crie uma função construtora de Pessoas. Deve conter nome, sobrenome e idade. Crie um método no protótipo que retorne o nome completo da pessoa
// R:
function Pessoa(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
}
Pessoa.prototype.nomeCompleto = function() {
  return `${this.nome} ${this.sobrenome}`
}
const bia = new Pessoa('Bianca', 'Carlsen', 22);


// Liste os métodos acessados por dados criados com NodeList HTMLCollection, Document
// R:

// console.log(NodeList.prototype);
// console.log(HTMLCollection.prototype);
// console.log(Document.prototype);


// Liste os construtores dos dados abaixo
// const li = document.querySelector('li');
// R:

// li; 
// R:
// // no console: li.constructor.name
// // retorna: "HTMLLIElement"

// li.click;
// R:
// // no console: li.click.constructor.name
// // retorna: "Function"

// li.innerText;
// R:
// // no console: li.innerText.constructor.name
// // "String"

// li.value;
// R:
// // no console: li.value.constructor.name
// // "Number"

// li.hidden;
// R:
// // no console: li.hidden.constructor.name
// // "Boolean"

// li.offsetLeft;
// R:
// // no console: li.offsetLeft.constructor.name
// // "Number"

// li.click();
// R:
// no console: li.click().constructor.name //ERRO
// somente: li.click()
// undefined

// Qual o construtor do dado abaixo:
// R:

// li.hidden.constructor.name;
// retorna uma string dizendo que é boolean