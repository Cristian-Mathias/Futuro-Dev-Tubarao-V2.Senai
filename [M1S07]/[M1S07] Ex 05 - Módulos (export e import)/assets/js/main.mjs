/* 
Módulos (export e import)
*/
/*
1-Crie dois arquivos JavaScript, math.js e main.js.
2-No arquivo math.js, defina e exporte duas funções: uma para 
calcular a soma de dois números e outra para calcular o produto 
de dois números.
3-No arquivo main.js, importe as funções do arquivo math.js e 
utilize-as para calcular a soma e o produto de dois números de 
sua escolha.
4-Exiba os resultados no console.
*/


import {somar,calcularProduto} from './math.mjs';
const numeros = [10,10];
const resultadoSoma = somar(...numeros);
console.log('Resultado da soma: ' + resultadoSoma);


const numeroProduto = [10,10];
const resultadoPorduto = calcularProduto(...numeroProduto);
console.log('Resultado da multiplicação: ' + resultadoPorduto);


