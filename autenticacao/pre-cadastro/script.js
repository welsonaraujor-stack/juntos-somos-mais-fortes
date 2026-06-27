// Recupera e-mail do login se existir
const usuario = localStorage.getItem('usuario');
const campoEmail = document.getElementById('email');

if (usuario && campoEmail) {
    campoEmail.value = usuario;
    campoEmail.readOnly = true;
    campoEmail.style.color = '#aaa';
}

// Botão continuar
document.getElementById('continuar').addEventListener('click', () => {
    const nome      = document.getElementById('nome').value.trim();
    const cpf       = document.getElementById('cpf').value.trim();
    const nascimento= document.getElementById('nascimento').value;
    const telefone  = document.getElementById('telefone').value.trim();
    const cidade    = document.getElementById('cidade').value.trim();

    if (!nome) {
        alert('Por favor, digite seu nome completo.');
        return;
    }

    if (!cpf) {
        alert('Por favor, digite seu CPF.');
        return;
    }

    if (!nascimento) {
        alert('Por favor, informe sua data de nascimento.');
        return;
    }

    if (!telefone) {
        alert('Por favor, digite seu telefone.');
        return;
    }

    localStorage.setItem('nome', nome);
    localStorage.setItem('cpf', cpf);
    localStorage.setItem('nascimento', nascimento);
    localStorage.setItem('telefone', telefone);
    localStorage.setItem('cidade', cidade);

    window.location.href = '../quem-e-voce/index.html';
});
