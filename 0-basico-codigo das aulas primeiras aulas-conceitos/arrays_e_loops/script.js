//Array - um grupo de valores geralmente relacionados. Servem para guardarmos diferentes valores em uma única variável.
//Ex:
var videoGames = ['Switch', 'PS4', 'XBox'];
console.log(videoGames[1]); //PS4 

//Para remover o último item do array:
// var ultimoItem = videoGames.pop();

//Para acrescentar um item no array:
// videoGames.push('3DS');

//For Loop - fazem algo repetidamente até que uma condição seja atingida - ele possui 3 partes: início, condição e incremento; 
//Ex:
for (var numero = 0; numero < 10; numero++) {
  console.log(numero);
}
//TOMAR CUIDADO COM OS LOOS SEM INCREMENTO - LOOP INFINITO.

//While Loop:
//Ex:
var i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

//Arrays e Loops 
//Ex:
var videoGames2 = ['Switch', 'PS4', 'XBox', '3DS'];
for (var i = 0; i < videoGames2.length; i++) {
  console.log(videoGames2[i]);
  if(videoGames2[i] === 'PS4') {
    break;
    //Break - o loop irá parar caso encontre a palavra Break.
  }
}

//ForEach - executa uma função para cada item da array. É uma forma mais simples de utilizarmos um loop com arrays.

var frutas = ['Banana', 'maçã', 'pera', 'abacaxi'];
frutas.forEach(function(fruta) {
  console.log(fruta);
});

//EXERCÍCIOS:

// Crie uma array com os anos que o Brasil ganhou a copa: 1959, 1962, 1970, 1994, 2002

var copaBrasilCampeao = [1959, 1962, 1970, 1994, 2002];

// Interaja com a array utilizando um loop, para mostrar no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

copaBrasilCampeao.forEach(function(ano) {
  console.log(`O brasil ganhou a copa de ${ano}`);
});

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância'];
for (var fruta = 0; fruta < frutas.length; fruta++) {
  console.log(frutas[fruta]);
  if(frutas[fruta] === 'Pera') {
    break;
  }
}
// Coloque a última fruta, da array acima, em uma variável sem remover a mesma da array.

var ultimaFruta = frutas[frutas.length - 1];