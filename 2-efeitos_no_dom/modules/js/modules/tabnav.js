// Obs: se eu isolar todo o código usado para fazer a funcionalidade de Navegação por Tabs dentro de uma função, eu poderei usar futuramente os mesmos nomes das variáveis e não dará erro. Não esquecer de colocar ela pra executar no final. 

export default function iniciarTabNav() {
  const tabMenu = document.querySelectorAll('.js-tabmenu li');
  const tabContent = document.querySelectorAll('.js-tabcontent section');
  
  // verificação:
  if(tabMenu.length && tabContent.length) {
  
    // tornando o primeiro item sempre ativo:
    tabContent[0].classList.add('ativo');
  
    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove('ativo')
      });
      // add animacao com dataset:
      const direcaoAnimacao = tabContent[index].dataset.anime;
      tabContent[index].classList.add('ativo', direcaoAnimacao);
    }
  
    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index);
      });
    });
  }
}





