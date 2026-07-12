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