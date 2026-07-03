// ============================================================
// BENEFÍCIOS — script.js
// ============================================================

const BENEFICIOS = [
    // SAÚDE
    { id: 'rapido-farma',      categoria: 'saude',       destaque: true,  nome: 'Rápido Farma',       desconto: '10%',     tipo: 'OFF',             cor: '#e60000', cupons: 8,  total: 10, nivel: null,              campanha: null,               descricao: 'Ganhe 10% de desconto em todos os medicamentos nas unidades parceiras.',         comoResgatar: ['Mostre sua carteira digital do doador', 'Informe o código no caixa', 'Desconto aplicado automaticamente'],              cupom: 'JSMF10',      validade: '31/12/2026' },
    { id: 'academia-saude',    categoria: 'saude',       destaque: true,  nome: 'Academia Saúde',     desconto: '20%',     tipo: 'OFF',             cor: '#27ae60', cupons: 5,  total: 20, nivel: null,              campanha: null,               descricao: '20% de desconto na mensalidade em todas as unidades parceiras.',                 comoResgatar: ['Apresente sua carteira na recepção', 'Informe o código ao atendente', 'Desconto na próxima mensalidade'],             cupom: 'JSMFFIT20',   validade: '31/12/2026' },
    { id: 'oticas-visao',      categoria: 'saude',       destaque: false, nome: 'Óticas Visão',       desconto: '15%',     tipo: 'OFF',             cor: '#2980b9', cupons: 12, total: 15, nivel: null,              campanha: null,               descricao: '15% de desconto em óculos de grau e solares em lojas parceiras.',               comoResgatar: ['Vá a uma unidade parceira', 'Mostre sua carteira do doador', 'Informe o código no caixa'],                            cupom: 'JSMFVIS15',   validade: '30/06/2026' },
    { id: 'clinica-vidabem',   categoria: 'saude',       destaque: false, nome: 'Clínica VidaBem',    desconto: '1',       tipo: 'CONSULTA GRÁTIS', cor: '#8e44ad', cupons: 3,  total: 10, nivel: 'Doador Frequente', campanha: null,               descricao: '1 consulta gratuita com clínico geral nas clínicas VidaBem.',                    comoResgatar: ['Agende pelo telefone da clínica', 'Informe o código no agendamento', 'Leve sua carteira do doador'],                  cupom: 'JSMFMED',     validade: '31/03/2026' },
    { id: 'nutri-mais',        categoria: 'saude',       destaque: false, nome: 'Nutri+',             desconto: '30%',     tipo: 'OFF',             cor: '#e67e22', cupons: 7,  total: 10, nivel: null,              campanha: null,               descricao: '30% de desconto em consulta nutricional presencial ou online.',                  comoResgatar: ['Acesse o site da Nutri+', 'Insira o cupom no checkout', 'Agende sua consulta'],                                      cupom: 'JSMFNUT30',   validade: '31/12/2026' },
    { id: 'dental-care',       categoria: 'saude',       destaque: false, nome: 'Dental Care',        desconto: '1',       tipo: 'LIMPEZA GRÁTIS',  cor: '#16a085', cupons: 2,  total: 5,  nivel: 'Doador Frequente', campanha: null,               descricao: 'Uma limpeza dentária gratuita por semestre nas clínicas parceiras.',             comoResgatar: ['Ligue para a clínica mais próxima', 'Informe o código no agendamento', 'Leve sua carteira do doador'],                cupom: 'JSMFDENT',    validade: '31/12/2026' },
    // EDUCAÇÃO
    { id: 'estuda-mais',       categoria: 'educacao',    destaque: true,  nome: 'Estuda Mais',        desconto: '25%',     tipo: 'OFF',             cor: '#2980b9', cupons: 15, total: 20, nivel: null,              campanha: null,               descricao: '25% de desconto em mais de 500 cursos online na plataforma.',                    comoResgatar: ['Acesse o site Estuda Mais', 'Escolha seu curso', 'Insira o cupom no checkout'],                                      cupom: 'JSMFEDU25',   validade: '31/12/2026' },
    { id: 'lingua-facil',      categoria: 'educacao',    destaque: false, nome: 'LinguaFácil',        desconto: '1 MÊS',   tipo: 'GRÁTIS',          cor: '#27ae60', cupons: 9,  total: 15, nivel: null,              campanha: null,               descricao: '1 mês grátis de curso de inglês ou espanhol com professores nativos.',           comoResgatar: ['Baixe o app LinguaFácil', 'Crie sua conta', 'Insira o cupom na ativação'],                                           cupom: 'JSMFLING',    validade: '30/06/2026' },
    { id: 'tech-learn',        categoria: 'educacao',    destaque: false, nome: 'TechLearn',          desconto: '40%',     tipo: 'OFF',             cor: '#8e44ad', cupons: 6,  total: 10, nivel: 'Doador Frequente', campanha: 'Junho Vermelho',    descricao: '40% de desconto em cursos de tecnologia: programação, design e dados.',         comoResgatar: ['Acesse techlearn.com.br', 'Escolha seu curso', 'Aplique o cupom no carrinho'],                                       cupom: 'JSMFTECH40',  validade: '31/12/2026' },
    { id: 'livraria-saber',    categoria: 'educacao',    destaque: false, nome: 'Livraria Saber',     desconto: '20%',     tipo: 'OFF',             cor: '#e67e22', cupons: 10, total: 10, nivel: null,              campanha: null,               descricao: '20% de desconto em todos os livros físicos e digitais.',                        comoResgatar: ['Acesse o site ou loja física', 'Apresente sua carteira do doador', 'Desconto aplicado pelo atendente'],              cupom: 'JSMFLIVRO',   validade: '31/12/2026' },
    { id: 'curso-oficial',     categoria: 'educacao',    destaque: false, nome: 'CursoOficial',       desconto: '50%',     tipo: 'OFF',             cor: '#e60000', cupons: 4,  total: 10, nivel: 'Doador Frequente', campanha: null,               descricao: '50% de desconto em certificações profissionais reconhecidas pelo MEC.',          comoResgatar: ['Acesse cursooficial.com.br', 'Escolha sua certificação', 'Insira o cupom e finalize'],                               cupom: 'JSMFCERT',    validade: '28/02/2026' },
    { id: 'colegioprep',       categoria: 'educacao',    destaque: false, nome: 'ColégioPrep',        desconto: '1',       tipo: 'SIMULADO GRÁTIS', cor: '#16a085', cupons: 8,  total: 20, nivel: null,              campanha: null,               descricao: 'Simulado completo ENEM gratuito com gabarito e análise de desempenho.',          comoResgatar: ['Acesse colegio-prep.com.br', 'Faça seu cadastro', 'Insira o cupom na área do aluno'],                                cupom: 'JSMFENEM',    validade: '30/11/2026' },
    // CULTURA
    { id: 'ingresso-solidario',categoria: 'cultura',     destaque: true,  nome: 'Ingresso Solidário', desconto: '1',       tipo: 'GRÁTIS/MÊS',      cor: '#e60000', cupons: 7,  total: 30, nivel: null,              campanha: 'Semana do Doador', descricao: '1 ingresso gratuito por mês em cinemas e teatros parceiros.',                    comoResgatar: ['Acesse o app Ingresso Solidário', 'Escolha o filme ou espetáculo', 'Resgate com sua carteira do doador'],            cupom: 'JSMFCINE',    validade: '31/12/2026' },
    { id: 'teatro-vivo',       categoria: 'cultura',     destaque: false, nome: 'Teatro Vivo',        desconto: '30%',     tipo: 'OFF',             cor: '#8e44ad', cupons: 5,  total: 10, nivel: null,              campanha: null,               descricao: '30% de desconto em peças teatrais nos teatros parceiros.',                       comoResgatar: ['Acesse o site do Teatro Vivo', 'Escolha a peça desejada', 'Insira o cupom no checkout'],                             cupom: 'JSMFTEAT',    validade: '30/06/2026' },
    { id: 'museu-livre',       categoria: 'cultura',     destaque: false, nome: 'MuseuLivre',         desconto: '1',       tipo: 'ENTRADA GRÁTIS',  cor: '#27ae60', cupons: 20, total: 30, nivel: null,              campanha: null,               descricao: 'Entrada gratuita em museus e centros culturais parceiros.',                      comoResgatar: ['Vá ao museu parceiro', 'Apresente sua carteira do doador', 'Entrada liberada na bilheteria'],                        cupom: 'JSMFMUS',     validade: '31/12/2026' },
    { id: 'streamflix',        categoria: 'cultura',     destaque: false, nome: 'StreamFlix',         desconto: '2 MESES', tipo: 'GRÁTIS',          cor: '#e60000', cupons: 3,  total: 15, nivel: 'Doador Frequente', campanha: null,               descricao: '2 meses grátis de streaming com filmes, séries e documentários.',               comoResgatar: ['Acesse streamflix.com.br', 'Crie sua conta', 'Insira o cupom em assinatura'],                                        cupom: 'JSMFSTREAM',  validade: '28/02/2026' },
    { id: 'show-cultural',     categoria: 'cultura',     destaque: false, nome: 'Show Cultural',      desconto: '20%',     tipo: 'OFF',             cor: '#e67e22', cupons: 8,  total: 10, nivel: null,              campanha: 'Junho Vermelho',    descricao: '20% de desconto em shows, festivais e eventos culturais.',                       comoResgatar: ['Acesse o site do evento', 'Escolha seus ingressos', 'Insira o cupom antes de finalizar'],                            cupom: 'JSMFSHOW',    validade: '31/12/2026' },
    { id: 'exposicao-arte',    categoria: 'cultura',     destaque: false, nome: 'Exposição Arte',     desconto: 'VIP',     tipo: 'ACESSO GRÁTIS',   cor: '#2980b9', cupons: 10, total: 10, nivel: null,              campanha: null,               descricao: 'Acesso VIP gratuito em exposições de arte e galerias parceiras.',               comoResgatar: ['Verifique as exposições no app', 'Reserve seu acesso online', 'Apresente a carteira do doador na entrada'],          cupom: 'JSMFARTE',    validade: '30/06/2026' },
    // SERVIÇOS
    { id: 'lavajato-express',  categoria: 'servicos',    destaque: true,  nome: 'LavaJato Express',   desconto: '1',       tipo: 'LAVAGEM GRÁTIS',  cor: '#2980b9', cupons: 6,  total: 10, nivel: null,              campanha: null,               descricao: 'Uma lavagem completa gratuita por mês nas unidades parceiras.',                  comoResgatar: ['Vá a uma unidade LavaJato Express', 'Mostre sua carteira do doador', 'Lavagem agendada sem custo'],                  cupom: 'JSMFCARRO',   validade: '31/12/2026' },
    { id: 'barber-king',       categoria: 'servicos',    destaque: false, nome: 'BarberKing',         desconto: '1',       tipo: 'CORTE GRÁTIS',    cor: '#2c3e50', cupons: 4,  total: 8,  nivel: null,              campanha: null,               descricao: '1 corte de cabelo gratuito por mês nas barbearias parceiras.',                   comoResgatar: ['Agende pelo WhatsApp da barbearia', 'Informe o código no agendamento', 'Compareça no horário marcado'],              cupom: 'JSMFBARBR',   validade: '31/12/2026' },
    { id: 'pet-amigo',         categoria: 'servicos',    destaque: false, nome: 'PetAmigo',           desconto: '20%',     tipo: 'OFF',             cor: '#e67e22', cupons: 9,  total: 10, nivel: null,              campanha: null,               descricao: '20% de desconto em banho e tosa para seu pet nos pet shops parceiros.',          comoResgatar: ['Agende o banho e tosa pelo app', 'Insira o cupom no agendamento', 'Leve seu pet e aproveite'],                       cupom: 'JSMFPET',     validade: '31/12/2026' },
    { id: 'deliver-facil',     categoria: 'servicos',    destaque: false, nome: 'DeliverFácil',       desconto: '30 DIAS', tipo: 'FRETE GRÁTIS',    cor: '#27ae60', cupons: 12, total: 20, nivel: null,              campanha: null,               descricao: 'Frete grátis em todos os pedidos pelo app por 30 dias corridos.',               comoResgatar: ['Baixe o app DeliverFácil', 'Crie sua conta', 'Insira o cupom em configurações'],                                     cupom: 'JSMFFRETE',   validade: '31/12/2026' },
    { id: 'foto-memoria',      categoria: 'servicos',    destaque: false, nome: 'FotoMemória',        desconto: '30%',     tipo: 'OFF',             cor: '#8e44ad', cupons: 3,  total: 5,  nivel: 'Doador Frequente', campanha: null,               descricao: '30% de desconto em ensaio fotográfico profissional com entrega digital.',        comoResgatar: ['Acesse fotomemoria.com.br', 'Escolha o pacote de ensaio', 'Insira o cupom no carrinho'],                             cupom: 'JSMFFOTO',    validade: '30/06/2026' },
    { id: 'limpeza-pro',       categoria: 'servicos',    destaque: false, nome: 'LimpezaPro',         desconto: '1',       tipo: 'LIMPEZA GRÁTIS',  cor: '#16a085', cupons: 2,  total: 5,  nivel: null,              campanha: null,               descricao: '1 limpeza residencial gratuita de até 3 cômodos nas primeiras 4 horas.',        comoResgatar: ['Acesse limpezapro.com.br', 'Agende seu horário online', 'Insira o cupom na confirmação'],                            cupom: 'JSMFLIMP',    validade: '31/03/2026' },
    // ALIMENTAÇÃO
    { id: 'restaurante-sabor', categoria: 'alimentacao', destaque: true,  nome: 'RestauranteSabor',   desconto: '15%',     tipo: 'OFF',             cor: '#e60000', cupons: 8,  total: 10, nivel: null,              campanha: null,               descricao: '15% de desconto no almoço executivo de segunda a sexta.',                        comoResgatar: ['Vá a um restaurante parceiro', 'Peça seu almoço normalmente', 'Mostre sua carteira do doador na conta'],             cupom: 'JSMFSABOR',   validade: '31/12/2026' },
    { id: 'cafe-bom',          categoria: 'alimentacao', destaque: false, nome: 'CaféBom',            desconto: '1',       tipo: 'CAFÉ GRÁTIS',     cor: '#795548', cupons: 5,  total: 10, nivel: null,              campanha: null,               descricao: '1 café da manhã completo gratuito por semana nos cafés parceiros.',              comoResgatar: ['Vá a um café parceiro', 'Escolha o café da manhã', 'Mostre sua carteira do doador'],                                 cupom: 'JSMFCAFE',    validade: '31/12/2026' },
    { id: 'pizza-amiga',       categoria: 'alimentacao', destaque: false, nome: 'PizzaAmiga',         desconto: '1',       tipo: 'PIZZA GRÁTIS',    cor: '#e67e22', cupons: 7,  total: 10, nivel: null,              campanha: null,               descricao: '1 pizza grátis na compra de outra de igual ou maior valor.',                     comoResgatar: ['Peça pelo app ou ligue para a pizzaria', 'Informe o cupom no pedido', 'Válido para delivery e salão'],               cupom: 'JSMFPIZZA',   validade: '31/12/2026' },
    { id: 'suco-verde',        categoria: 'alimentacao', destaque: false, nome: 'SucoVerde',          desconto: '20%',     tipo: 'OFF',             cor: '#27ae60', cupons: 10, total: 15, nivel: null,              campanha: null,               descricao: '20% de desconto em sucos naturais e vitaminas nas lojas parceiras.',             comoResgatar: ['Vá a uma loja SucoVerde parceira', 'Faça seu pedido', 'Informe o cupom no caixa'],                                   cupom: 'JSMFSUCO',    validade: '31/12/2026' },
    { id: 'doceria-solidaria', categoria: 'alimentacao', destaque: false, nome: 'DoceriaSolidária',   desconto: '1',       tipo: 'SOBREMESA GRÁTIS',cor: '#e91e8c', cupons: 4,  total: 10, nivel: null,              campanha: 'Semana do Doador', descricao: 'Uma sobremesa gratuita por visita nas doceiras e confeitarias parceiras.',       comoResgatar: ['Vá à doceria parceira', 'Realize qualquer compra', 'Mostre sua carteira do doador'],                                 cupom: 'JSMFDOCE',    validade: '31/12/2026' },
    { id: 'marmita-fit',       categoria: 'alimentacao', destaque: false, nome: 'MarmitaFit',         desconto: '30%',     tipo: 'OFF',             cor: '#16a085', cupons: 6,  total: 10, nivel: 'Doador Frequente', campanha: null,               descricao: '30% de desconto em marmitas saudáveis com entrega em casa ou no trabalho.',     comoResgatar: ['Baixe o app MarmitaFit', 'Escolha seu plano semanal', 'Insira o cupom antes de confirmar'],                          cupom: 'JSMFFIT',     validade: '31/12/2026' },
];

// Estado
let categoriaAtiva = 'todos';
let mostrarTodos   = false;

// Foto
const fotoSalva = localStorage.getItem('fotoPerfil');
const fotoEl    = document.querySelector('.perfil img');
if (fotoSalva && fotoEl) fotoEl.src = fotoSalva;

// Saudação
const nome = localStorage.getItem('nome') || '';
const saudacaoEl = document.getElementById('saudacao');
if (saudacaoEl) {
    const hora = new Date().getHours();
    const periodo = hora < 12 ? 'Bom dia' : hora < 18 ? 'Boa tarde' : 'Boa noite';
    saudacaoEl.textContent = `${periodo}, ${nome.split(' ')[0] || 'Doador'}! 👋`;
}

// Badges
function badgeCupons(b) {
    const pct = b.cupons / b.total;
    if (b.cupons === 0) return `<span class="badge esgotado-badge">Esgotado</span>`;
    if (pct <= 0.3)     return `<span class="badge urgente-badge">⚡ ${b.cupons} restantes</span>`;
    return `<span class="badge disponivel-badge">${b.cupons} disponíveis</span>`;
}

function badgeNivel(b) {
    if (!b.nivel) return '';
    return `<span class="badge nivel-badge"><i class="fa-solid fa-star"></i> ${b.nivel}</span>`;
}

function badgeCampanha(b) {
    if (!b.campanha) return '';
    return `<span class="badge campanha-badge"><i class="fa-solid fa-fire"></i> ${b.campanha}</span>`;
}

// Renderizar
function renderizar() {
    const lista = document.getElementById('listaBeneficios');
    if (!lista) return;

    let filtrados = categoriaAtiva === 'todos'
        ? BENEFICIOS
        : BENEFICIOS.filter(b => b.categoria === categoriaAtiva);

    const exibidos = (categoriaAtiva === 'todos' && !mostrarTodos)
        ? filtrados.filter(b => b.destaque)
        : filtrados;

    lista.innerHTML = exibidos.map(b => `
        <div class="card ${b.cupons === 0 ? 'card-esgotado' : ''}" onclick="${b.cupons > 0 ? `abrirDetalhe('${b.id}')` : ''}">
            <div class="desconto" style="background:${b.cupons === 0 ? '#ccc' : b.cor}">
                <span class="num">${b.desconto}</span>
                <span class="off">${b.tipo}</span>
            </div>
            <div class="info">
                <h3>${b.nome}</h3>
                <p>${b.descricao}</p>
                <div class="badges">
                    ${badgeCupons(b)}
                    ${badgeNivel(b)}
                    ${badgeCampanha(b)}
                </div>
            </div>
            <i class="fa-solid fa-chevron-right" style="color:${b.cupons === 0 ? '#ccc' : '#ddd'}"></i>
        </div>
    `).join('');

    const btnVerTodas = document.getElementById('btnVerTodas');
    if (btnVerTodas) {
        btnVerTodas.style.display = (categoriaAtiva === 'todos' && !mostrarTodos) ? 'flex' : 'none';
        btnVerTodas.textContent   = `Ver todos os ${BENEFICIOS.length} benefícios →`;
    }
}

// Filtros
document.querySelectorAll('.categoria').forEach(btn => {
    btn.addEventListener('click', function () {
        document.querySelectorAll('.categoria').forEach(b => b.classList.remove('ativa'));
        this.classList.add('ativa');
        categoriaAtiva = this.dataset.cat;
        mostrarTodos   = false;
        renderizar();
    });
});

// Ver todas
const btnVerTodas = document.getElementById('btnVerTodas');
if (btnVerTodas) {
    btnVerTodas.addEventListener('click', () => {
        mostrarTodos = true;
        renderizar();
    });
}

// Abrir detalhe
function abrirDetalhe(id) {
    localStorage.setItem('beneficioSelecionado', id);
    window.location.href = '../beneficio-detalhe/index.html';
}

// Menu
const botoesNav = document.querySelectorAll('nav button');

botoesNav[0].onclick = () => {
    window.location.href = '../../perfis/pessoa/index.html';
};

botoesNav[1].onclick = () => {
    window.location.href = '../../doacao/agendamento/index.html';
  
};  

botoesNav[2].onclick = () => {
    window.location.href = '../../historico/index.html';
};

botoesNav[3].onclick = () => {
    window.location.href = '../../doador/impacto-social/index.html';
};

botoesNav[4].onclick = () => {
      // já está na tela de mapa — não faz nada
};

// Exporta para o detalhe
window.BENEFICIOS = BENEFICIOS;

renderizar();