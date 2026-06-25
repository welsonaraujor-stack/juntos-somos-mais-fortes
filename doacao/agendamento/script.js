// =====================================
// AGENDAMENTO
// =====================================

// Horário selecionado
// ==============================
// CARREGAR UNIDADE ESCOLHIDA
// ==============================

const unidade =
localStorage.getItem("unidade");

if(unidade){

    document.getElementById(
    "nomeUnidade"
    ).innerText = unidade;

    if(unidade === "Parque Ibirapuera"){

        document.getElementById(
        "enderecoUnidade"
        ).innerText =
        "Av. Pedro Álvares Cabral";

        document.getElementById(
        "infoUnidade"
        ).innerText =
        "08h às 17h";
        
        document.getElementById(
        "imagemUnidade"
        ).src =
        "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400";
    }

    if(unidade === "Shopping Tatuapé"){

        document.getElementById(
        "enderecoUnidade"
        ).innerText =
        "Rua Domingos Agostim"

        document.getElementById(
        "infoUnidade"
        ).innerText =
        "09h às 16h";

        document.getElementById(
        "imagemUnidade"
        ).src =
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400";

    }

    if(unidade === "Universidade Paulista"){

        document.getElementById(
        "enderecoUnidade"
        ).innerText =
        "Av. Paulista, 1000";

        document.getElementById(
        "infoUnidade"
        ).innerText =
        "08h às 18h";
        
        document.getElementById(
        "imagemUnidade"
        ).src =
        "https://images.unsplash.com/photo-1562774053-701939374585?w=400";
    }

}

let horarioSelecionado = "080:00";


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
    // =====================
// SALVAR HISTÓRICO
// =====================

    const historico =

    JSON.parse(
    localStorage.getItem(
    "historicoDoacoes"
    )
    ) || [];

    historico.push({

    unidade:
    localStorage.getItem(
    "unidade"
    ),

    data:
    dataBrasil,

    horario:
    horarioSelecionado,

    status:
    "Confirmado"

    });

    localStorage.setItem(

    "historicoDoacoes",

    JSON.stringify(
    historico
    )

);

    window.location.href =
    "../confirmacao/index.html";

}