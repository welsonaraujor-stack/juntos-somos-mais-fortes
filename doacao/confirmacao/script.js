// =====================================
// CARREGAR DADOS DO AGENDAMENTO
// =====================================

const unidade =
localStorage.getItem(
"unidade"
);

const data =
localStorage.getItem(
"dataDoacao"
);

const horario =
localStorage.getItem(
"horarioDoacao"
);


// =====================================
// EXIBIR DADOS
// =====================================

if(unidade){

    document.getElementById(
    "unidadeEscolhida"
    ).innerText =
    unidade;

}

if(data){

    document.getElementById(
    "dataEscolhida"
    ).innerText =
    data;

}

if(horario){

    document.getElementById(
    "horarioEscolhido"
    ).innerText =
    horario;

}


// =====================================
// ADICIONAR À AGENDA
// =====================================

function adicionarAgenda(){

    alert(
    "Funcionalidade em desenvolvimento."
    );

}


// =====================================
// VOLTAR AO INÍCIO
// =====================================

function voltarInicio(){

    window.location.href =
    "../../autenticacao/login/index.html";

}
const agendamento = {

    nome: localStorage.getItem("nome"),

    unidade: localStorage.getItem("unidade"),

    data: localStorage.getItem("dataDoacao"),

    horario: localStorage.getItem("horarioDoacao")

};

localStorage.setItem(
    "agendamentoAtual",
    JSON.stringify(agendamento)
);