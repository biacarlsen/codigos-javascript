// PASSO A PASSO PARA FAZER ANIMAÇÃO AO SCROLL em cada section:

// 1 - adicionar nova classe em cada section para fazer a funcionalidade com o js;

// 2 - selecionar as section(elemetos) e colocá-los em uma variável;

// 3 - criar uma função que vai ser executada com o scroll;

// 4 - adicionar evento de scroll para ativar função de animarScroll;

// 5 -necessário saber a distância que cada elemento(section) está do topo - cada = foreach;

// 6 - verificar se o valor do topo do elemento é menor que zero - pq se for, quer dizer que ele já chegou no topo do site.

// 7 - adicionar classe 'ativo' quando o scroll chegar no elemento.

// 8 - estilizar no CSS;

// 9 - para a animação não ficar aparecendo mto demorado(somente quando chegar no topo exatamente), é necessário fazer um cálculo para ela acontecer mais ou menos com 50% visível em relação a outra section. Pra isso é precisso tirar um pouco do valor do topo da tela usando window.innerHeight * 0.5 = 50%.

// 10 - como os elementos(sections) só aparecem ao scroll, quando a pessoa entrar no site ela não vai conseguir ver nada caso ela nao de scroll, para isso não acontecer, é necessário executar a função quando iniciar o site.  

// 11 - fazer teste de verificação pra ter certeza que as classes das sections existem.

// 12 - colocar tudo dentro de uma função para que não de nenhum problema depois com os nomes das variáveis. Exportar o modulo;


// CÓDIGOS com seus respectivos passos:

// 12
export default function initAnimacao() {

  // 2:
  const sections = document.querySelectorAll('.js-scroll');

  // 11:
  if(sections.length) {
    // 9:
    const windowMetade = window.innerHeight * 0.5; 

    // 3:
    function animaScroll() {
      // 5:
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top - windowMetade;
        // 6:
        if(sectionTop < 0) {
        // 7:
          section.classList.add('ativo');
        }
      })
    }
    // 10:
    animaScroll();

    // 4:
    window.addEventListener('scroll', animaScroll);
  }
}