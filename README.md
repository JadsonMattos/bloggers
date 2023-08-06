# Boas-vindas ao repositório do exercício bloggers!

<details>
  <summary><strong>👨‍💻 O que deverá ser desenvolvido</strong></summary><br />

Neste exercício, você vai desenvolver uma aplicação que realizará requisições para uma API de _blogs_ e exibir os usuários retornados. A aplicação possui duas páginas: uma página inicial que exibe uma lista de usuários e uma página de _posts_ de um usuário específico.
</details>

<details>
  <summary><strong>:memo: Habilidades</strong></summary><br />

Neste exercício, verificamos se você é capaz de:

- Utilizar o React Router para criar rotas;
- Criar links de navegação na aplicação com os componentes Link e NavLink;
- Criar rotas, mapeando o caminho da URL com o componente correspondente, via Route;
- Criar rotas dinâmicas e utilizar o hook useParams para extrair parâmetros da URL.
</details>

## 1 - Crie as rotas para a aplicação

<details>
  <summary>Crie as primeiras rotas para a aplicação</summary><br />

- A rota `/` deve renderizar o componente `<Users />`
- A rota `/posts/:id` deve renderizar o componente `<Posts />`
- A rota `/about` deve renderizar o componente `<About />`
- Qualquer outra rota deve renderizar o componente `<NotFound />`

Todas páginas já estão criados e podem ser encontrados na pasta `src/pages`.
</details>

## 2 - Crie dois `NavLink` dentro do componente `Header`

<details>
  <summary>Crie dois <code>NavLink</code> para as rotas de <code>Home</code> e <code>About</code> </summary><br />

  O componente `Header` já está criado e pode ser encontrado na pasta `src/components`.

  - O primeiro deverá conter o texto `Home` e redirecionar para a rota `/`;
  - O segundo deverá conter o texto `About` e redirecionar para a rota `/about`
</details>

## 3 - Crie um link para a página de posts de um usuário

<details>
  <summary>Dentro do componente <code>User</code>, crie um link para a página de posts de um usuário</summary><br />

- O link deve conter o texto `Posts`;
- O link deve redirecionar para a rota `/posts/:id`, onde `:id` é o id do usuário.

## 4 - Exiba os posts de um usuário

<details>
  <summary>Exiba os posts de apenas um usuário na página de posts</summary><br />

  Utilize o array de posts que está importado no componente `<Posts />` para exibir os posts de um usuário.
  Os posts seguem está mesma estrutura:

  ```js
  [
    {
      id: 10,
      title: 'They rushed out the door.',
      body: "They rushed out the door, grabbing anything and everything they could think of they might need. There was no time to double-check to make sure they weren't leaving something important behind. Everything was thrown into the car and they sped off. Thirty minutes later they were safe and that was when it dawned on them that they had forgotten the most important thing of all.",
      userId: 1,
    },
  // ...
  ]
  ```

  Você deve filtrar os posts de acordo com o `id` do usuário que está na rota e a chave `userId` dos posts.
</details>
