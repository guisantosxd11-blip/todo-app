// === Referências aos elementos do HTML ===
// document.getElementById busca o elemento pelo id e guarda na variável,
// assim não precisamos buscar de novo toda vez que formos usá-lo.
const inputTarefa = document.getElementById('input-tarefa');
const botaoAdicionar = document.getElementById('botao-adicionar');
const listaTarefas = document.getElementById('lista-tarefas');
const botaoFiltroTodas = document.getElementById('filtro-todas');
const botaoFiltroPendentes = document.getElementById('filtro-pendentes');
const botaoFiltroConcluidas = document.getElementById('filtro-concluidas');

// === Estado da aplicação ===
// "let" porque esse array vai mudar (vamos adicionar tarefas nele).
// Por enquanto ele só existe na memória: se recarregar a página, some.
// (vamos resolver isso depois, com localStorage)
let tarefas = [];

// Qual filtro está selecionado agora: 'todas', 'pendentes' ou 'concluidas'.
let filtroAtual = 'todas';

// Cria uma nova tarefa e adiciona no array.
function adicionarTarefa(texto) {
  const novaTarefa = {
    id: Date.now(), // Date.now() retorna um número (timestamp), bom o suficiente como id único aqui
    texto: texto,
    concluida: false
  };

  tarefas.push(novaTarefa); // push adiciona um item no final do array
  renderizarTarefas();
}

// Procura a tarefa pelo id e inverte o valor de "concluida" (true <-> false).
function alternarConclusao(id) {
  // find() percorre o array e retorna o primeiro item que bate com a condição
  // (aqui, o item cujo id é igual ao que recebemos).
  const tarefa = tarefas.find(function (t) {
    return t.id === id;
  });

  tarefa.concluida = !tarefa.concluida; // "!" inverte o booleano
  renderizarTarefas();
}

// Remove a tarefa com o id informado.
function removerTarefa(id) {
  // filter() cria um NOVO array só com os itens que passam o teste.
  // Aqui, mantemos todas as tarefas, exceto a que tem esse id.
  tarefas = tarefas.filter(function (t) {
    return t.id !== id;
  });

  renderizarTarefas();
}

// Retorna só as tarefas que devem aparecer, de acordo com o filtro atual.
// Não muda o array "tarefas" original, só decide o que vai ser exibido.
function obterTarefasFiltradas() {
  if (filtroAtual === 'pendentes') {
    return tarefas.filter(function (t) {
      return !t.concluida;
    });
  }

  if (filtroAtual === 'concluidas') {
    return tarefas.filter(function (t) {
      return t.concluida;
    });
  }

  return tarefas; // filtroAtual === 'todas'
}

// Percorre as tarefas filtradas e desenha cada uma como um <li> na tela.
function renderizarTarefas() {
  // Limpa a lista antes de redesenhar, pra não duplicar itens.
  listaTarefas.innerHTML = '';

  // forEach passa por cada tarefa filtrada, uma por uma.
  obterTarefasFiltradas().forEach(function (tarefa) {
    const item = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = tarefa.concluida;
    checkbox.addEventListener('change', function () {
      alternarConclusao(tarefa.id);
    });

    const texto = document.createElement('span');
    texto.textContent = tarefa.texto;

    const botaoExcluir = document.createElement('button');
    botaoExcluir.textContent = 'Excluir';
    botaoExcluir.addEventListener('click', function () {
      removerTarefa(tarefa.id);
    });

    item.appendChild(checkbox);
    item.appendChild(texto);
    item.appendChild(botaoExcluir);

    // classe usada depois no CSS para mostrar visualmente que está concluída
    if (tarefa.concluida) {
      item.classList.add('concluida');
    }

    listaTarefas.appendChild(item);
  });
}

// === Eventos ===
// addEventListener('click', ...) executa essa função sempre que o botão for clicado.
botaoAdicionar.addEventListener('click', function () {
  const texto = inputTarefa.value.trim(); // trim() remove espaços em branco do início/fim

  if (texto === '') {
    return; // não adiciona tarefa vazia
  }

  adicionarTarefa(texto);
  inputTarefa.value = ''; // limpa o input depois de adicionar
});

// Cada botão de filtro só muda a variável filtroAtual e redesenha a lista.
botaoFiltroTodas.addEventListener('click', function () {
  filtroAtual = 'todas';
  renderizarTarefas();
});

botaoFiltroPendentes.addEventListener('click', function () {
  filtroAtual = 'pendentes';
  renderizarTarefas();
});

botaoFiltroConcluidas.addEventListener('click', function () {
  filtroAtual = 'concluidas';
  renderizarTarefas();
});
