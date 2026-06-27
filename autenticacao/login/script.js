// Mostrar / ocultar senha
const senhaInput = document.getElementById('senha');
const olhoBtn = document.getElementById('olho');
const olhoIcone = document.getElementById('olhoIcone');

olhoBtn.addEventListener('click', () => {
    if (senhaInput.type === 'password') {
        senhaInput.type = 'text';
        olhoIcone.className = 'fa-regular fa-eye-slash';
    } else {
        senhaInput.type = 'password';
        olhoIcone.className = 'fa-regular fa-eye';
    }
});

// Botão entrar
document.getElementById('entrar').addEventListener('click', () => {
    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value;

    if (!email) {
        destacarErro('email', 'Digite seu e-mail ou CPF.');
        return;
    }

    if (!senha) {
        destacarErro('senha', 'Digite sua senha.');
        return;
    }

    localStorage.setItem('usuario', email);
    window.location.href = '../pre-cadastro/index.html';
});

// Borda vermelha no campo com erro
function destacarErro(id, mensagem) {
    const input = document.getElementById(id);
    input.style.borderColor = '#d60017';
    input.focus();
    input.addEventListener('input', () => {
        input.style.borderColor = '';
    }, { once: true });
    alert(mensagem);
}

// Redes sociais
document.querySelector('.google').addEventListener('click', () => {
    alert('Integração com Google será implementada futuramente.');
});
document.querySelector('.facebook').addEventListener('click', () => {
    alert('Integração com Facebook será implementada futuramente.');
});
document.querySelector('.apple').addEventListener('click', () => {
    alert('Integração com Apple será implementada futuramente.');
});