function selecionar(tipoPerfil) {
    localStorage.setItem('perfil', tipoPerfil);

    const rotas = {
        'Pessoa':      '../../perfis/pessoa/index.html',
        'Grupo':       '../../perfis/grupo/index.html',
        'Instituição': '../../perfis/instituicao/index.html',
        'Parceiro':    '../../perfis/parceiro/index.html'
    };

    if (rotas[tipoPerfil]) {
        window.location.href = rotas[tipoPerfil];
    } else {
        alert('Perfil inválido.');
    }
}