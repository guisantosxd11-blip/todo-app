# CLAUDE.md — Gerenciador de Tarefas (To-Do List)

## Visão geral

Projeto de **aprendizado**: um gerenciador de tarefas feito com **HTML, CSS e JavaScript puro (vanilla)** — sem frameworks, sem bibliotecas, sem ferramentas de build.

O objetivo não é só o app funcionar, mas eu **entender cada conceito** enquanto construo. Estou aprendendo programação do zero, então as explicações importam tanto quanto o código.

## Stack

- HTML5
- CSS3
- JavaScript (ES6+), vanilla
- `localStorage` para persistência
- Sem Node, npm, React etc. O projeto roda abrindo o `index.html` no navegador.

## Estrutura de arquivos

```
todo-app/
├── index.html   # estrutura da página
├── style.css    # estilos
└── script.js    # toda a lógica
```

## Funcionalidades

1. **Adicionar tarefa** — campo de texto + botão
2. **Remover tarefa** — botão de excluir em cada item
3. **Marcar como concluída** — checkbox ou clique no item
4. **Filtrar** — todas / pendentes / concluídas
5. **Salvar no navegador** — `localStorage`, para os dados sobreviverem ao recarregar a página

## Modelo de dados

Cada tarefa é um objeto:

```js
{
  id: 1700000000000,   // identificador único (ex: Date.now())
  texto: "Estudar JavaScript",
  concluida: false
}
```

A lista de tarefas é um **array** desses objetos, salvo no `localStorage` como **JSON**.

## Conceitos que quero aprender (e que você deve explicar)

Conforme cada um aparecer no código, explique o conceito:

- **Variáveis** — `let`, `const` e quando usar cada um
- **Funções** — declaração, parâmetros, retorno
- **Arrays** — a lista de tarefas; métodos como `push`, `filter`, `map`, `forEach`
- **Objetos** — cada tarefa como `{ id, texto, concluida }`
- **Loops** — percorrer a lista para desenhar na tela
- **Eventos** — `addEventListener` e o evento de `click`
- **Manipulação do DOM** — criar, atualizar e remover elementos
- **JSON** — `JSON.stringify` e `JSON.parse` para salvar e ler do `localStorage`
- **Persistência de dados** — como e por que os dados sobrevivem ao recarregar

## Como você (Claude) deve me ajudar

Como estou começando do zero, siga estas diretrizes:

- **Explique antes de codar.** Antes de escrever uma função, diga em 1–2 frases o que ela faz e por quê.
- **Vá por partes.** Construa em passos pequenos (primeiro adicionar, depois renderizar, depois remover, depois filtrar, depois salvar). Não despeje tudo de uma vez.
- **Comente o código** em português, explicando o "porquê", não só o "o quê".
- **Prefira clareza a esperteza.** Código simples e legível em vez de soluções compactas e difíceis de entender.
- **Conecte com os conceitos.** Ao usar `array.filter()`, por exemplo, aproveite para explicar o conceito da lista acima.
- **Pergunte antes de mudanças grandes** na estrutura ou de adicionar algo que eu não pedi.
- **Sem frameworks ou bibliotecas externas.** O foco é aprender os fundamentos.
- Se eu pedir algo que tem um jeito melhor de fazer, me explique o trade-off em vez de só seguir.

## Controle de versão (Git/GitHub)

- O repositório remoto é `https://github.com/guisantosxd11-blip/todo-app.git` (branch `main`).
- **Toda atualização do projeto deve ser commitada e enviada (push) automaticamente para o GitHub**, sem precisar pedir confirmação a cada vez. Isso vale para mudanças em `index.html`, `style.css`, `script.js` e neste `CLAUDE.md`.
- Use mensagens de commit curtas e descritivas (em português), refletindo o passo da "Ordem sugerida de construção" que foi implementado.
- **Nunca** commite arquivos sensíveis (chaves, tokens, credenciais, arquivos de configuração local). Qualquer arquivo desse tipo deve estar listado no `.gitignore` antes de existir no projeto.

## Como rodar

Abra o `index.html` no navegador (duplo clique ou arrastar para a janela). Nenhuma instalação necessária.

## Ordem sugerida de construção

1. HTML básico: input, botão e uma `<ul>` vazia para a lista
2. Adicionar tarefa ao array e renderizar na tela
3. Marcar como concluída (mudar `concluida` e atualizar o visual)
4. Remover tarefa do array
5. Filtros (todas / pendentes / concluídas)
6. Salvar e carregar do `localStorage`
7. CSS para deixar agradável
