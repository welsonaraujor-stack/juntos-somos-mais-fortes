// =============================
// RECUPERAR DADOS DO CADASTRO
// =============================

const nome =
localStorage.getItem("nome");

const cpf =
localStorage.getItem("cpf");

const nascimento =
localStorage.getItem("nascimento");

const telefone =
localStorage.getItem("telefone");

const cidade =
localStorage.getItem("cidade");

const email =
localStorage.getItem("usuario");

if(nome){

    document.getElementById(
    "nomeCompleto"
    ).value = nome;

}

if(cpf){

    document.getElementById(
    "cpfUsuario"
    ).value = cpf;

}

if(nascimento){

    document.getElementById(
    "dataNascimento"
    ).value = nascimento;

}

if(telefone){

    document.getElementById(
    "telefoneUsuario"
    ).value = telefone;

}

if(cidade){

    document.getElementById(
    "cidadeUsuario"
    ).value = cidade;

}

if(email){

    document.getElementById(
    "emailUsuario"
    ).value = email;

}

const botao =
document.getElementById("btnTriagem");

botao.addEventListener("click", () => {

    alert(
        "Indo para a Pré-Triagem..."
    );

    // Futuro

    // window.location.href =
    // "pre-triagem.html";

});
// ============================
// CARREGAR USUÁRIO LOGADO
// ============================

const usuario = localStorage.getItem("usuario");

if(usuario){

    document.getElementById(
        "nomeUsuario"
    ).innerText = usuario;

}