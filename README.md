# Boas vindas ao Test-Coopers-Back!

# O que é o Test-Coopers-Back?

É uma aplicação Backend que consiste em um CRUD de tasks, ou seja, Criação, Leitura, Atualização e Remoção de Tarefas de uma lista de tarefas relacionadas a cada usuário. Esta aplicação é uma avaliação técnica, que faz parte do processo seletivo da empresa [Coopers](https://www.linkedin.com/company/coopers-digital-production/).

## Técnologias usadas
Back-end:
> Desenvolvido usando: Node.js, MySQL, Sequelize, Rest API, CRUD.

## Acesso ao servidor remoto

Você pode utilizar essa aplicação através do link: https://test-coopers-back-production.up.railway.app/, em que está rodando através do serviço Railway. O banco de dados também está no serviço da Railway, podendo ser acessado diretamente pela API e suas rotas

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
        "content": "ave"
    }
    ```
* obs.: É necessário passar o token gerado no login no headers.authorization para criar uma task e ser vinculada ao usuário logado

<!-- ## GET tasks `task/`
- O endpoint terá a resposta da requisição conforme formato abaixo:
    ```json
    {
        "id": 3,
        "orderNfId": "1605181324130",
        "orderNumber": "18184",
        "orderPath": null,
        "orderFileName": null,
        "orderOriginalName": null,
        "emissionDate": "2020-11-10",
        "pdfFile": null,
        "emitedTo": "00418477002640",
        "nNf": "18184",
        "CTE": "",
        "value": "222795",
        "cnpjId": 1,
        "userId": 1,
        "buyerId": 1,
        "providerId": 1,
        "orderStatusBuyer": "7",
        "orderStatusProvider": "3",
        "deliveryReceipt": null,
        "cargoPackingList": null,
        "deliveryCtrc": null,
        "createdAt": "2020-11-12T11:42:06.000Z",
        "updatedAt": "2020-11-18T12:22:14.000Z",
        "buyer": {
            "id": 1,
            "name": "SACADO 001",
            "tradingName": "SACADO 001 LTDA",
            "cashforceTax": "0",
            "responsibleName": null,
            "responsibleEmail": null,
            "responsiblePosition": null,
            "responsiblePhone": null,
            "responsibleMobile": null,
            "website": null,
            "postalCode": null,
            "address": null,
            "number": null,
            "complement": null,
            "neighborhood": null,
            "city": null,
            "state": null,
            "phoneNumber": null,
            "situation": null,
            "situationDate": null,
            "cnpjId": 1,
            "confirm": 1,
            "email": null,
            "updatedAt": "2020-10-29T21:20:34.000Z"
        },
        "provider": {
            "id": 1,
            "name": "CEDENTE 002",
            "tradingName": "CEDENTE 002 LTDA",
            "cashforceTax": null,
            "responsibleName": null,
            "responsibleEmail": null,
            "responsiblePosition": null,
            "responsiblePhone": null,
            "responsibleMobile": null,
            "website": null,
            "postalCode": null,
            "address": null,
            "number": null,
            "complement": null,
            "neighborhood": null,
            "city": null,
            "state": null,
            "bank": null,
            "bankAgency": null,
            "account": null,
            "documents": null,
            "phoneNumber": null,
            "situation": null,
            "situationDate": null,
            "cnpjId": 2,
            "email": null,
            "updatedAt": "2020-10-29T21:22:22.000Z"
        }
    }
    ```

## PUT tasks `task/id`
- O corpo da requisição deve seguir o formato abaixo:
    ```json
    {
        "orderStatusBuyer": "1",
        "orderStatusProvider": "5"
    }
    ``` -->

## DELETE tasks `task/`
- O endpoint não devolve nada em seu corpo, mas retorna status 204 e apaga todas as tasks relacionadas ao usuário logado 

  
<br /><br />
Projeto Desenvolvido por [João Antônio](https://github.com/JoaopSilvaa)