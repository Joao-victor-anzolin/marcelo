function Trocar(){
    var texto = document.getElementById('botao');
    var imagem = document.getElementById('img');
    imagem.style.display = 'block';
    if (imagem.style.display == 'block'){
        texto.innerHTML = 'É isso, tchau';
    }
}
