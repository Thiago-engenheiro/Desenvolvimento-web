/* 
 
    Criador: Thiago Abraao
    Data inicial do inicio da atividade: 09/04/2024
    Data final do fim da atividade:  vazio/vazio/2024
    Objetivo: Aprendizado de JavaScript
    O que progama faz: calculadora web

*/

/*  __________________________________________________________________________________________________________________ */
/*  Instruções da atividade:

  1 - implemente uma aplicação web com as rotas:

    /somar/:a/:b
    /subtrair/:a/:b
    /multiplicar/:a/:b
    /dividir/:a/:b

    Que devem retornar o valor equivalente da operação considerando os valores a e b de entrada pela URL.

  2 - A aplicação deve conter um arquivo index.js na raiz e um módulo calculadora.js na pasta util.
  
*/

/*  __________________________________________________________________________________________________________________ */
/*  Declaração de Variaveis  */



/*  __________________________________________________________________________________________________________________ */
/*  Codigo */

/**
 * Soma dois números inteiros
 * @param  {Number} a
 * @param  {Number} b
 * @return {Number}   a soma entre a e b
 */
function somar(a, b) {
  return Number(a) + Number(b);
}

function subtrair(a, b) {
  return Number(a) - Number(b);
}

function multiplicar(a, b) {
  return Number(a) * Number(b);
}

function dividir(a, b) {
  return Number(a) / Number(b);
}

module.exports = {
  somar,
  subtrair,
  multiplicar,
  dividir
};


/*  __________________________________________________________________________________________________________________ */
/*  Fim  */

