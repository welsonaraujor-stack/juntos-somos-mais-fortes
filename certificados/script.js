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