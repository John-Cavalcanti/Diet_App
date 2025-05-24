# Resumo de testss com apis de IAs

Nesse readme devem ser listadas apis que foram testadas com casos de uso e implementações simples de código mostrando como funcionam os testes e se são satisfatórios embasando a decisão de qual LLM utilizar.

## LLMs utilizadas e documentações de suas apis

## **Groq**
Foi usado os mesmos prompts para testar todos os modelos disponíveis. [link do docs com prompt](https://docs.google.com/document/d/1iu6DARuNJw2s1rvxiTKA8VUBmzsgl6qE5VWxefHl8-0/edit?usp=sharing).
- <ins>Qwen-Qwq-32b</ins> <br>
Resposta mais demorada que a maioria
Resposta bem completa, agradável e coerente
Responde em Markdown
É um modelo "preview", significa que pode ser descontinuado a qualquer momento. [Fonte (groqdocs)](https://console.groq.com/docs/models).

- <ins>Gemma2-9b-it</ins> <br>
Não indicou uma dieta diretamente. Fez mais perguntas sobre peso, alimentos preferidos, etc.
Resposta muito rápida e amigável
Responde em Markdown
Esse modelo [tem uma janela de contexto bem pequena](https://console.groq.com/docs/models) se comparado a outros modelos, talvez isso não seja interessante.

- <ins>Llama3.3-70b</ins> <br>
Resposta completa, direta ao ponto e com um tom bem profissional.
Resposta em Markdown
Algumas vezes a resposta demora um pouco, outras vezes é bem rápida. Como a quantidade de testes que foi feita é pouca, não tem como definir.
Esse é o modelo com maior janela de contexto entre os disponíveis pelo Groq.

- <ins>Llama 3.1-8b</ins> <br>
Para Carlos, fez mais perguntas para fechar um plano de dieta. Para Fernanda, diretamente criou um plano.
Tom de resposta bem similar ao do outro modelo Llama3.3-70b.
Resposta bem rápida e sem inconsistências, diferente do outro modelo Llama.

- <ins>Llama3-70b</ins> <br>
Na maioria dos testes, respondeu fazendo mais perguntas, querendo definir melhor o perfil. (talvez isso denote que o prompt/persona precisa conter mais informações).
Velocidade de resposta abaixo da média.
Tem uma janela de contexto bem pequena se comparado aos modelos Llama anteriores

- <ins>Llama3-8b</ins> <br>
Para Carlos, fez mais perguntas para fechar um plano de dieta. Para Fernanda, diretamente criou um plano.
Tom de resposta bem similar ao do outro modelo Llama3.3-70b.
A velocidade da resposta é inconsistente. As vezes tão rápida quanto o Llama-instant, outras tão devagar quanto o Llmma3-70b.
