
INSERT INTO usuarios(nome,cpf,email,telefone,data_Nascimento,sexo,cep,endereco,numero,complemento,bairro,cidade,estado,foto_url,tipo_sanguineo)
VALUES('Carlos Souza','345.678.901-23','carlos.souza@email.com','(21) 98888-1122','1988-12-20','Masculino','20000-000','Rua XV de Novembro','340','NULL','Centro','Rio de Janeiro','RJ','carlos.jpg','B+'),
('Ana Costa','456.789.012-34','ana.costa@email.com','(31) 97777-5566','1999-01-30','Feminino','30100-000','Rua das Acácias','89','Bloco B','Funcionários','Belo Horizonte','MG','ana.jpg','AB+'),
('Pedro Lima','567.890.123-45','pedro.lima@email.com','(62) 96666-7788','1990-07-10','Masculino','74000-000','Av. Goiás','550',NULL,'Centro','Goiânia','GO','pedro.jpg','O-'),
('Fernanda Rocha','678.901.234-56','fernanda.rocha@email.com','(41) 95555-8899','1997-11-05','Feminino','80000-000','Rua Paraná','77','Casa','Batel','Curitiba','PR','fernanda.jpg','A-'),
('Lucas Martins','789.012.345-67','lucas.martins@email.com','(85) 94444-9900','1993-06-18','Masculino','60000-000','Rua Beira Mar','210',NULL,'Meireles','Fortaleza','CE','lucas.jpg','B-'),   
('Juliana Almeida','890.123.456-78','juliana.almeida@email.com','(27) 93333-2211','1986-02-12','Feminino','29000-000','Rua Vitória','15','Apto 101','Praia do Canto','Vitória','ES','juliana.jpg','AB-'),
('Rafael Gomes','901.234.567-89','rafael.gomes@email.com','(71) 92222-3344','1994-08-22','Masculino','40000-000','Av. Oceânica','999',NULL,'Barra','Salvador','BA','Rafael.jpg','A+'),
('Camila Pereira','012.345.678-90','camila.pereira@email.com','(51) 91111-4455','1998-03-17','Feminino','90000-000','Rua da Praia','60','Casa','Centro Histórico','Porto Alegre','RS','camila.jpg','O+'),
('Bruno Carvalho','147.258.369-10','bruno.carvalho@email.com','(81) 90000-5566','1987-05-28','Masculino','50000-000','Rua do Sol','420',NULL,'Boa Vista','Recife','PE','bruno.jpg','B+'),
('Patrícia Mendes','258.369.147-21','patricia.mendes@email.com','(98) 98877-6655','1991-10-03','Feminino','65000-000','Av. dos Holandeses','150','Torre A','Calhau','São Luís','MA','patricia.jpg','A-'),
('Gustavo Ribeiro','369.147.258-32','gustavo.ribeiro@email.com','(92) 97766-5544','1996-12-11','Masculino','69000-000','Rua Amazonas','310',NULL,'Adrianópolis','Manaus','AM','gustavo.jpg','O+');


INSERT INTO perguntas_triagem(pergunta,resposta_esperada,ordem)
VALUES('Você pesa mais de 50kg?','Sim',1),
('Você realizou alguma doação de sangue nos últimos 60 dias?','Sim',2),
('Dormiu pelo menos 6 horas nas últimas 24 horas?','Sim',3),
('Teve gripe ou resfriado nas últimas 2 semanas?','Não',4),
('Fez tatuagem nos últimos 12 meses?','Não',5),
('Está grávida ou amamentando?','Não',6),
('Está tomando antibióticos ou outros medicamentos?','Não',7),
('Realizou alguma cirurgia nos últimos 6 meses?','Não',8);

INSERT INTO respostas_triagem(triagem_id, usuario_id, pergunta_id,resposta)
VALUES(2,2,1,'Sim'),(2,2,2,'Sim'),(2,2,3,'Sim'),(2,2,4,'Não'),(2,2,5,'Não'),(2,2,6,'Não'),(2,2,7,'Não'),(2,2,8,'Não');
(3,3,1,'Sim'),(3,3,2,'Sim'),(3,3,3,'Sim'),(3,3,4,'Não'),(3,3,5,'Sim'),(3,3,6,'Não'),(3,3,7,'Não'),(3,3,8,'Sim');
(4,4,1,'Sim'),(4,4,2,'Sim'),(4,4,3,'Sim'),(4,4,4,'Não'),(4,4,5,'Sim'),(4,4,6,'Não'),(4,4,7,'Não'),(4,4,8,'Sim');
(5,5,1,'Sim'),(5,5,2,'Sim'),(5,5,3,'Sim'),(5,5,4,'Não'),(5,5,5,'Sim'),(5,5,6,'Não'),(5,5,7,'Não'),(5,5,8,'Sim');
(6,6,1,'Sim'),(6,6,2,'Sim'),(6,6,3,'Sim'),(6,6,4,'Não'),(6,6,5,'Sim'),(6,6,6,'Não'),(6,6,7,'Não'),(6,6,8,'Sim');
(7,7,1,'Sim'),(7,7,2,'Sim'),(7,7,3,'Sim'),(7,7,4,'Não'),(7,7,5,'Sim'),(7,7,6,'Não'),(7,7,7,'Não'),(7,7,8,'Sim');
(8,8,1,'Sim'),(8,8,2,'Sim'),(8,8,3,'Sim'),(8,8,4,'Não'),(8,8,5,'Não'),(8,8,6,'Não'),(8,8,7,'Não'),(8,8,8,'Não');
(9,9,1,'Sim'),(9,9,2,'Sim'),(9,9,3,'Sim'),(9,9,4,'Não'),(9,9,5,'Não'),(9,9,6,'Não'),(9,9,7,'Não'),(9,9,8,'Não');
(10,10,1,'Sim'),(10,10,2,'Sim'),(10,10,3,'Sim'),(10,10,4,'Não'),(10,10,5,'Não'),(10,10,6,'Não'),(10,10,7,'Não'),(10,10,8,'Não');
(11,11,1,'Sim'),(11,11,2,'Sim'),(11,11,3,'Sim'),(11,11,4,'Não'),(11,11,5,'Não'),(11,11,6,'Não'),(11,11,7,'Não'),(11,11,8,'Não');
(12,12,1,'Sim'),(12,12,2,'Não'),(12,12,3,'Sim'),(12,12,4,'Sim'),(12,12,5,'Não'),(12,12,6,'Não'),(12,12,7,'Não'),(12,12,8,'Não');


INSERT INTO triagens
(usuario_id, resultado, quantidade_impedimentos, receber_lembrete)
VALUES
(2,'Apto',0,FALSE);
INSERT INTO triagens (usuario_id, resultado)
VALUES
(2, 'Apto'),
(3, 'Não Apto'),
(4, 'Apto'),
(5, 'Apto'),
(6, 'Não Apto'),
(7, 'Apto'),
(8, 'Apto'),
(9, 'Não Apto'),
(10, 'Apto'),
(11, 'Apto'),
(12, 'Não Apto');

INSERT INTO triagens (usuario_id, resultado)
VALUES
(4, 'Apto');

INSERT INTO triagens (usuario_id, resultado)
VALUES
(4, 'Apto');

INSERT INTO unidades (nome,tipo,placa,capacidade,telefone,email)
VALUES
('Unidade móvel Esperança','Ônibus','QWE1A23','6','(11)99998-9999','onibusesperança@org.com.br'),
('Unidade móvel Vida','Ônibus','JES3633','6','(11)99333-3333','onibusvida@org.com.br'),
('Unidade móvel Solidariedade','Ônibus','WEL936E','6','(11)99666-666','onibussolidariedade@org.com.br'),
('Van Especializada','Van','LIF1YU0','2','(11)99555-5555','van@org.com.br'),
('Hemocentro Regional','Hemocentro',NULL,'15','(11)99777-7777)','hemocentroregional@org.com.br'),
('Hemocentro Central','Hemocentro',NULL,'20','(11)99222-2222)','hemocentrocentro@org.com.br');



INSERT INTO campanhas
(unidade_id, nome, tipo, data, hora_inicio, hora_fim, cep, endereco, numero, bairro, cidade, estado, vagas_totais)

VALUES
(7,'Campanha Shopping Partage','Pública','2026-08-01','08:00','17:00','68515-000','Rodovia PA-275','100','Nova Carajás','Parauapebas','PA',50),
(7,'Campanha Praça dos Metais','Pública','2026-08-08','08:00','17:00','68515-000','Praça dos Metais','S/N','Centro','Parauapebas','PA',60),
(10,'Campanha O+ Região Norte','Direcionada','2026-08-10','08:00','16:00','68515-000','Atendimento Domiciliar','S/N','Cidade Nova','Parauapebas','PA',5),
(11,'Coleta Hemocentro Regional','Pública','2026-08-03','07:00','18:00','68515-000','Rua das Flores','150','Centro','Parauapebas','PA',80);

INSERT INTO agendamentos(usuario_id, campanha_id)
VALUES (2,1),
(3,1),
(4,2),
(5,3);

INSERT INTO tipos_sanguineos
(grupo,fator_rh,descricao)

VALUES
('A','+','A+'),
('A','-','A-'),
('B','+','B+'),
('B','-','B-'),
('AB','+','AB+'),
('AB','-','AB-'),
('O','+','O+'),
('O','-','O-');

