
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
VALUES(2,2,1,'Sim'),
(2,2,2,'Sim'),
(2,2,3,'Sim'),
(2,2,4,'Não'),
(2,2,5,'Não'),
(2,2,6,'Não'),
(2,2,7,'Não'),
(2,2,8,'Não');

INSERT INTO triagens
(usuario_id, resultado, quantidade_impedimentos, receber_lembrete)
VALUES
(2,'Apto',0,FALSE);


INSERT INTO unidades (nome,tipo,placa,capacidade,telefone,email)
VALUES
('Unidade móvel Esperança','Ônibus','QWE1A23','6','(11)99998-9999','onibusesperança@org.com.br'),
('Unidade móvel Vida','Ônibus','JES3633','6','(11)99333-3333','onibusvida@org.com.br'),
('Unidade móvel Solidariedade','Ônibus','WEL936E','6','(11)99666-666','onibussolidariedade@org.com.br'),
('Van Especializada','Van','LIF1YU0','2','(11)99555-5555','van@org.com.br'),
('Hemocentro Regional','Hemocentro',NULL,'15','(11)99777-7777)','hemocentroregional@org.com.br'),
('Hemocentro Central','Hemocentro',NULL,'20','(11)99222-2222)','hemocentrocentro@org.com.br');



