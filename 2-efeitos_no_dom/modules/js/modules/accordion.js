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

export default function initAccordion() {
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
