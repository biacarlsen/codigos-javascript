// HTMLELEMENT :
// Todo elemento HTML do DOM herda propriedades e métodos do construtor HTMLElement.

//const h1 = document.querySelector('h1');

//console.log(Object.prototype.toString.call(h1));
// HTMLHeadingElement > HTMLElement > Element > Node > EventTarget > Object

// DATASET : 
// dataset é uma propriedade de HTMLElement, essa propriedade é um objeto do tipo DOMStringMap. Dentro desse objeto existe uma coleção de chave / valor, com todos os atributos do elemento html que começarem com data-.

// Ex do que estaria no index:
/* <div data-cor="azul" data-width="500">Uma Div</div> */

// Ex do que estaria no index:
/* <span data-anime="left" data-tempo="2000">Um Span</span> */

// Ambos os valores selecionam a mesma div acima:
// Ex:
// let div = document.querySelector('div');

// Ex:
// div = document.querySelector('[data-cor]');

// Ex:
// div = document.querySelector('[data-cor="azul"]');

// Selecionando:
// Ex:
// div.dataset.cor; // 'azul'

// Ex:
// div.dataset.width; // '500'

// Ex:
// div.dataset.tempo = 1000;


// DATA ATRIBUTES:
// Os atributos e valores que começarem com data- poderão ser utilizados como forma de configuração de plugins e interações DOM / JS.

// Ex do que estaria no index:
//<div data-anima="left" data-tempo="1000">Div 1</div>

// Ex do que estaria no index:
//<div data-anima="right" data-tempo="2000">Div 2</div>

// Ex:
//const divs = document.querySelectorAll('[data-anima]');
//divs.forEach((div) => {
//  div.classList.add(div.dataset.anima);
//});

// Obs: adiciona em cada div uma classe com o mesmo nome que o valor de data


// DATA VS CLASS:
// A vantagem de se utilizar data atributes é que torna mais fácil evitarmos conflitos com estilos do CSS. Além de deixar a estrutura da tag mais organizada.

// Ex:
//<div data-anima="left" data-tempo="1000">Div 1</div>
//<div class="anima-left tempo-1000">Div 2</div>


// NOMENCLATURA :
// Por padrão o JavaScript não aceita - (traço) como caracter válido para nomear propriedades. Então qualquer traço será removido e a letra seguinte transformada em maiúscula.

// Ex:
// <div data-anima-scroll="left">Div 1</div>

//const div = document.querySelector('[data-anima-scroll]');
// no console:
//div.dataset;
// o atributo irá aparecer assim: {animaScroll: 'left'}

//Ex no console:
//div.dataset.animaScroll; // left

//Ex no console:
//div.dataset.tempoTotal = 1000;
// Na div no index vira data-tempo-total="1000"

// Para remover:
//delete div.dataset.animaScroll; // remove o atributo


// EXERCÍCIOS:

//1- Adicione um atributo data-anime="show-down" e data-anime="show-right" a todos as section's com descricão dos animais.

//2- Utilizando estes atributos, adicione a classe show-down ou show-right a sua respectiva section assim que a mesma aparecer na tela (animacao tab)

//3- No CSS faça com que show-down anime de cima para baixo e show-right continue com a mesma animação da esquerda para a direita



