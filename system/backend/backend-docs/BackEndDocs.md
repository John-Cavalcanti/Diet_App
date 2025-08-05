# Documentação Backend - NutreAI

## 1 - Visão geral
Este backend é responsável por fornecer uma ***API RESTful*** para a interface gráfica de uma aplicação web de **criação e gerenciamento de dietas** geradas por IA. 
Para o desenvolvimento, foi usado **Node.JS**, **TypeScript** e **NestJS** e **PostgreSQL** como banco de dados.

## 2 - Arquitetura e Módulos
Este backend segue o padrão arquitetural ***Controller-Service-Repository*** (CSR), uma arquitetura em camadas amplamente utilizada em projetos comerciais e acadêmicos.

![DiagramaCSR](csr-diag.png)

A aplicação é composta por 4 módulos: **AI**, **Auth**, **Users** e **WeeklyDiet**. Cada módulo é responsável por uma das principais funcionalidades da aplicação: 
- **AI**: Comunicação com a IA e tratamento das respostas.
- **Auth**: Autenticação dos usuários.
- **Users**: Gerenciamento dos usuários e suas informações.
- **WeeklyDiet**: Gerenciamento das dietas dos usuários.


## 3 - Tecnologias e Dependências
Este backend foi desenvolvido em **TypeScript**, utilizando **NestJS** como framework e **Node.js** como ambiente de execução. Além dessas tecnologias principais, outras ferramentas foram utilizadas para suportar funcionalidades específicas:

- **TypeORM**: (Object Relational Mapper) Utilizado para comunicação com o banco de dados PostgreSQL.
- **bcryptjs**: Biblioteca de codificação e decodificação de strings. Usada na codificação de senhas do usuário.
- **JWT**: Tecnologia de gerenciamento de sessões do usuário, baseada em tokens validados para autenticação.
- **Jest**: Framework de testes usado para garantir a qualidade do código, realizando testes unitários.

Os arquivos ***package.json*** e ***package-lock.json*** contém as dependências da API. Para instalar todas as dependências na versão correta, é necessário executar o comando abaixo na raiz do backend.
```bash
npm install
```

## 4 - Autenticação
A autenticação deste backend é baseada em **JSON Web Token (JWT)** com o auxílio de **Guards** para proteger rotas e garantir que apenas usuários autenticados possam acessar determinados recursos.

O processo de autenticação ocorre quando um usuário envia suas credenciais (email e senha) para o backend (realiza login). O backend valida essas credenciais e, se forem corretas, gera um **token JWT**. Este token será usado para autenticar o usuário nas requisições subsequentes.

- **Envio das credenciais**: O cliente envia uma requisição POST para o endpoint de login com as credenciais do usuário.

- **Validação no backend**: O backend verifica se as credenciais correspondem a um usuário válido no banco de dados.

- **Geração do JWT**: Se as credenciais estiverem corretas, o backend gera um JWT e o retorna para o cliente.

- **Envio do JWT**: O cliente armazena o JWT e o envia nas requisições subsequentes usando o cabeçalho *Authorization* e o modificador *Bearer*. 

Em rotas protegidas, o **Guard** é responsável por verificar a validade do token enviado, retornando **true** caso todas as informações estão válidas e **Unauthorized** caso contrário.

## 5 - Testes
Este backend possui um amplo conjunto de testes unitários de grande cobertura. Para isso, foi usado o *framework* **Jest**, também usado na criação de valores *mockados*. Na execução dos testes, foi usado o comando ***node test***.
Uma boa cobertura de testes foi alcançada, cerca de (adicionar valor depois)% das funções mapeadas e validadas.

[imagem_aqui]()

## 6 - Banco de dados
Foi usado um banco de dados **PostgreSQL** para armazenamento das informações dos usuários.

Neste banco de dados existem 2 tabelas, para Users e Weekly-diet, as duas *entities* que compõem o funcionamento da API. **Users** e **Weekly-diet** estão relacionadas entre si por uma chave estrangeira **UserId**, que liga uma dieta a um usuário único.

[imagem_aqui]()

Como dito anteriormente, para conectar o código do backend ao banco de dados foram usados os métodos da biblioteca **TypeORM**.

## 7 - AI
O módulo **AI** deste backend 



