var  item1 = "arroz";
var item2 = "feijão";
var item3 = "macarrão";
var item4 = "leite";

const pessoa = ["Eric", "Miyahara", 21, "estudante"]; //array
pessoa.splice(1, 0, "Item adicionado 1", "Item adicionado 2");

const lista1 = ["Arroz", "feijão", "leite", "macarrão"];

const lista2 = ["Suco", "refrigerante", "carne"];

const lista3 = ["salgadinho"]

const superLista = lista1.concat(lista2, lista3);

const jogadores = ["Biro Biro", "Ribamar", "Pelé", "Maradona", "Dimitri", "Vampeta"];
const craques = jogadores.slice(2, 4);

jogadores.sort();
jogadores.reverse();

const numeros = [40, 100, 1, 5, 25, 10];
const maior20 = numeros.filter(filtragem);

function filtragem(value, index, array){
    return value > 20;
}

numeros.sort(function (a, b) { return a - b });

function MaiorNumero (array) {
    return Math.max.apply(null, array);
}

function MenorNumero (array) {
    return Math.min.apply(null, array);
}

document.getElementById("teste").innerHTML = maior20;