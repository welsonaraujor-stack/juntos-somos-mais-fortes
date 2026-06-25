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