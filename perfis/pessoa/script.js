// Recupera dados do cadastro
const campos = {
    nomeCompleto:   'nome',
    cpfUsuario:     'cpf',
    dataNascimento: 'nascimento',
    telefoneUsuario:'telefone',
    cidadeUsuario:  'cidade',
    emailUsuario:   'usuario'
};

Object.entries(campos).forEach(([id, key]) => {
    const valor = localStorage.getItem(key);
    const el = document.getElementById(id);
    if (valor && el) el.value = valor;
});

// Nome no perfil
const nome = localStorage.getItem('nome');
const usuario = localStorage.getItem('usuario');
document.getElementById('nomeUsuario').innerText = nome || usuario || 'Usuário';

// Botão triagem
document.getElementById('btnTriagem').addEventListener('click', () => {
    window.location.href = '../../triagem/pre-triagem/pergunta1.html';
});