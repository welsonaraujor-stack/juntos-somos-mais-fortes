// Seleciona horário
function selecionarHorario(btn) {
    document.querySelectorAll('.horario').forEach(b => b.classList.remove('ativo'));
    btn.classList.add('ativo');
    document.getElementById('resumoHorario').textContent = btn.textContent;
}

// Atualiza resumo ao mudar data
document.getElementById('data').addEventListener('change', function () {
    const data = new Date(this.value + 'T00:00:00');
    const formatada = data.toLocaleDateString('pt-BR', {
        weekday: 'long', day: '2-digit', month: 'long'
    });
    document.getElementById('resumoData').textContent = formatada;
});

// Confirmar agendamento
function confirmarAgendamento() {
    const data = document.getElementById('data').value;
    const horario = document.querySelector('.horario.ativo')?.textContent;

    if (!data) {
        alert('Por favor, escolha uma data.');
        return;
    }

    localStorage.setItem('agendamentoData', data);
    localStorage.setItem('agendamentoHorario', horario);
    localStorage.setItem('agendamentoLocal', document.getElementById('nomeUnidade').textContent);

    window.location.href = 'confirmacao.html';
}