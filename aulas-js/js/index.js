//Inserindo um texto no paragrafo
/* Autor: Eric
    JS
*/

//DECLARACAO DE VARIAVEIS
var nome, sobrenome, nomeCompleto, idade, soma;

// ATRIBUICAO DOS VALORES
nome="Eric";
sobrenome="Miyahara";
nomeCompleto = nome + " " + sobrenome;
idade = 21;

soma = idade + 10;
pessoa = soma+nome;


document.getElementById("texto").innerHTML = pessoa;

var x = 10; //aqui é 10

{
    var x = 2; //aqui é 2
}

alert(x);

/* let x = 10 //aqui é 10

{
    let x = 2; //aqui é 2
}

//aqui é 10
document.getElementById("texto").inner.HTML = x; 

*/