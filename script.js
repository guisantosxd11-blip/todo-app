// === Referências aos elementos do HTML ===
// document.getElementById busca o elemento pelo id e guarda na variável,
// assim não precisamos buscar de novo toda vez que formos usá-lo.
const inputTarefa = document.getElementById('input-tarefa');
const botaoAdicionar = document.getElementById('botao-adicionar');
const listaTarefas = document.getElementById('lista-tarefas');

// === Estado da aplicação ===
// "let" porque esse array vai mudar (vamos adicionar tarefas nele).
// Por enquanto ele só existe na memória: se recarregar a página, some.
// (vamos resolver isso depois, com localStorage)
let tarefas = [];

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

// Percorre o array "tarefas" e desenha cada uma como um <li> na tela.
function renderizarTarefas() {
  // Limpa a lista antes de redesenhar, pra não duplicar itens.
  listaTarefas.innerHTML = '';

  // forEach passa por cada tarefa do array, uma por uma.
  tarefas.forEach(function (tarefa) {
    const item = document.createElement('li');
    item.textContent = tarefa.texto;
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
