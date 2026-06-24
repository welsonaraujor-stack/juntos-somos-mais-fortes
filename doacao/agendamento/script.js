// =====================================
// AGENDAMENTO
// =====================================

// Horário selecionado


let horarioSelecionado = "";


// ==============================
// SELEÇÃO DE HORÁRIOS
// ==============================

const horarios =
document.querySelectorAll(
".horarios button"
);

horarios.forEach(botao => {

    botao.addEventListener(
    "click",
    () => {

        horarios.forEach(b => {

            b.classList.remove(
            "ativo"
            );

        });

        botao.classList.add(
        "ativo"
        );

        horarioSelecionado =
        botao.innerText;

    });

});


// ==============================
// CARREGAR UNIDADE ESCOLHIDA
// ==============================

const unidade =
localStorage.getItem(
"unidade"
);

if(unidade){

    document.getElementById(
    "nomeUnidade"
    ).innerText =
    unidade;

}


// ==============================
// CONFIRMAR AGENDAMENTO
// ==============================

function confirmarAgendamento(){

    const data =
    document.getElementById(
    "data"
    ).value;

    if(data === ""){

        alert(
        "Escolha uma data."
        );

        return;

    }

    if(horarioSelecionado === ""){

        alert(
        "Escolha um horário."
        );

        return;

    }
    const partes =
    data.split("-");

    const dataBrasil =
    `${partes[2]}/${partes[1]}/${partes[0]}`;

    localStorage.setItem(
    "dataDoacao",
    dataBrasil
    );
    

    localStorage.setItem(
    "horarioDoacao",
    horarioSelecionado
    );

    window.location.href =
    "../confirmacao/index.html";

}