let listaDeNumerosSorteados = [];
let numeroSecreto = gerarnumeroaleatorio();
let tentativas = 1; 

function exibirTextonaTela(tag,Texto) {
let campo = document.querySelector(tag)
campo.innerHTML = Texto;
}


function exibirMensagemInicial() {
    exibirTextonaTela('h1 ','Jogo do número secreto' );
    exibirTextonaTela('p', 'Escolha um número entre 1 e 10');

}

exibirMensagemInicial();


function verificarChute() {
    let chute = document.querySelector('input').value;

    if ( chute == numeroSecreto) {

        exibirTextonaTela('h1',' Acertou !');
        let palavraTentativa = tentativas > 1 ? 'tentativas':'tentativa';
        let mensagemTentativas = `Você descobriu o Número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextonaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
     if (chute > numeroSecreto){
        exibirTextonaTela('p','O número secreto é menor');
     } else {
        exibirTextonaTela('P', 'O número secreto é maior');
     } 
     tentativas++;
     limparCampo();
    
    }
    
}
function gerarnumeroaleatorio() {

  let numeroEscolhido = parseInt(Math.random() * 4 + 1);
  if (listaDeNumerosSorteados.includes(numeroEscolhido)){
    return gerarnumeroaleatorio();
  }else{
    listaDeNumerosSorteados.push(numeroEscolhido)
    console.log(listaDeNumerosSorteados);
    return numeroEscolhido;
  }
    
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarjogo() {
    numeroSecreto = gerarnumeroaleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}
