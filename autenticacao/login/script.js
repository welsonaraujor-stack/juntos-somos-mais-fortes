// ===== Mostrar/Ocultar Senha =====

const senha =
document.getElementById("senha");

const olho =
document.getElementById("olho");

olho.addEventListener("click", () => {

    if (senha.type === "password") {

        senha.type = "text";

        olho.textContent = "🙈";

    } else {

        senha.type = "password";

        olho.textContent = "👁️";
    }

});


// ===== Validação Login =====

const botaoEntrar =
document.getElementById("entrar");

botaoEntrar.addEventListener("click", () => {

    const email =
    document.getElementById("email").value;

    const senhaDigitada =
    document.getElementById("senha").value;

    if (email === "") {

        alert("Digite seu e-mail ou CPF.");

        return;
    }

    if (senhaDigitada === "") {

        alert("Digite sua senha.");

        return;
    }

    
    //== alert("Login realizado com sucesso!");== (foi atualizado para seguir a pagina quem é você 21/06/2026)==

    // Login aprovado
    window.location.href =
    "../autenticacao/quem-e-voce/index.html";

});


// ===== Botão Google =====

const google =
document.querySelector(".google");

google.addEventListener("click", () => {

    alert(
        "Integração com Google será implementada futuramente."
    );

});