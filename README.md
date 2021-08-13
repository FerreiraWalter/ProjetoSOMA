# 👚 ProjetoSOMA

Sistema que armazena os dados sobre os projetos existentes no grupo soma, com a
finalidade de identificar quais possuem escopos similares.</h2>
<hr>

## 🎲 Banco de dados
```sh
NOME DO ESQUEMA: projeto_soma
NOME: tb_projeto

COLUNAS :
id_projeto - Bigint(20)
no_projeto - Varchar(100)
ds_projeto - Longtext
id_user_owner - BigInt(20)
status - int(11)
created_at - timestamp
updated_at - timestamp
```
<hr>

## 🗺️ Funcionamento:
Utilização do Insomnia/Postman ou derivados é um bom começo

### 🛣️ Rotas:
```sh 
GET: 

endpoint: /api/projeto/getById/:id_projeto
payload: id_projeto
return: JSON com o projeto escolhido.

endpoint: /api/projeto/
payload: 
return: JSON com todos os projetos existentes.



POST:

endpoint: /api/projeto/create
payload:
    no_projeto - string
    ds_projeto - string
    id_user_owner - string
    status - number
return:
    Status 200 quando sucesso, com o objeto criado.
    Status 500 quando falha, com o objeto do erro.



PUT:

endpoint: /api/projeto/update
payload:
    id_projeto - Bigint(20)
    no_projeto - string
    ds_projeto - string
    id_user_owner - string
    status - number
return:
    Status 200 quando sucesso.
    Status 500 quando falha, com o objeto do erro.



DELETE:

endpoint: /api/projeto/delete
payload: id_projeto - number
return:
    Status 204 quando sucesso.
    Status 500 quando falha, com o objeto do erro.
obs:
    A exclusão do valor deve ser lógica, não removendo o dado da tabela, apenas marcando um status inativo.
```
