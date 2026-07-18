# Banco de Dados

## Tabela: usuarios
Qual é o nome completo?
CPF?
RG? (Será que precisamos?)
Data de nascimento?
Sexo?
Foto?
 Contato
E-mail?
Telefone?
Contato de emergência? (Vale a pena?)
 Localização
CEP?
Endereço?
Bairro?
Cidade?
Estado?
 Doação
Tipo sanguíneo?
Fator RH?
Já doou sangue antes?
Data da última doação?
Está apto para doar?
Motivo da inaptidão (se houver)?
 Aplicativo
Data de cadastro?
Último acesso?
Aceitou os termos?
Recebe notificações?
 Reconhecimento
Quantas doações realizou?
Qual nível atingiu?
Quantos reconhecimentos já resgatou?
 Voluntariado
É voluntário?
Quantas horas de voluntariado possui?


## Tabela: perfis
O sistema precisa saber
Qual perfil foi selecionado?
Pessoa
Grupo
Instituição
Parceiro
Data da seleção
O usuário já escolheu um perfil anteriormente?
O usuário pode alterar esse perfil futuramente?
O sistema precisa validar
O usuário selecionou uma opção?
O perfil escolhido existe?
O usuário já possui um perfil cadastrado?
O perfil permite continuar para a próxima etapa?
O usuário está autenticado?
O sistema precisa mostrar
As quatro opções de participação
Descrição de cada perfil
Ícone correspondente
Mensagem informando que o perfil poderá ser alterado posteriormente
Destaque visual da opção selecionada
Botão ou navegação para continuar
O sistema precisa salvar
ID do usuário
Tipo de perfil escolhido
Data da escolha
Última atualização do perfil
Perguntas que o sistema deve responder
Quantos usuários escolheram o perfil Pessoa?
Quantos usuários representam Grupos?
Quantas Instituições estão cadastradas?
Quantos Parceiros participam do projeto?
Qual perfil possui mais usuários?
Quantos usuários alteraram seu perfil após o cadastro?
Quantas empresas se cadastraram este mês?
Quantos grupos comunitários fazem parte do projeto?
Quantas universidades participam do projeto?

## Tabela: triagens

## Tabela: perguntas_triagem

O sistema precisa saber
Qual usuário está realizando a triagem?
Em qual etapa da triagem o usuário está? (1 de 8)
O usuário respondeu à pergunta?
A resposta foi Sim ou Não?
Data e hora da resposta.
O sistema precisa validar
O usuário selecionou uma resposta?
A resposta é válida (Sim ou Não)?
O usuário pode avançar para a próxima etapa?
Caso a resposta seja Não, a triagem deve ser encerrada?
A resposta já foi registrada anteriormente?
O sistema precisa mostrar
Barra de progresso da triagem.
Número da etapa (1 de 8).
Pergunta: Você pesa mais de 50 kg?
Informação: "O peso mínimo para a doação é de 50 kg."
Botões Sim e Não.
Mensagem informando que a resposta é importante para a segurança do doador.
Mensagem de inaptidão temporária caso a resposta seja Não.
O sistema precisa salvar
ID do usuário.
Etapa da triagem.
Pergunta respondida.
Resposta (Sim ou Não).
Data e hora da resposta.
Resultado da etapa (Aprovado ou Reprovado).
Perguntas que o sistema deve responder
Quantos usuários responderam esta pergunta hoje?
Quantos usuários responderam Sim?
Quantos usuários responderam Não?
Quantos usuários foram considerados temporariamente inaptos por peso?
Qual o percentual de aprovação nesta etapa?
Em qual etapa da triagem ocorre o maior número de reprovações?
Regras de Negócio
O doador deve possuir peso igual ou superior a 50 kg para continuar a triagem.
Caso a resposta seja Não, a triagem é encerrada e o sistema informa que o doador está temporariamente inapto.
Caso a resposta seja Sim, o sistema libera automaticamente a próxima etapa.
Todas as respostas devem ser registradas para fins estatísticos e de auditoria.
Entidades identificadas
Usuário
Triagem
Resposta da Triagem
## Tabela: respostas_triagem
APTO

O sistema precisa saber
Qual usuário concluiu a pré-triagem?
O resultado da pré-triagem foi Apto?
Quando a pré-triagem foi realizada?
Qual foi a unidade ou campanha escolhida (caso já exista)?
O usuário já possui um agendamento?
O usuário já realizou esta pré-triagem hoje?
O sistema precisa validar
Todas as perguntas da pré-triagem foram respondidas?
O resultado final é realmente Apto?
A pré-triagem ainda está dentro do período de validade?
O usuário já possui um agendamento ativo?
O usuário pode prosseguir para o agendamento?
O sistema precisa mostrar
Foto do usuário.
Nome do doador.
Mensagem de aprovação.
Resumo do resultado da pré-triagem.
Próximos passos para concluir a doação.
Botão Encontrar Unidades.
Botão Agendar Doação.
Mensagem de impacto social ("Cada bolsa de sangue pode salvar até 4 vidas.").
O sistema precisa salvar
Resultado da pré-triagem.
Data e hora da conclusão.
Status: Apto.
Data de validade da pré-triagem (caso exista essa regra).
Histórico da triagem.
Perguntas que o sistema deve responder
Quantos usuários foram considerados aptos hoje?
Qual o percentual de aprovação na pré-triagem?
Quantos usuários aptos realizaram o agendamento?
Quantos usuários aptos não continuaram o processo?
Quantos usuários realizaram mais de uma pré-triagem este ano?
Qual campanha teve maior número de usuários aptos?
Regras de Negócio
O resultado Apto não garante que a doação será realizada.
A decisão final pertence à equipe do hemocentro durante a triagem presencial.
O usuário apto pode prosseguir para localizar uma unidade ou realizar um agendamento.
Todas as pré-triagens devem permanecer registradas no histórico do usuário.
Entidades identificadas
Usuário
Pré-Triagem
Resultado da Pré-Triagem
Agendamento
Unidade de Coleta


NÃO APTO
O sistema precisa saber
Qual usuário realizou a pré-triagem?
Quais perguntas foram respondidas?
Quais respostas geraram o impedimento?
Quantos impedimentos foram identificados?
Qual a data da pré-triagem?
Existe uma data estimada para uma nova tentativa?
O usuário deseja ativar lembretes?
O sistema precisa validar
Todas as perguntas da pré-triagem foram respondidas?
O resultado da triagem é "Impedimento Temporário"?
Os motivos da inaptidão foram registrados?
O usuário já ativou lembretes anteriormente?
O usuário pode refazer a pré-triagem imediatamente ou deverá aguardar um período?
O sistema precisa mostrar
Foto do usuário.
Nome do doador.
Mensagem acolhedora.
Resumo do resultado da pré-triagem.
Lista dos motivos identificados.
Explicação de que a situação é temporária.
Orientações sobre o que fazer.
Botão Refazer Triagem.
Opção para ativar lembretes.
Opção para compartilhar o projeto ou convidar um amigo.
O sistema precisa salvar
Resultado da pré-triagem.
Motivos do impedimento.
Data da pré-triagem.
Data prevista para nova tentativa (quando aplicável).
Preferência de receber lembretes.
Histórico das pré-triagens.
Perguntas que o sistema deve responder
Quantos usuários tiveram impedimento temporário hoje?
Quais são os principais motivos de impedimento?
Quantos usuários ativaram lembretes?
Quantos retornaram e posteriormente conseguiram doar?
Qual o tempo médio entre um impedimento temporário e uma nova tentativa?
Quantos usuários convidaram outra pessoa após receber um impedimento?
Regras de Negócio
O aplicativo não realiza diagnóstico médico.
O resultado é baseado exclusivamente nas respostas informadas pelo usuário.
O impedimento identificado é considerado temporário, salvo quando houver orientação diferente das normas vigentes.
O usuário poderá realizar uma nova pré-triagem quando o motivo do impedimento deixar de existir.
Todos os resultados devem ser armazenados no histórico do usuário.
Entidades identificadas
Usuário
Pré-Triagem
Resultado da Pré-Triagem
Motivo do Impedimento
Notificação
Histórico da Triagem

## Tabela: resultados_triagem

## Tabela: agendamentos
O sistema precisa saber
Qual usuário está logado?
Qual a cidade do usuário?
Qual o estado do usuário?
O usuário permitiu acesso à localização?
Qual a localização atual do usuário? (quando permitido)
Qual filtro foi selecionado? (Hoje, Esta semana ou Com vagas)
Qual unidade foi escolhida?
Quantas vagas existem em cada unidade?
Data e horário disponíveis.
Tipo da unidade (Hemocentro, Unidade Móvel ou Evento).
O sistema precisa validar
O usuário concluiu a pré-triagem?
O usuário está apto para prosseguir?
A localização foi obtida com sucesso?
A unidade ainda possui vagas?
A data do evento ainda é válida?
O usuário já possui um agendamento ativo?
A unidade está ativa no sistema?
O sistema precisa mostrar
Cidade atual do usuário.
Campo de pesquisa.
Mapa das unidades.
Quantidade de unidades encontradas.
Lista de unidades disponíveis.
Nome da unidade.
Endereço.
Data do evento.
Horário disponível.
Quantidade de vagas restantes.
Botão Agendar.
Filtros (Hoje, Esta semana, Com vagas).
O sistema precisa salvar
Unidade selecionada.
Data da seleção.
Último filtro utilizado.
Última pesquisa realizada.
Histórico de unidades visualizadas (opcional).
Perguntas que o sistema deve responder
Quantas unidades estão disponíveis hoje?
Quantos eventos ocorrerão esta semana?
Qual unidade possui mais vagas?
Qual unidade recebeu mais agendamentos?
Qual cidade possui mais eventos?
Quantas vagas ainda restam hoje?
Qual horário possui maior procura?
Qual unidade móvel realizou mais coletas?
Qual evento recebeu mais doadores?
Qual região necessita de novas campanhas?
Regras de Negócio
Apenas usuários aptos podem realizar o agendamento.
Uma unidade não pode disponibilizar mais vagas do que sua capacidade.
Quando todas as vagas forem preenchidas, a unidade deixa de aparecer no filtro Com vagas.
O usuário pode pesquisar unidades por cidade ou bairro.
As vagas são atualizadas em tempo real.
Cada unidade informa sua data, horário e capacidade máxima.
Entidades identificadas
Usuário
Unidade de Coleta
Hemocentro
Unidade Móvel
Evento
Vagas
Agendamento
Localização

## Tabela: eventos

## Tabela: unidades

## Tabela: empresas

## Tabela: reconhecimentos

## Tabela: doacoes

## Tabela: certificados

## Tabela: conquistas