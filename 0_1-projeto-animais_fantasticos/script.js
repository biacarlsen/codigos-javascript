//Selecionar elementos:
//Pelo ID - getElementById - seleciona e retorna elementos do DOM.

//Ex:
// const animais = document.getElementById('animais');
// console.log(animais);

//Pela classe e Tag :
//getElementsByClassName e getElementsByTagName - selecionam e retornam uma lista de elementos do DOM. A lista retornada está ao vivo, significa que se elementos forem adicionados, ela será automaticamente atualizada.

//Ex:
//neste exemplo ele irá pegar todos os elementos com esta classe:
// const gridSection = document.getElementsByClassName('grid-section'); console.log(gridSection);
//Retorna um HTMLCollection (parecida com um array mas não é(array-like)).

//para retornar algum dos elementos:
// console.log(gridSection[1]); //retorna o 2º elemento

//Seletor Geral Único - querySelector - retorna o primeiro elemento que combinar com o seu seletor CSS. 
//Ex:

//Selecionando classe:
// const animais = document.querySelector('.animais');

//Selecionando ID:
// const contato = document.querySelector('#contato');

//Selecionando o último item:
// const ultimoItem = document.querySelector('.animais-lista li:last-child');

//Seleção especial - todo item que começar com a especificação dada, por causa do ^= , neste caso precisa começar com href:
// const linkCss = document.querySelector('[href^="https://"]');

//Selecionar por TAG:
// const primeiroUl = document.querySelector('ul');

//Buscar dentro de um elemento selecionado:
// const navItem = primeiroUl.querySelector('li');

//Para selecionar links internos no site:
//para chamar um item que começa com alguma coisa, usa-se ^=
// const linkInterno = document.querySelector('[href^="#"]');
// console.log(linkInterno);

//SELETOR GERAL PARA LISTA - querySelectorAll - retona todos os elementos compatíveis com o seletor CSS em uma NodeList.
//Ex:
//Selecionando todos os elementos com a mesma classe:
// const gridSection = document.querySelectorAll('.grid-section');

//Selecionando todos os elementos com a mesma TAG:
// const listas = document.querySelectorAll('ul');

//Selecionar todas as imagens dentro de uma classe:
// const animaisImg = document.querySelectorAll('.animais img');
// console.log(animaisImg);
//essa lista que retorna é estática...se houver mudanças, ela não será atualizada depois de retornada. 

//DIFERENÇA ENTRE HTMLCOLLECTION e NODELIST
// A diferença está nos métodos e propriedades de ambas.
// NODELIST possui mais métodos(como por ex o forEach()).
//  Além disso a NodeList retornada com querySelectorAll é estática.
// HTMLCOLLECTION retorna ao vivo - se houver alterações com js ela já irá mudar mesmo depois de retornada...

// const selecionarComHtml = document.getElementsByClassName('grid-section');
// const selecionarComNode = document.querySelectorAll('.grid-section');

// const primeiroUl = document.querySelector('ul');
// primeiroUl.classList.add('grid-section');
// adcionando uma classe na primeira UL;
// quando retorna, o htmlcollection já atualiza mesmo depois de retornar... e nodelist nao. 
// obs: para fazer esse teste é necessário retonar as duas listas antes de rodar esse código que adiciona a nova classe.

// console.log(selecionarComHtml);
// console.log(selecionarComNode);

// ARRAY-LIKE : HTMLCollection e NodeList são array-like, parecem uma array mas não são. O método de Array forEach() por exemplo, existe apenas em NodeList. 

// Ex:
// selecionarComNode.forEach(function(item, index){
//   console.log(item);
// });

// // É possível transformar array-like em uma Array real, utilizando o método Array.from(nomeDaVariavel)
// // Ex:
// const arrayReal = Array.from(selecionarComNode);

// EXERCÍCIOS: 

// Retorne no console todas as imagens do site
// R:
// const imagens = document.getElementsByTagName('img');
// console.log(imagens); 

// Retorne no console apenas as imagens que começaram com a palavra imagem
// R:
// const imagensEspecificas = document.querySelectorAll('[src^="img"]');
// console.log(imagensEspecificas);

// Selecione todos os links internos (onde o href começa com #)
// R:
// const linksInternos = document.querySelectorAll('[href^="#"]');
// console.log(linksInternos);

// Selecione o primeiro h2 dentro de .animais-descricao
// R:
// const primeiroH2 = document.querySelector('.animais-descricao h2');
// console.log(primeiroH2);

// Selecione o último p do site
// R:
// const paragrafos = document.querySelectorAll('p');
// console.log(paragrafos.length - 1);

//Usando o FORECH - loop em cada item de uma lista.
// Ex:
// const imgs = document.querySelectorAll('img');

// imgs.forEach(function(item){
//   console.log(item);
// });

// PARÂMETROS DO FOREACH
// O primeiro parâmetro é o callback, ou seja, a função que será ativada a cada item. Esse função pode receber três parâmetros: valorAtual, index e array;

// Ex:
// const imgs = document.querySelectorAll('img');

// imgs.forEach(function(item, index, array){
//   console.log(item); // o item atual no loop
//   console.log(index); // o número do index
//   console.log(array); // a Array completa
// });

// ARROW FUNCTION - função usando setinha - sintaxe curta em relação a function expression. Basta remover a palavra function e adicionar a fat arrow => após os argumentos.
// Ex:
// const imgs = document.querySelectorAll('img');
// imgs.forEach((item) => {
//   console.log(item);
// });

// ou versão ainda mais abreviada:
// imgs.forEach((item) => console.log(item));



//EXERCÍCIOS:

// Mostre no console cada parágrado do site

// const paragrafos = document.querySelectorAll('p');
// paragrafos.forEach((item) => {
//   console.log(item);
// });

// // Mostre o texto dos parágrafos no console

// paragrafos.forEach((item) => {
//   console.log(item.innerText);
// });

// Como corrigir os erros abaixo:
// const imgs = document.querySelectorAll('img');

// imgs.forEach((item, index) => console.log(item, index));

// let i = 0;
// imgs.forEach(() => {
//   console.log(i++);
// });

// imgs.forEach(() => i++);

// CLASSES E ATRIBUTOS : Retorna uma lista com as classes do elemento. Permite adicionar, remover e verificar se contém.

// const menu = document.querySelector('.menu');

// menu.className; // string
// menu.classList; // lista de classes
// menu.classList.add('ativo');
// menu.classList.add('ativo', 'mobile'); // duas classes
// menu.classList.remove('ativo');
// menu.classList.toggle('ativo'); // adiciona/remove a classe
// menu.classList.contains('ativo'); //retorna true ou false
// menu.classList.replace('ativo', 'inativo');

// ATTRIBUTES: Retorna uma array-like com os atributos do elemento.

// const animais = document.querySelector('.animais');

// animais.attributes; // retorna todos os atributos
// animais.attributes[0]; // retorna o primeiro atributo

// para retonar a class:
// console.log(animais.attributes.class);

//para retonar data-texto:
// console.log(animais.attributes.['data-texto']);
// OBS: por causa do hífen dessa tag ela não é reconhecida, logo é necessário colocá-la como string para retorná-la.


// GETATTRIBUTE E SETATTRIBUTE: Métodos que retornam ou definem de acordo com o atributo selecionado

// const img = document.querySelector('img');

// img.getAttribute('src'); // pega o valor do src
// img.setAttribute('alt', 'Texto Alternativo'); // muda o alt - seta um valor novo;
// img.hasAttribute('id'); // retorna true or false - verificação (Tem ou não tem)
// img.removeAttribute('alt'); // remove o alt

// READ ONLY e WRITABLE: Existem propriedades que não permitem a mudança de seus valores, essas são considerados Read Only, ou seja, apenas leitura.

// const animais = document.querySelector('.animais');

// // jeito antigo de mexer com as classes:
// animais.className; // string com o nome das classes
// animais.className = 'azul'; // substitui completamente a string
// animais.className += ' vermelho'; // adiciona vermelho à string

// animais.attributes = 'class="ativo"'; // não funciona, read-only.

// OBS: Lembre-se que podemos modificar o valor de uma propriedade usando objeto.propriedade = '';

// EXERCÍCIOS:

// Adicione a classe ativo a todos os itens do menu
// R:
// const menuEditar = document.querySelectorAll('.menu li');

// menuEditar.forEach(function(item){
//   console.log(item);
//   item.classList.add('ativo')
// });
// ou como o do professor:
// menuEditar.forEach((item) => {
//   item.classList.add('ativo');
// })

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
// R:
// menuEditar.forEach((item) => {
//     item.classList.remove('ativo');
//   });

//   menuEditar[0].classList.add('ativo');


// // Verifique se as imagens possuem o atributo alt
// // R:
// const imgsEdit = document.querySelectorAll('img');

// imgsEdit.forEach((item) => {
//   const possuiAtributo = item.hasAttributes('alt');
//   console.log(img, possuiAtributo);
// });
// pq deu true???????????? do professor deu False quando ele retirou a tag 'alt'. 


// Modifique o href do link externo no menu

// const modificarHref = document.querySelector('.menu [href^="https://"]');
// console.log(modificarHref.setAttribute('href', 'https://vaiprapqp.com'));
// console.log(modificarHref);

// HEIGHT E WIDTH : Estas são propriedades e métodos dos objetos Element e HTMLElement, a maioria delas são Read Only.

// Ex:
// const listaAnimais = document.querySelector('.animais-lista');

// // listaAnimais.clientHeight; // height + padding
// // listaAnimais.offsetHeight; // height + padding + border
// // listaAnimais.scrollHeight; // height total, mesmo dentro de scroll
// console.log(listaAnimais.scrollHeight);

//Mesma coisa para o Width, clientWidth, etc ... 

// OFFSETTOP E OFFSETLEFT : pegar a  distância da página em diferentes direções

// Ex  - usando a variavel que ja ta setada no ex de cima:
// const topoAnimais = listaAnimais.offsetTop;
// console.log(topoAnimais);

// // Ex 2:
// const topoCopy = document.querySelector('.copy');
// console.log(topoCopy.offsetTop);

// OFFSETTOP - Distância entre o topo do elemento e o topo da página
// section.offsetTop;

//OFFSETLEFT - Distância entre o canto esquerdo do elemento e o canto esquerdo da página
// section.offsetLeft;

// GETBOUNDINGCLIENTRECT() - Método que retorna um objeto com valores de width, height, distâncias do elemento e mais.

// const section = document.querySelector('.animais');

// const rect = section.getBoundingClientRect();
// rect.height; // height do elemento
// rect.width; // width do elemento
// rect.top; // distância entre o topo do elemento e o scroll
// console.log(rect); //retorna todas as propriedades de medida do elemento que eu selecionei.

// WINDOW : pegar variadas medições em relação a janela (mto usado pra saber o tamanho da tela do usuário)
// Ex:
// window.innerWidth; // width do janela
// window.outerWidth; // soma dev tools também (outras abas da mesma janela - como o console por ex.)
// window.innerHeight; // height do janela
// window.outerWidth; // soma a barra de endereço
// window.pageYOffset; // distância total do scroll horizontal
// window.pageXOffset; // distância total do scroll vertical

// Exemplo de verificação usando as medições:

// const primeiroH2 = document.querySelector('h2');
// const h2rect = primeiroH2.getBoundingClientRect();

// if (h2rect.top < 0) {
//   console.log('passou do elemento')
// };
//Quando o elemento fica com valor negativo em relaçao ao topo do site, quer dizer que ja passamos por ele no scroll.

// MATCHMEDIA() - Utilize um media-querie como no CSS para verificar a largura do browser do usuário;

// Ex: 
// const small = window.matchMedia('(max-width: 600px)').matches;

// if(small) {
//   console.log('usuário mobile')
// } else {
//   console.log('usuario desktop')
// }
// OBS: a propriedade matches retorna um valor true or false em relação ao valor especificado no método matchMedia();


//EXERCÍCIOS: 

// Verifique a distância da primeira imagem em relação ao topo da página
// R:

// const primeiraImg = document.querySelector('img');
// console.log(primeiraImg.offsetTop);

// Retorne a soma da largura de todas as imagens
// // R:

// function somaImagens() {
//   const todasImagens = document.querySelectorAll('img');
//   let soma = 0;
//   todasImagens.forEach((item) => {
//     soma = soma + item.offsetWidth;    
//   });
//   console.log(soma);
// }
// window.onload = function() {
//   somaImagens();
// }

// Verifique se os links da página possuem o mínimo recomendado para telas utilizadas com o dedo. (48px/48px de acordo com o google)
// R:

// const links = document.querySelectorAll('a');

// links.forEach((item) => {
//   const linkWidth = item.offsetWidth;
//   const linkHeight = item.offsetHeight;
//   if(linkWidth >= 48 && linkHeight >= 48) {
//     console.log(item, 'possui acessibilidade')
//   } else {
//     console.log(item, 'Não possui acessibilidade')
//   }
// });

// Se o browser for menor que 720px, adicione a classe menu-mobile ao menu
// R:
// const testeMobile = window.matchMedia('(max-width: 720px)').matches;

// if(testeMobile) {
//   const menuSelecionado = document.querySelector('.menu');
//   menuSelecionado.classList.add('menu-mobile')
// } else {
//   console.log('não é mobile')
// }

// EVENTOS :
// ADDEVENTLISTENER: Adiciona uma função ao elemento, esta chamada de callback, que será ativada assim que certo evento ocorrer neste elemento.

// Ex:
// segue parâmetros:
// elemento.addEventListener(event, callback, options)

// const clicarTitulo = document.querySelector('.titulo');

// clicarTitulo.addEventListener('click', function() {
//   console.log('Clicou no título');
// })

// Obs:o ideal é passar uma função com nome ao invés de uma função anônima no segundo parâmetro.
// Obs 2: O terceiro parâmetro é opcional.

// CALLBACK : É boa prática separar a função de callback do addEventListener, ou seja, declarar uma função ao invés de passar diretamente uma função anônima. 

// Ex:

// const img = document.querySelector('img');
// function callback() {
//   console.log('Clicou');
// }
// img.addEventListener('click', callback);

// ou abreviado:
// img.addEventListener('click', () => {
//   console.log('Clicou');
// })

// EVENT : O primeiro parâmetro do callback é referente ao evento que ocorreu.

// const img = document.querySelector('img');

// function callback(event) {
//   console.log(event);
// }
// img.addEventListener('click', callback);

// Obs: Geralmente utilizam o 'e' como nome do parâmetro - pode ser qualquer palavra

// PROPRIEDADES DO EVENT

// Exemplos:
// const animaisLista = document.querySelector('.animais-lista');

// function executarCallback(event) {
//   const currentTarget = event.currentTarget; // this - retorna a lista, nesse caso. O objeto que foi selecionado. 
//   const target = event.target; // onde o click ocorreu (exatamente o ponto do click)
//   const type = event.type; // tipo de evento
//   const path = event.path; //o caminho do click
//   console.log(currentTarget);
// }
// animaisLista.addEventListener('click', executarCallback);


// EVENT.PREVENTDEFAULT() : Previne o comportamento padrão do evento no browser. No caso de um link externo, por exemplo, irá previnir que o link seja ativado.

// const linkExterno = document.querySelector('a[href^="http"]');

// function clickLinkExterno(event) {
//   event.preventDefault();
//   console.log(event);
// }
// linkExterno.addEventListener('click', clickLinkExterno)


// THIS : A palavra chave this é uma palavra especial de JavaScript, que pode fazer referência a diferentes objetos dependendo do contexto. No caso de eventos, ela fará referência ao elemento em que addEventListener foi adicionado.

// Ex:
// const img = document.querySelector('img');

// function callback(event) {
//   console.log(this); // retorna a imagem
//   console.log(this.getAttribute('src')); //buscando atributos 
// }
// img.addEventListener('click', callback);


// DIFERENTES EVENTOS : Existem diversos eventos como click, scroll, resize, keydown, keyup, mouseenter e mais. Eventos podem ser adicionados a diferentes elementos, como o window e document também.
// Ex:
// const h1 = document.querySelector('h1');

// function callback(event) {
//   console.log(event.type, event);
// }

// h1.addEventListener('click', callback);
// h1.addEventListener('mouseenter', callback); //passar o mouse por cima do elemento selecioando
// window.addEventListener('scroll', callback); //scroll na janela do navegador - por isso window
// window.addEventListener('resize', callback); //evento enquando muda o tamanho da tela.
// window.addEventListener('keydown', callback); //evento enquando digita alguma tecla do teclado.


// KEYBOARD : Você pode adicionar atalhos para facilitar a navegação no seu site, através de eventos do keyboard.

// Ex:
// function handleKeyboard(event) {
//   if(event.key === 'f') {
//     document.body.classList.toggle('fullscreen')
//   }
// }
// window.addEventListener('keydown', handleKeyboard);

// obs: o toogle faz com que adicione se nao tiver a classe e delete se já tiver.  


// FOREACH E EVENTOS : O método addEventListener é adicionado à um único elemento, então é necessário um loop entre elementos de uma lista para adicionarmos à cada um deles.

// const imgs = document.querySelectorAll('img');

// function ClickImg(event) {
//   console.log(event.currentTarget.getAttribute('src'));
// }

// imgs.forEach((item) => {
//   item.addEventListener('click', ClickImg);
// });

// Obs: currentTarget -  pega aonde exatamente foi o Click;
// getAttribute() pega os atributos especificados;


// EXERCÍCIOS :

// Quando o usuário clicar nos links internos do site, adicione a classe ativo ao item clicado e remova dos demais itens caso eles possuam a mesma. Previna o comportamento padrão desses links
// R:

// const linksInternos = document.querySelectorAll('a[href^="#"]');

// function clickLinkInterno(event) {
//   event.preventDefault();
//   linksInternos.forEach((item) => {
//     item.classList.remove('ativo');
//   })
//   this.classList.toggle('ativo');
// }

// linksInternos.forEach((item) => {
//   item.addEventListener('click', clickLinkInterno);
// });


// Selecione todos os elementos do site começando a partir do body, ao clique mostre exatamente quais elementos estão sendo clicados
// R:

// const todosElementos = document.querySelectorAll('body *');

// function clickElemento(event) {
//   console.log(event.currentTarget);
// }

// todosElementos.forEach((item) => {
//   item.addEventListener('click', clickElemento);
// });


// Utilizando o código anterior, ao invés de mostrar no console, remova o elemento que está sendo clicado, o método remove() remove um elemento
// R:

// function clickElemento(event) {
//   this.remove();
// }

// todosElementos.forEach((item) => {
//   item.addEventListener('click', clickElemento);
// });


// Se o usuário clicar na tecla (t), aumente todo o texto do site. 
// R:

// function aumentarFont(event) {
//     if(event.key === 't') {
//       document.documentElement.classList.toggle('fonte-maior')
//     }
//   }
//   window.addEventListener('keydown', aumentarFont);

// OUTERHTML, INNERHTML E INNERTEXT : Propriedades que retornam uma string contendo o html ou texto. É possível atribuir um novo valor para as mesmas element.innerText = 'Novo Texto'.

// Exemplos:
// const menu = document.querySelector('.menu');

// menu.outerHTML; // retorna todo o html do elemento
// menu.innerHTML; // retorna o html interno
// menu.innerText; // retorna o texto, sem tags

// menu.innerText = '<p>Texto</p>'; // a tag vai como texto
// menu.innerHTML = '<p>Texto</p>'; // a tag é renderizada


// TRANSVERSING : Como navegar pelo DOM, utilizando suas propriedades e métodos.

// const lista = document.querySelector('.animais-lista');

// lista.parentElement; // pai
// lista.parentElement.parentElement; // pai do pai
// lista.previousElementSibling; // elemento irmao - acima - anterior
// lista.nextElementSibling; // elemento irmao - abaixo - proximo

// lista.children; // HTMLCollection com os filhos
// lista.children[0]; // primeiro filho (acessando uma HTML Collection - lembrar que acessa como uma array - array-like)
// lista.children[--lista.children.length]; // último filho (todos menos 1)

// // ou pode retornar usando seletores de CSS :
// lista.querySelectorAll('li'); // todas as LI's
// lista.querySelector('li:last-child'); // último filho


// ELEMENT VS NODE : Element's represetam um elemento html, ou seja, uma tag. Node representa um nó, e pode ser um elemento (Element), texto, comentário, quebra de linha e mais.

// Exemplos:
// const lista = document.querySelector('.animais-lista');

// lista.previousElementSibling; // elemento acima (irmao acima)
// lista.previousSibling; // node acima (irmao acima)

// lista.firstChild; // primeiro node child (primeiro filho)
// lista.childNodes; // todos os node child (todos filhos)

// Obs: Geralmente estamos atrás de um elemento e não de qualquer node em si.


// MANIPULANDO ELEMENTOS : É possível mover elementos no dom com métodos de Node.

// Exemplos:

// const lista = document.querySelector('.animais-lista');
// const contato = document.querySelector('.contato');
// const titulo = contato.querySelector('.titulo');

// contato.appendChild(lista); // move lista para o final de contato (move para o ultimo filho)
// contato.insertBefore(lista, titulo); // insere a lista antes de titulo
// contato.removeChild(titulo); // remove titulo de contato (remover um filho)
// contato.replaceChild(lista, titulo); // substitui titulo por lista


// NOVOS ELEMENTOS : Podemos criar novos elementos com o método createElement()

// Exemplo: 
// const animais = document.querySelector('.animais');

// const novoH1 = document.createElement('h1'); //criando a tag
// novoH1.innerText = 'Novo Título'; //adicionando o texto
// novoH1.classList.add('titulo'); //adicionando uma classe

// animais.appendChild(novoH1); //escolhendo o lugar dele - neste caso foi adicionado depois do filho de animais


// CLONAR ELEMENTOS : Todo elemento selecionado é único. Para criarmos um novo elemento baseado no anterior, é necessário utilizar o método cloneNode()

// Ex:
// const titulo = document.querySelector('h1');

// const cloneTitulo = titulo.cloneNode(true);
// const contato = document.querySelector('.contato');
// contato.appendChild(cloneTitulo);

// Obs: true dentro de cloneNode() inclui os filhos do elemento...caso contrário, usando false, retorna apenas o elemento sozinho.


// EXERCÍCIOS: 

// Duplique o menu e adicione ele em copy
// R:

// const selecionarMenu = document.querySelector('.menu');

// const cloneMenu = selecionarMenu.cloneNode(true);
// const selecionarCopy = document.querySelector('.copy');
// selecionarCopy.appendChild(cloneMenu);


// Selecione o primeiro DT da dl de Faq
// R:

// const faqLista = document.querySelector('.faq-lista')
// console.log(faqLista.children[0]);


// Selecione o DD referente ao primeiro DT
// R:

// const primeiroDt = document.querySelector('dt');
// console.log(primeiroDt.nextElementSibling);


// Substitua o conteúdo html de .faq pelo de .animais
// R:

// const faq = document.querySelector('.faq');
// const animais = document.querySelector('.animais');

// faq.innerHTML = animais.innerHTML;



// NAVEGAÇÃO POR TABS: 

// ADICIONAR CLASSES PARA MANIPULAÇÃO : A ideia de navegação por tabs, é ter uma lista de itens que controla a visualização de uma lista de conteúdo. Cada item da lista possui um conteúdo relacionado ao mesmo.