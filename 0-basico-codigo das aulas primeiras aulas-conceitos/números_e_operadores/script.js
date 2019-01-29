//tipos de variáveis com números:

// var idade = 22;
// var gols = 1000;
// var pi = 3.14; //ponto para decimal
// var exp = 2e10; //20000000000 até 15 dígitos (coloca-se a letra 6 + a quantidade de zeros necessários)

//operadores aritméticos básicos:
// var soma = 100 + 50;
// var subtracao = 100 - 50;
// var multiplicacao = 100 * 2;
// var divisao = 100 / 2;
// var expoente = 2 ** 4; //2 elevado a quarta potencia
// var modulo = 14 % 5; 

//obs: o sinal de soma (+) em strings serve para concatenar.

//operadores aritméticos (strings):
// var divisao = 'comprei 10' / 2; //NaN (Not a number) - não da pra dividir string com number;

// var subtracao = "100" - 50; //string com number não funciona, porém quando é colocado operadores que não existem na concatenação de strings, automaticamente ela ja vira uma variavel number e realiza a subtração/divisao/multiplicacao se tiver apenas números nos valores das variaveis.

//A ORDEM IMPORTA:
//começa por multiplicação e divisão, depois por soma e subtração.
//Os parenteses servem para priorizar uma expressão.
//ex:
// var total1 = 20 + 5 * 2; // 30
// var total2 = (20+5) * 2; //50
// var total3 = 20 / 2 * 5; // 50
// var total4 = 10 + 10 * 2 + 20 / 2; //40

//operadores binários: precisam de 2 algoritmos para fazer o cálculo;
//operadores unários: somente 1 algorítimo para realizar o cálculo;

//OPERADORES ARITMÉTICOS UNÁRIOS
//ex:
// var x = 5;
// console.log(++x); //acrescenta 1
// var y = 5;
// console.log(--y); //diminui 1

//TRANSFORMAR STRING EM NÚMERO REAL ACRESCENTANDO O SINAL DE + (positivo) OU - (negativo) NA FRENTE
//ex:
//  var idade = "28" //string
//  console.log(+idade); //number

// //EXERCICIOS
// //1) qual resultado da seguinte expressão:
// var total = 10 + 5 * 2 / 2 + 20;
// console.log(total); //35;

// //2)crie 2 exppressões que retornem NaN(Not a number)
// var idade = '23e';
// var idade2= 22;
// var multiplicacao = idade * idade2;
// console.log(multiplicacao);

// var idade = '2a';
// var idade2= 22;
// var divisao = idade / idade2;
// console.log(divisao);

// //3) somar a string '200' com o número 50 e retornar 250
// var string = "200";
// var number = 50;
// var soma = +string + number;
// console.log(soma);

// //4)incremente o número 5 e retorne o seu valor incrementado
// var incremento = 5;
// console.log(++incremento);

// //5)como dividir o peso por 2?
// var numero = "80";
// var unidade = "kg";
// var dividir = +(numero / 2) + unidade;
// console.log(dividir);













