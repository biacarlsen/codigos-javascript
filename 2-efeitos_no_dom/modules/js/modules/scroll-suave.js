// PASSO A PASSO PARA FAZER SCROLL SUAVE COM LINK INTERNO: 

// 1 - Colocar uma classe nova referente a funcionalidade que iremos fazer com js no menu que é aonde vamos mexer;

// 2 - selecionar todos os links internos e colocá-los em uma variável;

// 3 - selecionar cada item para adicionar evento de click - usando foreach;

// 4 - criar função para executar o scroll na section pegando os dados do href do item e comparando com o id da section; Na função: prevenir o padrão de click. 

// 5 - usar método-função que faça com que a section venha pra nossa visão - js já tem uma função pronta pra isso - scrollIntoView(); Dentro dela da pra passar os parâmetros de comportamento (behavior: 'smooth' = suave) e qual parte da section ele vai parar (block: 'start' = inicio).

// 6 - isolar tudo com uma função e exportar o modulo.


export default function initScrollSuave() {

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
