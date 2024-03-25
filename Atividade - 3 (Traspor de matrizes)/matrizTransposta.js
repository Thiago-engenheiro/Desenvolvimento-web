/* 
 
    Criador: Thiago Abraao
    Data inicial do inicio da atividade: 25/03/2024
    Data final do fim da atividade:  25/03/2024
    Objetivo: Aprendizado de JavaScript
    O que progama faz: transpor matrizes 

*/

/*  __________________________________________________________________________________________________________________ */
/*  Instruções da atividade:

  1 - Implemente a função transporMatriz(A);

  2 - A função deve receber uma matriz (array de arrays) A e imprimir a matriz original e a versão transposta; 
  
*/

/*  __________________________________________________________________________________________________________________ */
/*  Declaração de Variaveis  */

var matriz = [

    [1, 2],
    [3, 4],
    [5, 6],

];

/*  __________________________________________________________________________________________________________________ */
/*  Codigo */

function limparConsole() {
   
    process.stdout.write('\x1B[2J\x1B[3J\x1B[H');
}

function transporMatriz(matriz) {

    var transpostar = [];

    for (var i = 0; i < matriz[0].length; i++) { 

        transpostar[i] = [];
  
        for (var j = 0; j < matriz.length; j++) {  

            transpostar[i][j] = matriz[j][i];   
        
        }

    }

    return transpostar; 

}

limparConsole();

console.log(`_____________________________________ TRANSPOR DE MATRIZES _____________________________________\n`);

console.log(`MATRIZ ORIGINAL`);
 
for (var i = 0; i < matriz.length; i++) {

        console.log (matriz[i]);

}

console.log(`\nMATRIZ TRANSPOSTA`);

var matriz__transposta = transporMatriz(matriz);

console.log(matriz__transposta);
console.log(`Não sei deixar ela bonitinha 1 embaixo da outra`);

console.log(`\n______________________________________________ FIM ______________________________________________\n`);
 
/*  __________________________________________________________________________________________________________________ */
/*  Fim  */



    

 

