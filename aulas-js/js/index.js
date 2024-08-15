function eventoClick(){
    // alert('Acionou um evento de click');
    document.body.style.backgroundColor = "yellow";
}

function onDblClick(){
    alert('Evento de clique duplo');
}

function viraVermelho(){
    let div = document.getElementById("teste");
    div.style.backgroundColor = "red";
}

function viraAzul(){
    let div = document.getElementById("teste");
    div.style.backgroundColor = "blue";
}

function limpaTexto(){
    document.getElementById("campoTexto").value = "";
}

function mudou() {
    console.log('Mudou');
}

function teclaPressionada(){
    console.log('Tecla pressionada');
}