# Guia de Revisão de Código (Code Review)

Este documento estabelece as diretrizes e boas práticas para o processo de revisão de código, visando garantir a qualidade, manutenibilidade e segurança do nosso software, ao mesmo tempo que promove uma cultura de colaboração e aprendizado contínuo.

# Cultura e Princípios Fundamentais

A revisão de código é uma oportunidade de aprendizado e melhoria para todos os envolvidos. As seguintes diretrizes, extraídas de nossas boas práticas, formam a base de nossa cultura de revisão:

Foque no código e não na pessoa: A crítica deve ser sempre sobre o código e as escolhas técnicas, nunca sobre o autor. O objetivo é a qualidade do produto final.

Clareza e construtividade: Seja objetivo e claro ao oferecer sugestões. Se uma abordagem melhor for proposta, explique o porquê, compartilhando conhecimento.

Entenda o contexto da issue: Antes de iniciar a revisão, é fundamental ler a descrição do Pull Request (PR) ou Merge Request (MR) e a tarefa associada para compreender o problema que está sendo resolvido ou a funcionalidade implementada.

# Quem Revisa

Líderes Técnicos.

- João Victor Cavalcanti
- Paula Carolina Oliveira dos Santos

# Critérios Verificados

- Lógica e Funcionalidade:

    - O código atende aos requisitos da tarefa?

    - Ele resolve o problema proposto de forma eficaz?

    - Existem cenários de erro ou edge cases que não foram tratados?

- Legibilidade e Manutenibilidade:

    - O código é fácil de entender para alguém que não o escreveu?

    - Nomes de variáveis, funções e classes são claros e descritivos?

    - Existe código duplicado? (Princípio DRY - Don't Repeat Yourself).

    - Funções e classes são coesas e têm uma única responsabilidade?

- Boas Práticas e Padrões:

    - O código segue o guia de estilo (style guide) do projeto/linguagem?

    - Foram utilizados os padrões de projeto (design patterns) adequados?

- Testes:

    - A nova funcionalidade está coberta por testes unitários, de integração ou E2E?

    - Os testes existentes continuam passando?

    - Os testes são relevantes e verificam os cenários importantes?

# Quando um Pull Request pode ser aprovado

Para que um Pull Request seja mesclado, é obrigatória a validação e aprovação de um Líder Técnico. Ele será o responsável por verificar se todos os requisitos deste guia foram cumpridos antes de autorizar o merge.
