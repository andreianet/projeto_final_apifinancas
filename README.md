# API de Finanças | {Reprograma}

## Descrição do Projeto
Objetivo da **API de Finanças** é facilitar, controlar e organizar com mais eficaz as despesas das pessoas,
seja um gasto diário ou mensal.


## Ferramentas/Tecnologias Utilizadas:

* Nodejs
* mongodb
* Mongoose
* Npm
* Cors
* Express
* Nodemon
* DotEnv
* IDE VSCode
* Postman

## Schemas Criados: Expense | Category | Finances 
Os schemas de category e finances, são referenciados pelo Expense.

## EndPoints

Método  |  Caminho               |  Descrição                             | 
--------|------------------------|----------------------------------------|
GET     |      /                 |  Retorna uma index de apresentação     |
GET     | /expense/allexpense    |  Retorna todas despesas                |
GET     | /finance/allfinance    |  Retorna as finances                   |
GET     | /category/allcategory  |  Retorna as categorias                 |
POST    | /expense/create        |  Adiciona uma despesa                  |
POST    | /category/create       |  Adiciona uma categoria                |
POST    | /finance/create        |  Adiciona uma finance                  |
PUT     | /expense/update/:id    |  Atualiza uma despesa                  |
DELETE  | /expense/delete/:id    |  Deleta uma despesa                    |
DELETE  | /category/delete/:id   |  Deleta uma categoria                  |

### Exemplo do GET(allexpense)

![Alt](https://github.com/andreianet/projeto_final_apifinancas/blob/master/img/exemplo_allexpense.png)


## Entregável - MVP
* Cadastro de categorias
* Cadastro de finances
* Cadastro de expense(despesas)
* Listar despesas, por categorias e finances.
* CRUD completo no Schema Expense.












