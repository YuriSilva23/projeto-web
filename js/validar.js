
function validar() {
var nome = form.nome.value;
var preco = form.preco.value;

if (nome == "") {
alert('Preencha o nome da Empresa!');
form.nome.focus();
return false;
}

if (preco == "") {
alert('Preencha sua senha!');
form.preco.focus();
return false;
}

}

