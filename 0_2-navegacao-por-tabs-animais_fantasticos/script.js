// PASSOS p/ a construção de uma Navegação por Tabs:

// 1 - definir as variaveis com os itens que irei mexer;

// 2 - criar função que adiciona classe 'ativo' passando index como parametro pra pegar o numero de cada um [0, 1, 2, ...] - array-like;

// 3 - dar forEach pra passar em cada item deletando a classe 'ativo' pra ficar somente 1 item ativo por vez;

// 4 - adicionar evento de click para quando clicar no item passe o valor index dele.

// 5 - no CSS, ocultar o que não tiver ativo e criar animação na classe ativa mostrando o conteúdo;

// 6 - Deixar visível que o texto da imagem mudará (mostrando que é clicável) usando CSS;

// 7 - Deixar a primeira imagem(li) sempre ativa pra mostrar que tem algum texto com ela - da pra fazer isso apenas colocando uma classe 'ativo' no primeiro item manualmente, mas caso não se tenha acesso ao arquivo index, da pra fazer isso usando js.

// 8 - Opcional: fazer verificação pra ter certeza se os itens mencionados nas variaveis existem memsmo no código index. Caso não existam, o código da Navegação por Tabs não será executado. Usando lenght já da pra verificar pq se der zero(dizendo que nao existe a variavel) vai dar false, pq zero é false. Se der qualquer outro numero acima de zero, vai dar true executando o código posterior. 

// 9 - Opcional: para tornar o site acessível e não deixar o usuário sem ver o conteúdo caso ele esteja com o js desabilitado no navegador, pode ser adicionado uma classe na tag html que só será ativada se o script(inline no head) for lido. Caso contrário ele não será ativado. 

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
