// Obs: se eu isolar todo o código usado para fazer a funcionalidade de Navegação por Tabs dentro de uma função, eu poderei usar futuramente os mesmos nomes das variáveis e não dará erro. Não esquecer de colocar ela pra executar no final. 

function iniciarTabNav() {
  const tabMenu = document.querySelectorAll('.js-tabmenu li');
  const tabContent = document.querySelectorAll('.js-tabcontent section');
  
  // verificação:
  if(tabMenu.length && tabContent.length) {
  
    // tornando o primeiro item sempre ativo:
    tabContent[0].classList.add('ativo');
  
    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove('ativo')
      })
      tabContent[index].classList.add('ativo');
    }
  
    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index);
      });
    });
  }
}
iniciarTabNav();

// PASSO A PASSO PARA FAZER UM ACCORDION:

// 1 - colocar classes novas referentes a funcionalidade que será criada com js. Evitar usar a que estiver la pra nao acontecer erros caso a classe seja alterada;

// 2 - retornaná-las em suas respectivas variáveis;

// 3 - adicionar evento de click para cada item da lista;

// 4 - criar função para add classe ativo na dt e selecionar o elemento irmão (dd) do item clicado - que no caso é a descrição da pergunta e adicionar uma classe 'ativo' neste elemento; 

// 5 - estilizar os itens no CSS; 

// 6 - ativar o primeiro item para ficar aberto para o usuario;

// 7 - isolar toda a funcionalidade dentro de uma função.

// 8- fazer teste de verificação.

// 9- como tava sendo usado mtas vezes a string com o nome ativo, criamos uma variavel para que se precisassemos alterar esse valor, ficasse mais fácil.

function initAccordion() {
  const accordionList = document.querySelectorAll('.js-accordion dt');
  const activeClass = 'ativo';

  if(accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);
    
    function activeAccordion(event) {
      this.classList.toggle(activeClass);
      console.log(this.nextElementSibling.classList.toggle(activeClass));
    };
    
    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion);
    });
  }
}
initAccordion();


// PASSO A PASSO PARA FAZER SCROLL SUAVE COM LINK INTERNO: 

// 1 - Colocar uma classe nova referente a funcionalidade que iremos fazer com js no menu que é aonde vamos mexer;

// 2 - selecionar todos os links internos e colocá-los em uma variável;

// 3 - selecionar cada item para adicionar evento de click - usando foreach;

// 4 - criar função para executar o scroll na section pegando os dados do href do item e comparando com o id da section; Na função: prevenir o padrão de click. 

// 5 - usar método-função que faça com que a section venha pra nossa visão - js já tem uma função pronta pra isso - scrollIntoView(); Dentro dela da pra passar os parâmetros de comportamento (behavior: 'smooth' = suave) e qual parte da section ele vai parar (block: 'start' = inicio).

// 6 - isolar tudo com uma função.

function initScrollSuave() {

  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
   
    // o código do método a seguir só funciona em navegadores atuais - chrome e firefox.
    
    section.scrollIntoView({
      behavior:'smooth',
      block: 'start', 
    });
  }
  
  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });
}
initScrollSuave();
