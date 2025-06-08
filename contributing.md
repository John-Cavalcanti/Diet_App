# Diet_App - Nutre.AI

Nutre.AI é um assistente que visa proporcionar uma rotina alimentar básica mais saudável através da geração de dietas simples com base nas preferências ou restrições alimentares de seu usuário.

Obs.: A aplicação não visa substituir o trabalho de um nutricionista profissional qualificado, apenas ajudar quem busca entender sobre como construir uma dieta básica com base em suas restrições com alimentos personalizados, ou apenas quer realizar uma reeducação alimentar para ter uma vida mais saudável com praticidade.

# Contribuições

Em seguida há tutoriais, convenções e padrões de fluxo de contribuição para este repositório.

Antes de mais nada deve ser feita a clonagem do repositório 

```bash
git clone https://github.com/John-Cavalcanti/Diet_App.git
```

## Rodando o código - Backend (NestJS)

O código do backend foi feito utilizando o framework Nestjs, contando nodemon para rodar o código em ambiente de desenvolvimento.

Para que seja possível rodar o código é necessário ter a versão mais atual do node(e npm) e NestJS instalada em seu computador.

Para instalar o node em seu computador siga as intruções do [site oficial do node.js](https://nodejs.org/pt/download)

Após sua instalação você pode verificar se o nodejs está instalado com o comando

```bash
node -v
```

Após isso é necessário que o NestJS seja instalado globalmente, o que pode ser feito pelo comando 

```bash
npm i -g @nestjs/cli
```

Cheque se o NestJS foi instalado corretamente com o comando 

```bash
nest -v
```

O código do backend está localizado no diretório system/backend contando da raiz do projeto
Portanto para que seja possível rodá-lo certifique-se que o seu terminal esteja neste diretório com o comando 

```bash
pwd
```

Caso esteja na raiz do repositório execute 

```bash
cd system/backend
```

Instale as dependências com o comando (isto deve demorar alguns minutos)

```bash
npm install
```

### Obs.: Arquivo .env

Antes de rodar o código precisamos também que seja configurado o .env do projeto contendo todas as variáveis de ambiente.
Portanto deve ser criado na raiz deste diretório um arquivo .env que sera acessado para checar valores de urls e senhas.

Por último rode o código com o comando

```bash
npm run start:dev
```

Deve aparecer algo como isto no seu terminal

```bash
> backend@0.0.1 start:dev
> nodemon

[nodemon] 3.1.10
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): src/**/* .env
[nodemon] watching extensions: ts,json,env
[nodemon] starting `ts-node -r tsconfig-paths/register src/main.ts`
[Nest] 48163  - 06/08/2025, 4:35:02 PM     LOG [NestFactory] Starting Nest application...
[Nest] 48163  - 06/08/2025, 4:35:02 PM     LOG [InstanceLoader] AppModule dependencies initialized +8ms
[Nest] 48163  - 06/08/2025, 4:35:02 PM     LOG [RoutesResolver] AppController {/api}: +4ms
[Nest] 48163  - 06/08/2025, 4:35:02 PM     LOG [RouterExplorer] Mapped {/api, GET} route +4ms
[Nest] 48163  - 06/08/2025, 4:35:02 PM     LOG [NestApplication] Nest application successfully started +1ms

Server is running on port: https://localhost:5000/api
```

Você pode checar se o código está funcionando acessando a url providenciada pelo NestJS em seu terminal

## Links para readmes auxiliares do projeto

- [Comandos git básicos](auxiliarReadmes/gitCommands.md)

