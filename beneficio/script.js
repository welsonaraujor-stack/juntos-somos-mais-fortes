// ===========================
// DADOS DO USUÁRIO
// ===========================

// Depois essas informações virão do banco.

localStorage.setItem("nomeUsuario","Welson");
localStorage.setItem("totalDoacoes","18");

// ===========================
// CARREGAR DADOS
// ===========================

const nome =
localStorage.getItem("nomeUsuario") || "Doador";

const totalDoacoes =
Number(localStorage.getItem("totalDoacoes")) || 0;

// ===========================
// SAUDAÇÃO
// ===========================

const hora = new Date().getHours();

let saudacao = "";

if(hora >= 5 && hora < 12){

    saudacao = "Bom dia";

}else if(hora >= 12 && hora < 18){

    saudacao = "Boa tarde";

}else{

    saudacao = "Boa noite";

}

document.getElementById("saudacao").innerHTML =
`${saudacao}, ${nome} 👋`;

// ===========================
// CONQUISTAS
// ===========================

let titulo = "";
let mensagem = "";

if(totalDoacoes == 0){

    titulo = "🌱 Bem-vindo";

    mensagem =
    "Sua primeira doação pode salvar até quatro vidas.";

}

else if(totalDoacoes < 5){

    titulo = "❤️ Primeiros Passos";

    mensagem =
    "Obrigado por começar essa corrente de solidariedade.";

}

else if(totalDoacoes < 10){

    titulo = "🩸 Doador Solidário";

    mensagem =
    "Você já ajudou muitas pessoas. Continue fazendo a diferença!";

}

else if(totalDoacoes < 20){

    titulo = "🏅 Guardião da Vida";

    mensagem =
    "Seu compromisso inspira outras pessoas a doar sangue.";

}

else if(totalDoacoes < 50){

    titulo = "👑 Herói da Comunidade";

    mensagem =
    "Você faz parte de um grupo que transforma vidas todos os dias.";

}

else{

    titulo = "💎 Lenda da Solidariedade";

    mensagem =
    "Obrigado por dedicar parte da sua vida para salvar tantas outras.";

}

document.getElementById("cargo").innerHTML = titulo;

document.getElementById("mensagem").innerHTML = mensagem;

const categorias = document.querySelectorAll(".categoria");

categorias.forEach(cat => {

cat.addEventListener("click", () => {

categorias.forEach(item =>
item.classList.remove("ativa")
);

cat.classList.add("ativa");

});

});
document.getElementById("btnInicio").onclick = () => {
    window.location.href = "../../doador/carteira-doador/index.html";
};

document.getElementById("btnAgendar").onclick = () => {
    window.location.href = "../../doacao/agendamento/index.html";
};

document.getElementById("btnDoacoes").onclick = () => {
    window.location.href = "../../doador/impacto-social/index.html";
};

document.getElementById("btnConquistas").onclick = () => {
    window.location.href = "../conquistas/index.html";
};

document.getElementById("btnPerfil").onclick = () => {
    window.location.href = "../../doador/carteira-doador/index.html";
};