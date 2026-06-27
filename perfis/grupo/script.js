// Calcula impacto estimado em tempo real
document.getElementById('participantes').addEventListener('input', function () {
    const qtd = parseInt(this.value) || 0;

    // Estimativa: 70% dos participantes doam
    const doadores = Math.round(qtd * 0.7);
    const vidas = doadores * 4;
    const ml = doadores * 450;

    document.getElementById('estimativaDoadores').textContent = doadores || '—';
    document.getElementById('estimativaVidas').textContent = vidas || '—';
    document.getElementById('estimativaMl').textContent = ml ? ml.toLocaleString('pt-BR') : '—';
});

// Botão solicitar
document.getElementById('btnGrupo').addEventListener('click', () => {
    const nome = document.getElementById('nomeGrupo').value.trim();
    const responsavel = document.getElementById('nomeResponsavel').value.trim();
    const telefone = document.getElementById('telefone').value.trim();
    const email = document.getElementById('email').value.trim();
    const participantes = document.getElementById('participantes').value;
    const data = document.getElementById('dataDesejada').value;
    const local = document.getElementById('local').value.trim();

    if (!nome) { alert('Por favor, informe o nome do grupo.'); return; }
    if (!responsavel) { alert('Por favor, informe o nome do responsável.'); return; }
    if (!telefone) { alert('Por favor, informe o telefone.'); return; }
    if (!email) { alert('Por favor, informe o e-mail.'); return; }
    if (!participantes) { alert('Por favor, informe o número de participantes.'); return; }
    if (!data) { alert('Por favor, escolha uma data desejada.'); return; }
    if (!local) { alert('Por favor, informe o endereço do local.'); return; }

    localStorage.setItem('solicitacaoGrupo', JSON.stringify({
        nome, responsavel, telefone, email, participantes, data, local
    }));

    alert('Solicitação enviada! Nossa equipe entrará em contato em até 48 horas.');
    window.location.href = '../../autenticacao/quem-e-voce/index.html';
});