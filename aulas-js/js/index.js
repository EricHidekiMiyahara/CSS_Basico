const carro = {
    marca: "ford", 
    modelo: "ka", 
    ano:2001, placa:"ABC-1234",
    buzina: function() {alert('biiiii')},
    completo: function(){
        return "A marca é " + this.marca + ", o modelo é " + this.modelo + ", o ano é " + this.ano + " e a placa é " + this.placa;
    }
}

console.log(carro.completo());