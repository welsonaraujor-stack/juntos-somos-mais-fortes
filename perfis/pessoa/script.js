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