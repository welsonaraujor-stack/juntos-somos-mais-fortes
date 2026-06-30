// ============================================================
// MAPA DE UNIDADES — script.js
// ============================================================

// ------------------------------------------------------------
// 1. SELECIONAR UNIDADE (clique no card inteiro)
// ------------------------------------------------------------
function selecionarUnidade(nome) {
    const imagens = {
        'Parque Ibirapuera':     'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400',
        'Shopping Tatuapé':      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400',
        'Universidade Paulista': 'https://images.unsplash.com/photo-1562774053-701939374585?w=400'
    };

    const enderecos = {
        'Parque Ibirapuera':     'Av. Pedro Álvares Cabral',
        'Shopping Tatuapé':      'Rua Domingos Agostim',
        'Universidade Paulista': 'Av. Paulista, 1000'
    };

    localStorage.setItem('unidadeNome',     nome);
    localStorage.setItem('unidadeEndereco', enderecos[nome] || '');
    localStorage.setItem('unidadeImagem',   imagens[nome]   || '');

    window.location.href = '../agendamento/index.html';
}

function agendar(nome) {
    selecionarUnidade(nome);
}

// ------------------------------------------------------------
// 3. BOTÃO INÍCIO
// ------------------------------------------------------------
function inicio() {
    window.location.href = '../../perfis/pessoa/index.html';
}

// ------------------------------------------------------------
// 4. FILTROS RÁPIDOS
// ------------------------------------------------------------
document.querySelectorAll('.filtro-tag').forEach(btn => {
    btn.addEventListener('click', function () {
        document.querySelectorAll('.filtro-tag').forEach(b => b.classList.remove('ativo'));
        this.classList.add('ativo');
    });
});
// ------------------------------------------------------------
// 5. NAVEGAÇÃO DO MENU INFERIOR
// ------------------------------------------------------------
const botoesNav = document.querySelectorAll('nav button');

botoesNav[0].onclick = () => {
    window.location.href = '../../perfis/pessoa/index.html';
};

botoesNav[1].onclick = () => {
    // já está na tela de mapa — não faz nada
};

botoesNav[2].onclick = () => {
    window.location.href = '../../historico/index.html';
};

botoesNav[3].onclick = () => {
    window.location.href = '../../impacto/index.html';
};

botoesNav[4].onclick = () => {
    window.location.href = '../../beneficio/index.html';
};