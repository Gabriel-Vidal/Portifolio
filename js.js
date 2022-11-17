function apagarTexto(){
    var nome = document.querySelector('#nome');
    nome.value = '';
    var sobrenome = document.querySelector('#sobrenome');
    sobrenome.value = '';
    var email = document.querySelector('#email');
    email.value = '';
    var cidade = document.querySelector('#cidade');
    cidade.value = '';
    var estado = document.querySelector('#estado');
    estado.value = '';
    var text = document.querySelector('#text');
    text.value = '';
    alert('Sua mensagem foi enviada com sucesso')
};