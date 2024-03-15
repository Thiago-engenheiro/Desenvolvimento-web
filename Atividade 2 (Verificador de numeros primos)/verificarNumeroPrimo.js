/* 
 
    Criador: Thiago Abraao
    Data inicial do inicio da atividade: 15/03/2024
    Data final do fim da atividade:  15/03/2024
    Objetivo: Aprendizado de JavaScript
    O que progama faz: Verificar se o numero e primo

*/

/*  __________________________________________________________________________________________________________________ */
/*  Instruções da atividade:

  1 - Implemente uma função com a seguinte assinatura: verificarNumeroPrimo(n);

  2 - A função deve verificar se o número "n" recebido é primo e retornar true, caso verdadeiro, ou false caso não seja primo.

  3 - No mesmo arquivo, faça a chamada da função para os seguintes casos de teste: 

        verificarNumeroPrimo(0); //false
        verificarNumeroPrimo(1); //false
        verificarNumeroPrimo(2); //true
        verificarNumeroPrimo(3); //true
        verificarNumeroPrimo(7); //true
        verificarNumeroPrimo(83); //true
        verificarNumeroPrimo(100); //false
        verificarNumeroPrimo(991); //true
        verificarNumeroPrimo(104729); //true
        verificarNumeroPrimo(14348907); //false

*/

/*  __________________________________________________________________________________________________________________ */
/*  Declaração de Variaveis  */

    
   let resultado;

/*  __________________________________________________________________________________________________________________ */
/*  Codigo */

function limparConsole() {
   
    process.stdout.write('\x1B[2J\x1B[3J\x1B[H');
}

function verificarNumeroPrimo(n) {

    if (n <= 1) {

        return false;

    }
    
    for (let i = 2; i <= Math.sqrt(n); i++) {
        
        if (n % i === 0) {

            return false;

        }
    }
    
    return true;
}

let numeros = [0, 1, 3, 7, 83, 100, 991, 104729, 14348907];

limparConsole();

console.log(`__________________________________ VERIFICADOR DE NUMEROS PRIMOS __________________________________\n`);

for (let i = 0; i < numeros.length; i++) {

    let resultado = verificarNumeroPrimo(numeros[i]);

    if (resultado === false) {

        console.log(`${numeros[i]} não é primo.`);

    } else {

        console.log(`${numeros[i]} é primo.`);

    }
}

console.log(`\n______________________________________________ FIM ______________________________________________\n`);
 
/*  __________________________________________________________________________________________________________________ */
/*  Fim  */