// Constructor Function  

// OBJETOS : Criar um objeto é simples, basta definirmos uma variável e iniciar a definição do seu valor com chaves {}. Mas e se precisarmos criar um novo objeto, com as mesmas características do anterior? É possível com o Object.create, mas veremos ele mais tarde.

// Ex:
// const carro = {
//   marca: 'Marca',
//   preco: 0,
// }

// const honda = carro;
// honda.marca = 'Honda';
// honda.preco = 4000;

// const fiat = carro;
// fiat.marca = 'Fiat';
// fiat.preco = 3000;

// obs: carro, fiat e honda apontam para o mesmo objeto (não está sendo clonado/copiado como um novo objeto, está apenas substituído os valores da primeira variavel/objeto).

// Para isso existem as Constructor Functions, ou seja, Funções Construtoras que são responsáveis por construir novos objetos sempre que chamamos a mesma.

// Ex:
// function Carro() {
//   this.marca = 'Marca';
//   this.preco = 0;
// }

// const honda = new Carro();
// honda.marca = 'Honda';
// honda.preco = 4000;
// const fiat = new Carro();
// fiat.marca = 'Fiat';
// fiat.preco = 3000;

// Obs: Usar Pascal Case, ou seja, começar com letra maiúscula.

// NEW KEYWORD : A palavra chave new é responsável por criar um novo objeto baseado na função que passarmos a frente dela.

// Ex passo a passo:
// const honda = new Carro();

// // 1 Cria um novo objeto
// honda = {};

// // 2 Define o protótipo
// honda.prototype = Carro.prototype;

// // 3 Aponta a variável this para o objeto
// this = honda;

// // 4 Executa a função, substituindo this pelo objeto
// honda.marca = 'Marca';
// honda.preco = 0;

// // 5 Retorna o novo objeto
// return honda = {
//   marca: 'Marca',
//   preco: 0,
// }

// PARÂMETROS E ARGUMENTOS : Podemos passar argumentos que serão utilizados no momento da criação do objeto

// Ex:
// function Carro(marca, preco) {
//   this.marca = marca;
//   this.preco = preco;
// }

// const honda = new Carro('Honda', 4000);
// const fiat = new Carro('Fiat', 3000);


// THIS KEYWORD : O this faz referência ao próprio objeto construído com a Constructor Function.

// Ex:
// function Carro(marca, precoInicial) {
//   const taxa = 1.2;
//   const precoFinal = precoInicial * taxa;
//   this.marca = marca;
//   this.preco = precoFinal;
//   console.log(this);
// }

// const honda = new Carro('Honda', 2000);

// OBS: Variáveis dentro da Constructor estão "protegidas".


// EXEMPLO REAL : Quando mudamos a propriedade seletor, o objeto Dom irá passar a selecionar o novo seletor em seus métodos.

// criando objeto normal:

// const Dom = {
//   seletor: 'li',
//   element() {
//     return document.querySelector(this.seletor);
//   },
//   // adicionando uma classe:

//   ativar() {
//     this.element().classList.add('ativar');
//   }
// }

// Obs: pra que eu possa usar as funções que eu criei em outros MediaElementAudioSourceNode, é necessário criar uma função construtora:

// nova maneira de fazer usando Constructor Function:

// function Dom(seletor) {
//   this.element = function() {
//     return document.querySelector(seletor);
//   }
//   // adicionando uma classe:
//   this.ativar = function() {
//     this.element().classList.add('ativar');
//   }
// }
// // ex 1:
// const li = new Dom('li');
// // ex 2: 
// const ul = new Dom('ul');
// // ex 3:
// const lastLi = new Dom('li:last-child');


// LEMBRE-SE DE USAR PARÂMETROS
// Ex: 

// function Dom(seletor) {
//   const element = document.querySelector(seletor);
//   this.ativo = function(classe) {
//     element.classList.add(classe);
//   };
// }

// const lista = new Dom('ul');
// lista.ativo('ativo');

// const lastLi = new Dom('li:last-child');
// lastLi.ativo('ativo');



// EXERCÍCIOS

// 1- Transforme o objeto abaixo em uma Constructor Function
// const pessoa = {
//   nome: 'Nome pessoa',
//   idade: 0,
//   andar() {
//     console.log(this.nome + ' andou');
//   }
// }
// Crie 3 pessoas, João - 20 anos, Maria - 25 anos, Bruno - 15 anos
// R:

// function Pessoa(nome, idade) {
//   this.nome = nome;
//   this.idade = idade;
//   this.andar = function() {
//     console.log(this.nome + ' Andou');
//   }
// }
// const pessoa1 = new Pessoa('João', 20);
// const pessoa2 = new Pessoa('Maria', 25);
// const pessoa3 = new Pessoa('Bruno', 15);


// 2- Crie uma Constructor Function (Dom) para manipulação de listas de elementos do dom. Deve conter as seguintes propriedades e métodos: elements, retorna NodeList com os elementos selecionados, addClass(classe), adiciona a classe a todos os elementos, removeClass(classe), remove a classe a todos os elementos
// R:

function Dom(seletor) {
  const elementList = document.querySelectorAll(seletor);
  this.elements = elementList;
  this.addClass = function(classe) {
    elementList.forEach((item) => {
      item.classList.add(classe);
    })
  }
  // this.removeClass = function(classe) {
  //   elementList.forEach((item) => {
  //     element.classList.remove(classe);
  //   })
  // }
}
const listaItens = new Dom('li');
const ul = new Dom('ul');

listaItens.addClass('ativar');
ul.addClass('ativar-ul')



