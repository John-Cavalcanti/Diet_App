# Diet_App - Nutre.AI

Nutre.AI é um assistente que visa proporcionar uma rotina alimentar mais saudável através da geração de dietas personalizadas, utilizando inteligência artificial com base nas preferências, objetivos e restrições alimentares de cada usuário.

- **Aviso:** A aplicação não visa substituir o trabalho de um nutricionista profissional qualificado. O objetivo é apenas ajudar quem busca entender como construir uma dieta básica com base em suas restrições, ou quem deseja realizar uma reeducação alimentar para ter uma vida mais saudável com praticidade.

## Funcionalidades Principais

- **Autenticação de Usuário:** Sistema seguro de cadastro e login utilizando JWT.

- **Perfil Personalizado:** Criação de um perfil detalhado com informações como peso, altura, frequência de atividades físicas, objetivos e restrições alimentares.

- **Geração de Dietas com IA:** Criação de planos alimentares semanais completos e personalizados através da integração com a API da Groq.

- **Interface Moderna e Reativa:** Frontend construído com React, Vite e Styled-Components para uma experiência de usuário fluida.

- **API Documentada:** A API do backend possui documentação completa gerada com Swagger.

## Tecnologias Utilizadas

### **Backend**

- **Framework:** NestJS

- **Linguagem:** TypeScript

- **Banco de Dados:** PostgreSQL, gerenciado com TypeORM

- **Autenticação:** JWT (JSON Web Tokens) com passport-jwt

- **Inteligência Artificial:** Groq API para geração dos planos alimentares

- **Validação:** class-validator e class-transformer para DTOs

- **Documentação da API:** Swagger

### **Frontend**

- **Framework/Biblioteca:** React com Vite

- **Linguagem:** TypeScript

- **Estilização:** Styled-Components

- **Gerenciamento de Formulários:** React Hook Form com Zod para validação de esquemas

- **Requisições HTTP:** Axios

- **Testes:** Vitest e React Testing Library

### **Banco de Dados**

- **Sistema:** PostgreSQL

- **Orquestração:** Docker e Docker Compose


## Testes

O projeto conta com uma suíte de testes unitários e de integração para garantir a qualidade e a estabilidade do código.

### **Testes do Backend**
O backend utiliza o framework de testes do NestJS, que é baseado em Jest.

O que é testado: Controladores (*.controller.spec.ts), Serviços (*.service.spec.ts) e Guards (*.guard.spec.ts). Os testes validam a lógica de negócio, o tratamento de erros e a segurança das rotas.

- Como executar:

**No diretório system/backend**
> npm run test

### **Testes do Frontend**

O frontend utiliza Vitest e React Testing Library para testar os componentes da interface.

O que é testado: Componentes (*.spec.tsx) são renderizados e testados para garantir que se comportem como esperado, validando a renderização de elementos e a interação do usuário.

**Como executar:**

**No diretório frontend/nutreai**
>npm test

## Documentação da API

A API do backend é documentada utilizando Swagger. Com o servidor do backend em execução, você pode acessar a documentação interativa no seguinte endereço:

> http://localhost:5000/api/swagger

## Links auxiliares do projeto

- [Boas práticas de desenvolvimento como rodar este código](contributing.md)

- [Comandos git básicos](auxiliarReadmes/gitCommands.md)

- [Processo de code review](CODE_REVIEW.md)

- [Link para o site](https://nutreai.vercel.app/)
