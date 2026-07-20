Quantos doadores O+ existem?


SELECT COUNT(*)
FROM usuarios
INNER JOIN tipos_sanguineos
ON usuarios.tipo_sanguineo_id = tipos_sanguineos.id
WHERE descricao = 'O+';


Quantas doações foram feitas por doadores AB-?

SELECT COUNT(*)
FROM doacoes
INNER JOIN usuarios
ON doacoes.usuario_id = usuarios.id
INNER JOIN tipos_sanguineos
ON usuarios.tipo_sanguineo_id = tipos_sanguineos.id
WHERE descricao = 'AB-';

SELECT

    usuarios.nome AS doador,
    campanhas.nome AS campanha,
    campanhas.data AS data_da_campanha,
    campanhas.cidade

FROM agendamentos

INNER JOIN usuarios
ON usuarios.id = agendamentos.usuario_id

INNER JOIN campanhas
ON campanhas.id = agendamentos.campanha_id;