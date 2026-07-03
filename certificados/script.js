const tabs = document.querySelectorAll(".tabs button");

tabs.forEach(tab => {

    tab.addEventListener("click", () => {

        tabs.forEach(btn =>
            btn.classList.remove("ativo")
        );

        tab.classList.add("ativo");

    });

});

const compartilhar = document.querySelectorAll(".share");

compartilhar.forEach(btn => {

    btn.addEventListener("click", () => {

        alert("Compartilhar certificado");

    });

});
document
.getElementById("btnHistorico")
.addEventListener("click", () => {

    window.location.href =
    "../historico/index.html";

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

document.getElementById("btnImpacto").onclick = () => {
    window.location.href = "../../conquistas/index.html";
};

document.getElementById("btnBeneficios").onclick = () => {
    window.location.href = "../../beneficio/index.html";
};