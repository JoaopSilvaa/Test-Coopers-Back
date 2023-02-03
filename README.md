# Boas vindas ao Test-Coopers-Back!

# O que é o Test-Coopers-Back?

É uma aplicação Backend que consiste em um CRUD de tasks, ou seja, Criação, Leitura, Atualização e Remoção de Tarefas de uma lista de tarefas relacionadas a cada usuário. Esta aplicação é uma avaliação técnica, que faz parte do processo seletivo da empresa [Coopers](https://www.linkedin.com/company/coopers-digital-production/).

## Técnologias usadas
Back-end:
> Desenvolvido usando: Node.js, MySQL, Sequelize, Rest API, CRUD, JWT, MD5.

## Acesso ao servidor remoto

Você pode utilizar essa aplicação através do link: https://test-coopers-back-production.up.railway.app/, em que está rodando através do serviço Railway. O banco de dados também está no serviço da Railway, podendo ser acessado diretamente pela API e suas rotas.
Você também pode acessar o Frontend dessa aplicação através do link: https://main.d2j0fk6itrrsih.amplifyapp.com/, acessar o repositório do mesmo através do link: https://github.com/JoaopSilvaa/Test-Coopers-Front.

## Executando a aplicação localmente

1. Clone o repositório
- Utilize o comando: `git clone git@github.com:JoaopSilvaa/Test-Coopers-Back.git`<br />
2. Acesse a pasta do projeto
- Acesse a pasta Test-Coopers-Back com `cd Test-Coopers-Back`;<br />
3. Crie uma nova branch a partir da main
- Verifique se você está na branch `main`
  * Exemplo: `git branch`
- Se não estiver, mude para a branch `main`
  * Exemplo: `git checkout main`
- Crie a branch
  * Exemplo: `git checkout -b joaozinho-test-coopers-back`<br />
4. Instale as dependências gerais do projeto 
- npm install <br />
5. Inicialize o projeto e acesse os endpoints disponíveis com um aplicativo como o Postman
- npm start ou npm run dev

<strong> Endpoints acessíveis</strong><br />

## POST login `user/login`
* Endpoint responsável por gerar um token para acesso das informações das tasks
  - Para conseguir logar e utilizar as demais rotas, você pode acessar com os usuários citados abaixo:
    * Login 1:
      - username: Joao
      - password: senhasuperforte
    * Login 2:
      - user: Antonio
      - password: senhaSenha
- O corpo da requisição deve seguir o formato abaixo:
    ```json
    {
        "username": "Antonio",
        "password": "senhaSenha"
    }
    ```

## POST taks `task/`
* Endpoint responsável por criar tasks
- O corpo da requisição deve seguir o formato abaixo:
    ```json
    {
        "content": "fazer um café"
    }
    ```
* obs.: É necessário passar o token gerado no login no headers.authorization para criar uma task e ser vinculada ao usuário logado

## GET tasks `task/`
- O endpoint terá a resposta da requisição conforme formato abaixo:
    ```json
    [
        {
            "id": 16,
            "content": "tomar banho de mar",
            "userId": 2,
            "situation": 1,
            "createdAt": "2023-02-02T19:48:40.000Z",
            "updatedAt": "2023-02-02T19:50:47.000Z"
        },
        /*...*/
    ]
    ```
* obs.: É necessário passar o token gerado no login no headers.authorization para criar uma task e ser vinculada ao usuário logado

## PUT tasks `task/id`
- Nessa rota você pode passar no corpo da requisição o que quer alterar no conteúdo da task, mas se não passar ele mudará a chave situation da task.
O corpo da requisição deve seguir o formato abaixo:

    ```json
    {
        "content": "alterando conteúdo",
    }
    ```

## DELETE tasks `task/all/situation`
- O endpoint não devolve nada em seu corpo, mas retorna status 204 e apaga todas as tasks relacionadas ao usuário logado com a situation apontada na url (0 ou 1)

## DELETE tasks `task/id`
- O endpoint não devolve nada em seu corpo, mas retorna status 204 e apaga a task com id passada por parâmetro da url, necessitando passar o token do login para autorizar a operação

  
<br /><br />
Projeto Desenvolvido por [João Antônio](https://github.com/JoaopSilvaa)
