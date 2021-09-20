# api-estados

# PASSO 1: 
Na pasta config, dentro do arquivo default.json, alterar o campo senha para a senha do seu banco MySQL local.

# PASSO 2: 
Criar um novo database no banco de dados MySQL chamado "estados", via terminal ou MySQL Workbench.

# PASSO 3: 
Executar o comando node api/banco-de-dados/criarTabelas.js via terminal para criar nossas tabelas no banco.

# PASSO 4: 
Executar o comando node api/index.js via terminal para iniciar nosso servidor.


# ACESSANDO RECURSOS DA API:
  1. GET - /api/states/ -- localhost:3000/api/states
    
     -- Requisição que retornará todos os estados cadastrados no banco.

  2. POST - /api/states -- localhost:3000/api/states

     -- Requisição que irá persistir nossos dados enviados para o servidor.

  3. GET - /api/states/{id} -- localhost:3000/api/states/{id}
  
     -- Requisição que irá retornar os dados referentes a um estado específico.

  4. PUT - /api/states/{id} -- localhost:3000/api/states/{id}

     -- Requisição que irá alterar dados no banco de dados de acordo com os dados fornecidos no body da requisição.

  5. DELETE - /api/states/{id} -- localhost:3000/api/states/{id}

     -- Requisição que irá remover permanentemente um estado do banco.

