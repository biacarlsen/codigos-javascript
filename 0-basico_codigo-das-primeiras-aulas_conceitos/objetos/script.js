//OBJETOS: conjunto de variáveis e funções que são chamadas de propriedades e métodos.
//Ex:
var pessoa = {
  nome: 'Bianca',
  idade: 22,
  profissão: 'Bibliotecária',
  possuiFaculdade: true,
}
console.log(pessoa.nome); //'Bianca'

//Obs: Um objeto é criado utilizando as chaves {}
//Ex:
var carro = {};
var pessoa = {};
console.log(typeof carro); //Object

//MÉTODOS: é uma propriedade que possui uma função no local do seu valor.
//Ex:
var quadrado = {
  lados: 4,
  area: function(lado) {
    //ou abreviado:
    //area(lado)
    return lado * lado;
  },
  perimetro: function(lado) {
    return this.lados * lado;
  },
}
console.log(quadrado.lados); //4
console.log(quadrado.area(5)); //25

//OBS: Os objetos servem para organizar o código em pequenas partes reutilizáveis. 

//DICAS:
//Math é um objeto nativo de Javascript. E console é um objeto e log() é um método.
//Ex:
Math.PI; //3.14
Math.random(); //número aleatório

var pi = Math.PI;
console.log(pi);

//Dot Notation Get - acesse propriedades de um objeto utilizando o ponto . 
//Ex:
var menu = {
  width: 800,
  height: 50,
  backgroundColor:'#ccc',
}
//Posso tbm dar outro valor pra propriedade dessa forma: 
menu.backgroundColor = '#000';
//posso tbm adicionar novas propriedades ao objeto dessa forma:
menu.color = 'blue';
//posso tbm criar métodos(funções) dessa forma:
menu.esconder = function() {
  console.log('Escondi');
}
//posso criar variáveis em cima das propriedades dessa forma:
var bg = menu.backgroundColor;

//Palavra-chave THIS - irá fazer referência ao próprio objeto.
//Ex:
var height = 120;
var menu2 = {
  width: 800,
  height: 50,
  metadeHeight() {
    return this.height / 2;
  }
}
menu2.metadeHeight(); //25
//sem o this, seria 60.

//EXERCÍCIOS:

// Crie um objeto com os seus dados pessoais, deve possuir pelo menos duas propriedades: nome e sobrenome.

var dadosPessoais = {
  nome: 'Bianca',
  sobrenome: 'Carlsen',
  idade: 22,
  sexo: 'feminino',
  possuiGraduacao: true,
  nomeCompleto() {
    return `${this.nome} ${this.sobrenome}`;
  } 
}
console.log(dadosPessoais.nomeCompleto());

// Crie um método no objeto anterior, que mostre o seu nome completo

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}
carro.preco = 3000;


// Crie um objeto de um cachorro que represente um labrador, preto com 10 anos, que late ao ver um homem

var cachorro = {
  raca: 'labrador',
  cor: 'preto',
  idade: 10,
  latir(pessoa) {
    if(pessoa === 'homem') {
      return 'Latir';
    } else {
      return 'Não faz nada';
    }
  }
}

