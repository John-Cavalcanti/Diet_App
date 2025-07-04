# Contribuições

Em seguida há tutoriais, convenções e padrões de fluxo de contribuição para este repositório.


## Fluxo de contribuições para o projeto

Antes de mais nada deve ser feita a clonagem do repositório 

```bash
git clone https://github.com/John-Cavalcanti/Diet_App.git
```

Após isso a branch com foco principal para o desenvolvimento do projeto será a develop(não a main).

Cada desenvolvedor deve abrir uma nova branch para cada feature ou correção que for realizar na aplicação
a partir da branch principal que será a develop e nomear a branch da seguinte forma:

**feature/título-da-feature**

Dessa forma fica claro identificar qual a issue está sendo resolvida com aquele pull request.

Além dos títulos das branchs seguirem um padrão a mensagem de commit também devem ter um padrão a ser seguido e seguiremos o padrão de convetional commits, no início de cada mensagem deve ser especificado o que aquele commit realiza, exemplos :

```bash
git commit -m "feat: commit para a criação de uma feature"
git commit -m "chore: commit para alterações de ferramentas"
git commit -m "fix: commit para correção de bugs ou falhas no código"
...
```

Segue um artigo no medium sobre [conventional commits](https://medium.com/linkapi-solutions/conventional-commits-pattern-3778d1a1e657), deve ser lido caso não conheça sobre.

Após a realização da issue a branch deve ser enviada para o repositório remoto e deverá ser feito uma pull request para a branch develop, onde os líderes-técnicos as avaliarão e realizarão os devidos merges.

Envie sua branch para o repositório remoto

```bash
git add .
git commit -m "feat: mensagem explicando o que foi realizado na branch"
git push -u origin feature/titulo-da-feature
```

Crie o pull request com sua branch

![PR via pag inicial](/auxiliarReadmes/imgs/creatingPR.png)

ou acessando a aba Pull requests e clicando em New pull request selecionando sua branch em compare e logo após em create pull request

![New PR](/auxiliarReadmes/imgs/creatingPR1.png)

Clique em create pull request e adicione na descrição o que foi feito

Apesar de sabermos qual issue está sendo resolvida com base no título da branch é necessário que junto com o PR seja listado o que foi feito naquela branch, segue exemplo :

```markdown
**O que foi feito**

- criação do Endpoint X
- ajuste na estilização do componente Y
- correção de bug no componente Z
...
- assim por diante...
```

Exemplo:

![](/auxiliarReadmes/imgs/creatingPR2.png)

Dessa forma fica mais fácil para quem está revisando o código (seus líderes-técnicos) saber o que foi feito em cada commit e arquivo que foi alterado durante o desenvolvimento da branch o que nem sempre é trivial (apesar de parecer).

## Boas práticas de revisão de código - Cultura, Preparação e Aspectos Técnicos

- **Foque no código e não na pessoa:** A crítica deve ser sempre sobre o código e as escolhas técnicas, nunca o autor.

- **Clareza e construtividade:** Seja objetivo e claro oferecendo sugestões e explicações, caso haja uma abordagem melhor explique porquê.

- **Entenda o contexto da issue:** Antes de revisar, deve ser lida a descrição do pull request e a task associada, entendendo o problema que resolve ou a funcionalidade que implementa.

- **Lógica:** O código atende aos requisitos? Ele resolve o problema proposto? Existem cenários de erro ou edge cases que não foram tratados?

- **Legibilidade:** O código é fácil de entender para alguém que não o escreveu? Existe código duplicado? (Princípio DRY - Don't Repeat Yourself)

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

## Rodando o código - Frontend (React)

O código do frontend foi criado com React.js. Para que seja possível rodá-lo é preciso ter instalado o node.js e o npm.

Para instalar o node em seu computador siga as intruções do [site oficial do node.js](https://nodejs.org/pt/download)

Após sua instalação você pode verificar se o nodejs está instalado com o comando

```bash
node -v
```

O código do fronten está localizado no diretório frontend/nutreai contando da raiz do projeto
Portanto para que seja possível rodá-lo certifique-se que o seu terminal esteja neste diretório com o comando 

```bash
pwd
```

Caso esteja na raiz do repositório execute 

```bash
cd frontend/nutreai
```

Instale as dependências com o comando (isto deve demorar alguns minutos)

```bash
npm install
```

Por último rode o código com o comando

```bash
npm run dev
```

Deve aparecer algo como isso no seu terminal:

```bash
10:49:59 [vite] (client) Re-optimizing dependencies because lockfile has changed

  VITE v6.3.5  ready in 228 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

Para abrir o site no navegador, basta clicar em http://localhost:5173/ segurando o ctrl, ou acessar diretamente http://localhost:5173/ do seu navegador