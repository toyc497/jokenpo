window.alert("Bem Vindo ao game Joquen Pô!");

var mensagem = document.querySelector('div.tela');


function pedra(){
    var aleatorio = Math.floor(Math.random() * 3);
    if(aleatorio == 0){
        mensagem.innerHTML = "Computador escolheu Pedra, Empate!!";
    }else if(aleatorio == 1){
        mensagem.innerHTML = "Computador escolheu Papel, Você perdeu!!";
    }else{
        mensagem.innerHTML = "Computador escolheu Tesoura, Você Ganhou!!";
    }
}
function papel(){
    var aleatorio = Math.floor(Math.random() * 3);
    if(aleatorio == 0){
        mensagem.innerHTML = "Computador escolheu Pedra, Você ganhou!!";
    }else if(aleatorio == 1){
        mensagem.innerHTML = "Computador escolheu Papel, Empate!!";
    }else{
        mensagem.innerHTML = "Computador escolheu Tesoura, Você perdeu!!";
    }
}
function tesoura(){
    var aleatorio = Math.floor(Math.random() * 3);
    if(aleatorio == 0){
        mensagem.innerHTML = "Computador escolheu Pedra, Você perdeu!!";
    }else if(aleatorio == 1){
        mensagem.innerHTML = "Computador escolheu Papel, Você ganhou!!";
    }else{
        mensagem.innerHTML = "Computador escolheu Tesoura, Empate!!";
    }
}