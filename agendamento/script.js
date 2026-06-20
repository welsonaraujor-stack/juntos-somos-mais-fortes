const horarios =
document.querySelectorAll(".horarios button");

horarios.forEach(botao => {

    botao.addEventListener("click", () => {

        horarios.forEach(b => {

            b.classList.remove("ativo");

        });

        botao.classList.add("ativo");

    });

});

function confirmarAgendamento(){

    alert(
    "Agendamento realizado com sucesso!"
    );

}