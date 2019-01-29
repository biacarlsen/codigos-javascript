//DOM - Document Object Model - é uma interface que representa documentos HTML e XML através de objetos. Com ela é possível manipular a estrutura, estilo e conteúdo destes documentos.

//Ao inspecionar elemento com o navegador, vc está vendo a representaçao oficial do DOM.

//Ex:
//Selecionando um titulo:
const h1Selecionado = document.querySelector('h1');
console.log(h1Selecionado);

//Node - toda tag html é representada pelo objeto Element e por isso herda os seus métodos e proprieddades. Element é um tipo de objeto Node.
//Ex:

// titulo.innerText; //retorna o texto;
// titulo.classList; //retorna as classes;
// titulo.id; //retorna o id;
// titulo.offsetHeight; //retorna a altura do elemento do topo do site;

// titulo.addEventListener('click', callback;
//ativa a função ao click no titulo. 

//EXERCÍCIOS:

// Retorne o url da página atual utilizando o objeto window

const urlPagina = location.href;
console.log(urlPagina);
//mesmo que: window.location.href

// Seleciona o primeiro elemento da página que possua a classe ativo
const elementoAtivo = document.querySelector('.ativo');
console.log(elementoAtivo);

// Retorne a linguagem do navegador

const linguagemNavegador = navigator.language;
console.log(linguagemNavegador);
//mesmo que: window.navigator.language

// Retorne a largura da janela 
const larguraJanela = innerWidth;
console.log(larguraJanela);
//mesmo que: window.innerWidth