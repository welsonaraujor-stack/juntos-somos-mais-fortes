function selecionar(opcao) {
    // Remove selecionado de todos
    document.querySelectorAll('.opcao').forEach(el => {
        el.classList.remove('selecionado');
        el.querySelector('.check-icone').className = 'fa-regular fa-circle check-icone';
    });

    // Marca o selecionado
    const el = document.getElementById(opcao);
    el.classList.add('selecionado');
    el.querySelector('.check-icone').className = 'fa-solid fa-circle-check check-icone';

    // Mostra toggle só se escolheu sim
    const box = document.getElementById('notificarBox');
    if (opcao === 'sim') {
        box.classList.add('visivel');
    } else {
        box.classList.remove('visivel');
    }
}

function continuar() {
    const selecionado = document.querySelector('.opcao.selecionado');
    if (!selecionado) {
        alert('Por favor, selecione uma opção.');
        return;
    }
    const notificar = document.getElementById('toggleNotificar').checked;
    // salva no localStorage
    localStorage.setItem('doacaoOrgaos', selecionado.id);
    localStorage.setItem('notificarContatos', notificar);
    window.location.href = 'contato-emergencia.html';
}