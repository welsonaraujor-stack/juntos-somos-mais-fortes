// ============================================================
// CARTEIRA DO DOADOR — script.js
// ============================================================

// ------------------------------------------------------------
// 1. PREENCHER NOME E FOTO DO USUÁRIO
// ------------------------------------------------------------
const nome    = localStorage.getItem('nome');
const usuario = localStorage.getItem('usuario');
const nomeEl  = document.querySelector('.dados h2');

if (nomeEl) {
    nomeEl.textContent = nome || usuario || 'Doador';
}

const fotoSalva = localStorage.getItem('fotoPerfil');
const fotoEl    = document.querySelector('.perfil img');

if (fotoSalva && fotoEl) {
    fotoEl.src = fotoSalva;
}

// ------------------------------------------------------------
// 2. PREENCHER TIPO SANGUÍNEO
// ------------------------------------------------------------
const tipoSanguineo = localStorage.getItem('tipoSanguineo');
const tipoEl        = document.querySelector('.sangue span');

if (tipoSanguineo && tipoEl) {
    tipoEl.textContent = tipoSanguineo;
}

// ------------------------------------------------------------
// 3. PREENCHER DATAS DO AGENDAMENTO
// ------------------------------------------------------------
const agendamentoAtual = JSON.parse(
    localStorage.getItem('agendamentoAtual') || '{}'
);

if (agendamentoAtual.data) {
    const d = new Date(agendamentoAtual.data + 'T00:00:00');
    const formatada = d.toLocaleDateString('pt-BR');

    // Calcula próxima doação (90 dias depois)
    const proxima = new Date(d);
    proxima.setDate(proxima.getDate() + 90);
    const proximaFormatada = proxima.toLocaleDateString('pt-BR');

    const datas = document.querySelectorAll('.datas strong');
    if (datas[0]) datas[0].textContent = formatada;
    if (datas[1]) datas[1].textContent = proximaFormatada;
}

// ------------------------------------------------------------
// 4. HISTÓRICO
// ------------------------------------------------------------
document.querySelector('.historico').addEventListener('click', () => {
    window.location.href = '../../historico/index.html';
});

// ------------------------------------------------------------
// 5. ATALHOS
// ------------------------------------------------------------
document.getElementById('cardConquistas').onclick = () => {
    window.location.href = '../../conquistas/index.html';
};

document.getElementById('cardCertificados').onclick = () => {
    window.location.href = '../../certificados/index.html';
};

document.getElementById('cardImpacto').onclick = () => {
    window.location.href = '../impacto-social/index.html';
};

document.getElementById('cardBeneficios').onclick = () => {
    window.location.href = '../../beneficio/index.html';
};

// ------------------------------------------------------------
// 6. CAMPANHAS — ir para o mapa ao clicar
// ------------------------------------------------------------
document.querySelectorAll('.campanha-card').forEach(card => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', () => {
        window.location.href = '../../doacao/mapa-unidades/index.html';
    });
});

// ------------------------------------------------------------
// 7. COPIAR CÓDIGO DE CONVITE
// ------------------------------------------------------------
document.querySelector('.btn-copiar').addEventListener('click', () => {
    const codigo = document.querySelector('.codigo').textContent.trim();
    navigator.clipboard.writeText(codigo).then(() => {
        const btn = document.querySelector('.btn-copiar');
        btn.innerHTML = '<i class="fa-solid fa-check"></i> Copiado!';
        setTimeout(() => {
            btn.innerHTML = '<i class="fa-solid fa-copy"></i> Copiar';
        }, 2000);
    });
});

// ------------------------------------------------------------
// 8. COMPARTILHAR
// ------------------------------------------------------------
const botoesShare = document.querySelectorAll('.btn-share');

if (botoesShare[0]) {
    botoesShare[0].addEventListener('click', () => {
        const texto = 'Junte-se a mim no Juntos Somos Mais Fortes e doe sangue! Use meu código JUNTOS2026.';
        window.open(`https://wa.me/?text=${encodeURIComponent(texto)}`, '_blank');
    });
}

if (botoesShare[1]) {
    botoesShare[1].addEventListener('click', () => {
        if (navigator.share) {
            navigator.share({
                title: 'Juntos Somos Mais Fortes',
                text: 'Use meu código JUNTOS2026 e comece a salvar vidas!',
                url: window.location.href
            });
        } else {
            alert('Compartilhamento disponível na versão do app nativo.');
        }
    });
}

// ------------------------------------------------------------
// 9. MENU INFERIOR
// ------------------------------------------------------------
document.getElementById('btnInicio').onclick = () => {
    window.location.href = '../../doador/carteira-doador/index.html';
};

document.getElementById('btnAgendar').onclick = () => {
    window.location.href = '../../doacao/mapa-unidades/index.html';
};

document.getElementById('btnDoacoes').onclick = () => {
    window.location.href = '../../historico/index.html';
};

document.getElementById('btnImpacto').onclick = () => {
    window.location.href = '../impacto-social/index.html';
};

document.getElementById('btnBeneficios').onclick = () => {
    window.location.href = '../../beneficio/index.html';
};