# 📘 Regras de Negócio

## Projeto

**Juntos Somos Mais Fortes**

---

# Objetivo

Este documento reúne todas as regras de funcionamento do sistema.

Seu objetivo é garantir que todas as funcionalidades sigam as mesmas regras durante o desenvolvimento do aplicativo.

---

# Usuário

## Cadastro

* O usuário deve possuir uma conta para acessar o sistema.
* Cada usuário possui um identificador único.
* O nome do usuário será utilizado para personalizar a experiência dentro do aplicativo.
* O usuário poderá alterar seus dados pessoais posteriormente.

---
## Validação da Doação

A liberação de conquistas, benefícios e impacto social
ocorrerá somente após a validação da doação pelo hemocentro.

A validação confirma que o processo de doação foi concluído conforme os critérios definidos pela instituição parceira.

Enquanto a validação não ocorrer, o status da doação permanecerá como "Em análise".

# Triagem

* A triagem é obrigatória antes do agendamento.
* Todas as perguntas devem ser respondidas.
* Caso alguma resposta torne o usuário inapto, o sistema não permitirá o agendamento.
* O resultado da triagem deverá ser armazenado no histórico.

---

# Agendamento

* Apenas usuários aptos poderão realizar um agendamento.
* O usuário poderá possuir apenas um agendamento ativo por vez.
* O sistema deverá impedir horários já ocupados.
* Após confirmar o agendamento será gerado um comprovante.

---

# Doação

* A doação somente poderá ser registrada após confirmação no hemocentro.
* Cada doação ficará armazenada permanentemente no histórico.
* O histórico nunca poderá ser apagado pelo usuário.

---

# Histórico

* Todas as doações deverão permanecer registradas.
* O histórico mostrará:

  * Data
  * Local
  * Hemocentro
  * Status
  * Quantidade total de doações

---

# Impacto Social

* Cada doação poderá ajudar até quatro pessoas.
* O impacto social será calculado automaticamente.
* O aplicativo deverá mostrar a quantidade estimada de vidas impactadas.

---

# Benefícios

Os benefícios representam uma forma de reconhecimento da comunidade ao doador.

Eles **não caracterizam pagamento pela doação**.

---

## Empresas Parceiras

* Empresas poderão disponibilizar benefícios aos doadores.
* Cada benefício possuirá validade.
* Benefícios poderão possuir quantidade limitada.
* Benefícios poderão ser exclusivos para determinada cidade.

---

## Utilização

* Um benefício poderá ser utilizado apenas conforme suas regras específicas.
* O sistema deverá registrar toda utilização realizada.

---

# Conquistas

As conquistas serão liberadas automaticamente conforme a evolução do usuário.

Exemplos:

* Primeira Doação
* 5 Doações
* 10 Doações
* 20 Doações
* 50 Doações

Cada conquista ficará registrada permanentemente.

---

# Dashboard

A tela inicial deverá apresentar:

* Saudação personalizada
* Próxima doação
* Total de doações
* Conquista atual
* Benefícios disponíveis
* Avisos importantes

---

# Segurança

* O usuário somente poderá visualizar suas próprias informações.
* Dados pessoais deverão permanecer protegidos.

---


# Futuras Implementações

* QR Code para confirmação da presença.
* Notificações automáticas.
* Empresas cadastrando benefícios.
* Painel administrativo.
* Integração com banco de dados.
* Integração com hemocentros.

---
"A tecnologia aproxima pessoas. A solidariedade salva vidas."

**Versão:** 0.6

**Última atualização:** Junho de 2026.

# ❤️ Programa Transporte Solidário

## Objetivo

O Programa Transporte Solidário tem como objetivo eliminar uma das principais barreiras para a doação de sangue: o deslocamento até o local da coleta.

O transporte não representa uma recompensa pela doação, mas sim um apoio oferecido por empresas parceiras para facilitar o acesso do cidadão ao hemocentro ou às unidades móveis de coleta.

---

# Regras de Negócio

## Elegibilidade

O Transporte Solidário somente poderá ser liberado quando:

* O usuário possuir cadastro ativo no sistema;
* A triagem for concluída com resultado **Apto para Agendamento**;
* Existir um agendamento confirmado;
* O horário do agendamento estiver dentro do período de validade da viagem.

---

## Liberação da Viagem

Após a confirmação do agendamento, o sistema poderá disponibilizar uma viagem de ida ao local da doação.

A viagem deverá conter:

* Origem (endereço informado pelo usuário);
* Destino (Hemocentro ou Unidade Móvel);
* Data e horário do agendamento;
* Validade limitada.

Cada agendamento dará direito a apenas uma viagem de ida.

---

## Confirmação de Presença

Ao chegar ao local da doação, o usuário deverá confirmar sua presença.

A confirmação poderá ocorrer por meio de:

* Leitura de QR Code;
* Validação realizada por um funcionário;
* Integração futura com o sistema do hemocentro.

Somente após essa confirmação será liberada a viagem de retorno, quando disponível.

---

## Viagem de Retorno

A viagem de retorno será disponibilizada apenas para usuários com presença confirmada no local da doação.

Essa regra evita o uso indevido do benefício.

---

## Doação

O Transporte Solidário não garante o recebimento dos benefícios do aplicativo.

Após a coleta, a doação seguirá o fluxo normal de validação do hemocentro.

A aprovação ou reprovação da bolsa de sangue não interfere na utilização do transporte, pois seu objetivo é garantir o acesso ao serviço de saúde.

---

## Parceiros

O Programa Transporte Solidário poderá contar com diversos parceiros, tais como:

* Empresas de transporte por aplicativo;
* Cooperativas de táxi;
* Cooperativas de mototáxi;
* Empresas de transporte coletivo;
* Prefeituras;
* Instituições apoiadoras.

O sistema não dependerá de uma única empresa para oferecer o serviço.

---

## Controle

Cada viagem deverá possuir:

* Identificador único;
* Usuário vinculado;
* Agendamento relacionado;
* Empresa responsável;
* Data e horário;
* Status da viagem.

---

## Objetivo Social

O Transporte Solidário existe para remover obstáculos que impedem a doação de sangue.

Seu propósito é ampliar o acesso da população aos hemocentros e fortalecer a cultura da doação voluntária.

O programa não caracteriza pagamento pela doação de sangue.

---

**Princípio do Programa**

> Nenhuma pessoa deve deixar de salvar vidas por não conseguir chegar até o local da doação.

