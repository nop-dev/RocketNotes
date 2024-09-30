# rocket-notes-api 🗒️

Projeto desenvolvido com o objetivo de aprender Node e todas as tecnologias citadas mais abaixo. Desenvolvi essa API com a mentoria do [Rodrigo Gonçalves](https://github.com/orodrigogo) no nível 9, Stage 08 da trilha Explorer da Rocketseat. :rocket:

## 💻 Projeto

Este repositório contém uma API completa construída com Node.js, Express e SQLite. A seguir, você encontrará informações sobre como a API foi desenvolvida e como você pode executá-la e usá-la.

## 🚀 Tecnologias Utilizadas

- Node.js
- Express
- SQLite
- Knex.js
- Beekeeper Studio
- Insomnia
  
## 🔖 Objetivo

O objetivo deste projeto foi criar uma API de Bloco de Notas, que cadastra, atualiza e mostra os usuários e notas, tags e links que o usuário criou. Esse projeto utiliza um banco de dados SQLite para armazenar dados. Foram criadas rotas para executar operações CRUD (Criar, Ler, Atualizar e Excluir) no banco de dados.

## 💾 Iniciar Projeto

Siga estas etapas para configurar e usar a API em sua máquina local:

```git
# Clone este repositório
$ git clone https://github.com/nop-dev/RocketNotes-api

# Acesse a pasta do projeto no terminal/cmd
$ cd RocketNotes-api

# Instale as dependências
$ npm install

# Execute as migrations
$ npm run migrate:dev

# Execute a aplicação em modo de desenvolvimento
$ npm run dev
```

## 🗺️ Rotas

| Método | Rota| **Descrição**| Parâmetros | Observação |
| --- | --- | --- | --- | --- |
| POST | /users | Cria um novo usuário | `name`, `email`, `password` | enviar dados no `body` da requisição |
| PUT | /users | Atualiza um usuário específico | `name`, `email`, `password`, `newPassword`(opcional) | enviar dados no `body` da requisição |
| GET | /notes/user_id | Retorna todas as notas de um usuário | `user_id` | enviar `user_id` nos parâmetros da requisição |
| POST | /notes | Cria uma nota | `user_id`, `title`, `description`, `tags`(array, optional), `links`(array, optional) | enviar `user_id` pela rota e dados pelo `body` da requisição |
| GET | /notes/note_id | Retorna uma nota específica | `note_id` |  enviar o `note_id` pela rota |
| DELETE | /notes/note_id | Deleta uma nota específica | `note_id` | enviar `note_id` pela rota |
| GET | /tags | Retornas as tags criadas por um usuário | `user_id` | enviar `user_id` pela rota |

---

| Nop-Dev, 2023 :rocket: |
| --- |

Deixe sua ⭐️ nesse repositório se você gostou do FocusTimer! Seu apoio é muito valioso para mim! 🚀
