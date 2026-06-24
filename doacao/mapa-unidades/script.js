// =====================================
// VOLTAR PARA RESULTADO APTO
// =====================================

function inicio(){

    window.location.href =
    "../../triagem/resultado-apto/index.html";

}


// =====================================
// SELECIONAR UNIDADE
// =====================================

function selecionarUnidade(unidade){

    localStorage.setItem(
        "unidade",
        unidade
    );

    window.location.href =
    "../agendamento/index.html";

}


// =====================================
// MENU AGENDAR
// =====================================

function agendar(){

    const unidade =
    localStorage.getItem(
    "unidade"
    );

    if(!unidade){

        alert(
        "Selecione uma unidade primeiro."
        );

        return;

    }

    window.location.href =
    "../agendamento/index.html";

}