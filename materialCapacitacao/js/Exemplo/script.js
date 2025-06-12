// Lista de compras: array de objetos { nome, comprado }
let listaCompras = [];

const input = document.getElementById("itemInput");
const btn = document.getElementById("addBtn");
const ul = document.getElementById("lista");
const filtroBtn = document.getElementById("filtroPendentesBtn");

let listaPendentes = [];

function carregarLista() {
  const dados = localStorage.getItem("listaCompras");
  if (dados) {
    listaCompras = JSON.parse(dados);
  }
  atualizarPendentes();
}

function salvarLista() {
  localStorage.setItem("listaCompras", JSON.stringify(listaCompras));
  atualizarPendentes();
}

function atualizarPendentes() {
  listaPendentes = listaCompras.filter((item) => !item.comprado);
}

function adicionarItem() {
  const nome = input.value.trim();
  if (nome) {
    listaCompras.push({ nome, comprado: false });
    input.value = "";
    salvarLista();
    renderizarLista(mostrandoPendentes);
  } else {
    alert("Por favor, insira um item válido.");
  }
}

function marcarComoComprado(index) {
  listaCompras[index].comprado = !listaCompras[index].comprado;
  salvarLista();
  renderizarLista(mostrandoPendentes);
}

function renderizarLista(filtrarPendentes = false) {
  ul.innerHTML = "";
  let listaParaExibir = filtrarPendentes ? listaPendentes : listaCompras;
  for (let i = 0; i < listaParaExibir.length; i++) {
    const item = listaParaExibir[i];

    const indexOriginal = listaCompras.indexOf(item);
    const li = document.createElement("li");
    li.className = "item" + (item.comprado ? " comprado" : "");

    const span = document.createElement("span");
    span.textContent = item.nome;
    span.style.cursor = "pointer";
    span.title = "Clique para editar";

    span.addEventListener("click", function () {
      const inputEdit = document.createElement("input");
      inputEdit.type = "text";
      inputEdit.value = item.nome;
      inputEdit.style.flex = "1";
      inputEdit.style.fontSize = "1rem";

      function salvarEdicao() {
        const novoNome = inputEdit.value.trim();
        if (novoNome) {
          listaCompras[indexOriginal].nome = novoNome;
          salvarLista();
          renderizarLista(mostrandoPendentes);
        } else {
          renderizarLista(mostrandoPendentes);
        }
      }

      inputEdit.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          salvarEdicao();
        } else if (e.key === "Escape") {
          renderizarLista(mostrandoPendentes);
        }
      });
      inputEdit.addEventListener("blur", salvarEdicao);

      li.replaceChild(inputEdit, span);
      inputEdit.focus();
      inputEdit.select();
    });

    const btnOk = document.createElement("button");
    btnOk.textContent = item.comprado ? "Feito" : "Ok";
    btnOk.disabled = item.comprado;
    btnOk.addEventListener("click", () => marcarComoComprado(indexOriginal));

    const btnDel = document.createElement("button");
    btnDel.textContent = "🗑️";
    btnDel.className = "btnDel";
    btnDel.addEventListener("click", () => deletarItem(indexOriginal));

    li.appendChild(btnDel);
    li.appendChild(span);
    li.appendChild(btnOk);
    ul.appendChild(li);
  }
}

// Eventos
btn.addEventListener("click", adicionarItem);
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") adicionarItem();
});

// Controle do filtro de pendentes
let mostrandoPendentes = false;
filtroBtn.addEventListener("click", () => {
  mostrandoPendentes = !mostrandoPendentes;
  filtroBtn.textContent = mostrandoPendentes
    ? "Mostrar Todos"
    : "Mostrar Pendentes";
  renderizarLista(mostrandoPendentes);
});

// Inicializar lista
carregarLista();
renderizarLista();

function deletarItem(index) {
  listaCompras.splice(index, 1);
  salvarLista();
  renderizarLista(mostrandoPendentes);
}
