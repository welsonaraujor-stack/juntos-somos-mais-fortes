// ========================================
// TELA: QUEM É VOCÊ?
// ========================================

// Esta função é chamada pelo onclick
// de cada card da tela

function selecionar(tipoPerfil) {

    // Salva o perfil escolhido
    localStorage.setItem(
        "perfil",
        tipoPerfil
    );

    console.log(
        "Perfil selecionado:",
        tipoPerfil
    );

    // Redireciona para a tela correta

    switch (tipoPerfil) {

        case "Pessoa":

            window.location.href =
            "../../perfis/pessoa/index.html";

            break;

        case "Grupo":

            window.location.href =
            "../../perfis/grupo/index.html";

            break;

        case "Instituição":

            window.location.href =
            "../../perfis/instituicao/index.html";

            break;

        case "Parceiro":

            window.location.href =
            "../../perfis/parceiro/index.html";

            break;

        default:

            alert(
                "Perfil inválido."
            );

    }

}