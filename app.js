let listaNumeroSorteados = [];
let numeroLimite = 3;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2})
}

function exibirMensagem(){
    exibirTextoNaTela('h1', 'Jogo do Número Secreto')
    exibirTextoNaTela('p', `Escolha um número entre 1 e ${numeroLimite}:`)
}

exibirMensagem();

function verificarChute(){
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto){
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`
        exibirTextoNaTela('h1','Acertou');
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(chute>numeroSecreto){
            exibirTextoNaTela('p','O número secreto é menor');
        }else{
            exibirTextoNaTela('p','O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value ='';
}

function gerarNumeroAleatorio(){
   let numeroEscolhido = parseInt(Math.random()*numeroLimite+1);
   let quantidadeElementos = listaNumeroSorteados.length;

   if(quantidadeElementos == numeroLimite){
        listaNumeroSorteados = [];
   }

   if (listaNumeroSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
   }else{
    listaNumeroSorteados.push(numeroEscolhido);
    console.log(listaNumeroSorteados)
    return numeroEscolhido;
   }
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagem();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}


