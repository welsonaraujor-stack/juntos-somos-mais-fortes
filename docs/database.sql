CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    cpf VARCHAR(14) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    telefone VARCHAR(20),
    data_nascimento DATE,
    sexo VARCHAR(20),
    cep VARCHAR(10),
    endereco VARCHAR(100),
    numero VARCHAR(10),
    complemento VARCHAR(100),
    bairro VARCHAR(100),
    cidade VARCHAR(100),
    estado CHAR(2),
    foto_url TEXT,
    tipo_sanguineo VARCHAR(3),
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);
CREATE TABLE perguntas_triagem(
id SERIAL PRIMARY KEY,
pergunta VARCHAR(250) NOT NULL,
resposta_esperada VARCHAR(3) NOT NULL
	CHECK (resposta_esperada IN ('Sim','Não')),/* isso é para ter apenas duas opções */
ordem INTEGER NOT NULL,
ativa BOOLEAN NOT NULL DEFAULT TRUE,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);

CREATE TABLE respostas_triagem(
id SERIAL PRIMARY KEY,
usuario_id INTEGER NOT NULL,
pergunta_id INTEGER NOT NULL,
resposta VARCHAR(3) NOT NULL CHECK (resposta IN ('Sim','Não')),
created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
FOREIGN KEY (pergunta_id) REFERENCES perguntas_triagem(id));

SELECT * FROM respostas_triagem; 
ALTER TABLE respostas_triagem ADD COLUMN triagem_id INTEGER;

ALTER TABLE respostas_triagem ADD CONSTRAINT fk_triagem FOREIGN KEY (triagem_id) REFERENCES triagens(id);


CREATE TABLE triagens (
id SERIAL PRIMARY KEY,
usuario_id INTEGER NOT NULL,
data_triagem TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
resultado VARCHAR(10) NOT NULL CHECK (resultado IN ('Apto','Não Apto')),
quantidade_impedimentos INTEGER DEFAULT 0,
receber_lembrete BOOLEAN DEFAULT FALSE,
proxima_tentativa DATE,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
FOREIGN KEY (usuario_id) REFERENCES usuarios(id));


SELECT usuarios.nome,perguntas_triagem.pergunta,
respostas_triagem.resposta

FROM usuarios
INNER JOIN triagens ON usuarios.id = triagens.usuario_id
INNER JOIN respostas_triagem ON triagens.id = respostas_triagem.triagem_id
INNER JOIN perguntas_triagem ON respostas_triagem.pergunta_id = perguntas_triagem.id;



CREATE TABLE unidades(
id SERIAL PRIMARY KEY,
nome VARCHAR(50) NOT NULL,
tipo VARCHAR(20) NOT NULL CHECK (tipo IN('Ônibus','Van','Hemocentro')),
placa VARCHAR(10) UNIQUE,
capacidade INTEGER NOT NULL CHECK (capacidade > 0),
telefo ne VARCHAR(20),
email VARCHAR(100),
foto_url TEXT,
status VARCHAR(15) NOT NULL DEFAULT 'Ativa' CHECK (status IN ('Ativa','Manutenção','Inativa')),
created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE campanhas(
id SERIAL PRIMARY KEY,
unidade_id INTEGER NOT NULL,
nome VARCHAR(150) NOT NULL,
tipo VARCHAR(20) NOT NULL
CHECK (tipo IN ('Pública','Direcionada')),
data DATE NOT NULL,
hora_inicio TIME NOT NULL,
hora_fim TIME NOT NULL,
cep VARCHAR(9),
endereco VARCHAR(150) NOT NULL,
numero VARCHAR(10),
complemento VARCHAR(100),
bairro VARCHAR(100),
cidade VARCHAR(100) NOT NULL,
estado CHAR(2) NOT NULL,
latitude DECIMAL(10,8),
longitude DECIMAL(11,8),
vagas_totais INTEGER NOT NULL
CHECK (vagas_totais > 0),
vagas_ocupadas INTEGER NOT NULL DEFAULT 0
CHECK (vagas_ocupadas >= 0),
status VARCHAR(20) NOT NULL
DEFAULT 'Agendada'
CHECK (status IN('Agendada','Em andamento','Finalizada','Cancelada')),
observacoes TEXT,
created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
FOREIGN KEY (unidade_id)
REFERENCES unidades(id)

);