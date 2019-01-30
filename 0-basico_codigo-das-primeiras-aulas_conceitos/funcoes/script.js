//Funções: bloco de código q pode ser executado e reutilizado. 
//Ex:
function areaQuadrado(lado) {
  return lado * lado;
}
areaQuadrado(4); //16
areaQuadrado(5); //25
areaQuadrado(2); //4

//Ex 2: 
function imc(peso, altura) { //parâmetros
  var imc = peso / (altura * altura);
  return imc;
}
console.log(imc(60, 1.7)); //argumentos

//Obs: ao criar uma função, vc pode definir parâmetros. Ao executar uma função, vc pode passar argumentos.
//Obs 2: separar por vírgula cada parâmetro. Vc pode definir mais de um parâmetro ou nenhum tbm.

//Ex 3:
function corFavorita(cor) {
  if(cor === 'azul') {
    return 'eu gosto do mar';
  } else if (cor === 'verde') {
    return 'eu gosto de mato'
  } else {
    return 'eu nao gosto de cores';
  }
}
console.log(corFavorita('verde'));

//Funções Callback - geralmente são funções que ocorrem após algum evento. 

addEventListener('click', function(){
  console.log('clicou');
})
//a função possui dois argumentos
//primeiro é a string 'click'
//segundo é uma função anônima
//Obs: as funções anônimas são aquelas em que o nome da função não é definido, escrtitas como function() {} ou () => {} 

//ESCOPO - variáveis e funções definidas dentro de um bloco {}, não são visíveis fora dele.
//Ex:

var totalPaises = 193; //colocar a variável do lado de fora para ela ficar visivel fora da função
function faltaVisitar(paisesVisitados) {
  return `Falta visitar ${totalPaises - paisesVisitados} países`;
}
console.log(faltaVisitar(12));

//HOISTING - antes de executar uma função, o JS 'move' todas as funções declaradas para a memória.


//EXERCÍCIOS:

// Crie uma função para verificar se um valor é Truthy
function veracidade(valor) {
  return !!valor;
} 
console.log(veracidade(10)); //true

// Crie uma função matemática que retorne o perímetro de um quadrado. Lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetroQuadrado(lado) {
  return perimetro = lado * 4;
}
console.log(perimetroQuadrado(4)); 

// Crie uma função que retorne o seu nome completo. Ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
  return `${nome} ${sobrenome}`;
}
console.log(nomeCompleto('Bianca', 'Carlsen'));

// Crie uma função que verifica se um número é par
function testePar(numero) {
  var modulo = numero % 2; 
//lógica: quando o módulo da zero na dívisão é pq o numero é totalmente divísel (no caso se for divisível por 2, ele é par).
  if(modulo === 0) {
    return 'é par';
  } else {
    return 'não é par';
  }
}
console.log(testePar(12)); //é par

// Crie uma função que retorne o tipo de dado do argumento passado nela (typeof)
function tipoDeDado(dado) {
  return typeof dado;
}
console.log(tipoDeDado('teste')); //string

// addEventListener é uma função nativa do JavaScript o primeiro parâmetro é o evento que ocorre e o segundo o Callback utilize essa função para mostrar no console o seu nome completo quando o evento 'scroll' ocorrer.
addEventListener('scroll', function(){
  console.log('Bianca fez scroll');
})


