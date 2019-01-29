//Escopo de função - variáveis dentro de funções não são acessadas fora das mesmas.
//Ex:
function mostrarCarro() {
  var carro = 'Fusca';
  console.log(carro);
}
mostrarCarro(); //Fusca no console
// console.log(carro);//Erro, a veriavel carro não está definida.
//Se colocar a variavel do lado de fora da função, o código console.log(carro) irá funcionar normalmente. 

//Escopo evita conflito entre nomes. 

//Escopo de bloco - variáveis criadas com var, vazam o bloco. Por isso com a introdução ES6 a melhor forma de declararmos uma variável é utilizando const e let, pois estas respeitam o escopo de bloco.

//bloco se faz com {};
//Ex:
{
  var mes = 'dezembro';
  console.log(mes);
}
console.log(mes); //Vazouu o valor da variavel

//Agora usando let:
{
  let ano = 2000;
  console.log(ano);
}
// console.log(ano); //da erro - variavel nao definida. Não vazou! - Melhor usar let  ou const.

// Colchetes {} cria escopo de bloco. Não confundir com a criação de objetos que é com = {}.

//Uso de Const - mantém o escopo no bloco, impede a redeclaração e impede modificação do valor da variável, evitando bugs no código.
//Ex:
const semana = 'primeira';
// semana = 'segunda'; //erro, tentou modificar o valor.
// const semana; // erro, declarou sem valor.
console.log(semana);

//Let - mantem o escopo no bloco, impede a redeclaração, mas permite a modificação do valor da variável.

//EXERCÍCIOS:

// Por qual motivo o código abaixo retorna com erros?

{ 
  //entre chaves - escopo de bloco - const e let nao vazam...entao nao retornam no console fora das chaves.
  var cor = 'preto';
  const marca = 'Fiat';
  let portas = 4;
  console.log(cor, marca, portas);
}

// Como corrigir o erro abaixo?

//para a const funcionar nas duas funções ela precisa estar fora do escopo de somente uma função...tem que colocar ela em cima

const dois = 2;
function somarDois(x) {
  return x + dois;
}
function dividirDois(x) {
  return x / dois;
}
console.log(somarDois(4));
console.log(dividirDois(6));

// O que fazer para total retornar 500?

const numero = 50;

for(let numero = 0; numero < 10; numero++) {
  console.log(numero);
}
const total = 10 * numero;
console.log(total);
