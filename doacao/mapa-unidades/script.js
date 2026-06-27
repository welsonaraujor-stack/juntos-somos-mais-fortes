function selecionarUnidade(nome) {
    localStorage.setItem('unidadeSelecionada', nome);
    window.location.href = 'agendamento.html';
}

function agendar(nome) {
    localStorage.setItem('unidadeSelecionada', nome);
    window.location.href = 'agendamento.html';
}

function inicio() {
    window.location.href = 'index.html';
}

// Filtros rápidos
document.querySelectorAll('.filtro-tag').forEach(btn => {
    btn.addEventListener('click', function () {
        document.querySelectorAll('.filtro-tag').forEach(b => b.classList.remove('ativo'));
        this.classList.add('ativo');
    });
});