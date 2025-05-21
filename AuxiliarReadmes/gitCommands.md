# Introdução ao Git: Controle de Versão e Branching
## O que é Git?
Git é um sistema de controle de versão distribuído (DVCS) que permite rastrear mudanças em arquivos ao longo do tempo. É amplamente utilizado no desenvolvimento de software para:

Manter um histórico de alterações

Facilitar a colaboração em equipe

Gerenciar diferentes versões do projeto

Implementar recursos sem afetar a versão principal

## Conceitos Fundamentais

### Repositório (Repo)
Um diretório onde o Git rastreia as alterações nos arquivos. Pode ser local (na sua máquina) ou remoto (em serviços como GitHub, GitLab, Bitbucket).

### Commit
Um "snapshot" (foto instantânea) das alterações em um ponto específico no tempo. Cada commit tem um identificador único (hash).

### Branch (Ramificação)
Uma linha independente de desenvolvimento. Permite trabalhar em recursos ou correções sem afetar a versão principal (geralmente chamada de main ou master).

### Merge
O processo de combinar as alterações de uma branch em outra (geralmente de uma branch de feature para a main).

## Comandos Básicos

### Inicialização e Configuração

```bash
# Inicializar um novo repositório Git
git init

# Configurar usuário (globalmente)
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"
```

### Trabalhando com arquivos

```bash
# Verificar status dos arquivos
git status

# Adicionar arquivos para staging (preparação para commit)
git add nome_do_arquivo  # arquivo específico
git add .                # todos os arquivos modificados

# Fazer commit das alterações
git commit -m "Mensagem descritiva do que foi alterado"

# Ver histórico de commits
git log
```

### Trabalhando com branches

```bash
# Criar uma nova branch
git branch nome_da_branch

# Alternar para uma branch
git checkout nome_da_branch
# Ou (versão mais nova do Git):
git switch nome_da_branch

# Criar e alternar para uma nova branch em um comando
git checkout -b nome_da_nova_branch
# Ou:
git switch -c nome_da_nova_branch

# Listar todas as branches
git branch

# Mesclar uma branch na branch atual
git merge nome_da_branch_a_ser_mesclada

# Deletar uma branch
git branch -d nome_da_branch
```

### Trabalhando com repositórios remotos

```bash
# Clonar um repositório existente
git clone url_do_repositorio

# Adicionar um repositório remoto
git remote add origin url_do_repositorio

# Enviar alterações para o repositório remoto
git push -u origin nome_da_branch

# Atualizar o repositório local com as alterações do remoto
git pull origin nome_da_branch
```

## Fluxo de trabalho básico com Branches

1. **Crie uma branch** para um novo recurso ou correção
    ```bash
    git checkout -b minha-nova-feature
    ```

2. Faça suas alterações e commit 
    ```bash
    git add .
    git commit -m "Implementei a nova funcionalidade X"
    ```

3. Envie a branch para o repositório remoto
    ```bash
    git push origin minha-nova-feature
    ```

4. Faça mesclagem das alterações para o código principal(via merge request)

5. Atualize sua branch main local
    ```bash
    git checkout main
    git pull origin main
    ```

6. Delete a branch local (Opcional)
    ```bash
    git branch -d minha-nova-feature
    ```

## Dicas adicionais

1. Sempre verifique em qual branch você está (git status ou git branch) antes de fazer alterações

2. Faça commits pequenos e frequentes com mensagens descritivas

3. Mantenha sua branch main atualizada com o repositório remoto

4. Resolva conflitos assim que eles aparecerem - não os deixe acumular

## Recursos Adicionais

- [Documentação oficial do Git](https://git-scm.com/doc)

- [GitHub Guides](https://docs.github.com/en)

- [Git - Guia Prático](https://rogerdudler.github.io/git-guide/index.pt_BR.html)

Este README oferece apenas uma visão geral. À medida que você se familiariza com o Git, explore recursos mais avançados como rebase, stash, tags e hooks.