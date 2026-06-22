// =====================
// BOTÃO CONTINUAR
// =====================

const continuar =
document.getElementById(
"continuar"
);

continuar.addEventListener("click", () => {

    const nome =
    document.getElementById(
    "nome"
    ).value;

    const cpf =
    document.getElementById(
    "cpf"
    ).value;

    const nascimento =
    document.getElementById(
    "nascimento"
    ).value;

    const telefone =
    document.getElementById(
    "telefone"
    ).value;

    const cidade =
    document.getElementById(
    "cidade"
    ).value;

    if(nome === ""){

        alert(
        "Digite seu nome."
        );

        return;
    }

    localStorage.setItem(
    "nome",
    nome
    );

    localStorage.setItem(
    "cpf",
    cpf
    );

    localStorage.setItem(
    "nascimento",
    nascimento
    );

    localStorage.setItem(
    "telefone",
    telefone
    );

    localStorage.setItem(
    "cidade",
    cidade
    );

    window.location.href =
    "../quem-e-voce/index.html";

});