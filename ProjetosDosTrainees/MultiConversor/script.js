// 1. CAPTURAR OS ELEMENTOS DO HTML
const tipoSelect = document.getElementById("tipo");
const valorInput = document.getElementById("valor");
const deSelect = document.getElementById("de");
const paraSelect = document.getElementById("para");
const resultadoDiv = document.getElementById("resultado");

// 2. DEFINIR AS UNIDADES
const unidades = {
  comprimento: ["Metros", "Quilômetros", "Pés", "Milhas"],
  temperatura: ["Celsius", "Fahrenheit", "Kelvin"],
  massa: ["Quilogramas", "Gramas", "Libras", "Onças"],
  tempo: ["Segundos", "Minutos", "Horas", "Dias"],
};

// 3. FUNÇÕES

function realizarConversao() {
  const valor = parseFloat(valorInput.value);
  const de = deSelect.value;
  const para = paraSelect.value;

  if (isNaN(valor)) {
    resultadoDiv.textContent = "";
    return;
  }

  let resultado;

  if (de === "metros" && para === "quilômetros") {
    resultado = valor / 1000;
  } else if (de === "quilômetros" && para === "metros") {
    resultado = valor * 1000;
  } else if (de === "metros" && para === "pés") {
    resultado = valor * 3.281;
  } else if (de === "pés" && para === "metros") {
    resultado = valor / 3.281;
  }

  // Massa
  else if (de === "quilogramas" && para === "gramas") {
    resultado = valor * 1000;
  } else if (de === "gramas" && para === "quilogramas") {
    resultado = valor / 1000;
  }

  // Temperatura
  else if (de === "celsius" && para === "fahrenheit") {
    resultado = (valor * 9) / 5 + 32;
  } else if (de === "fahrenheit" && para === "celsius") {
    resultado = ((valor - 32) * 5) / 9;
  }

  // Se as unidades 'de' e 'para' forem iguais
  else if (de === para) {
    resultado = valor;
  }

  // Se a conversão não foi implementada
  else {
    resultadoDiv.textContent = "Conversão não suportada ainda.";
    resultadoDiv.classList.add("error");
    resultadoDiv.classList.remove("success");
    return;
  }

  resultadoDiv.textContent = `${valor} ${de} equivalem a ${resultado.toFixed(
    2
  )} ${para}.`;
  resultadoDiv.classList.add("success"); // Adiciona a classe de sucesso
  resultadoDiv.classList.remove("error"); // Remove a de erro, se houver
}

function bloquearOpcaoIgual() {
  const selecionadoDe = deSelect.value;
  for (const option of paraSelect.options) {
    option.disabled = option.value === selecionadoDe;
  }

  if (paraSelect.options[paraSelect.selectedIndex].disabled) {
    for (let i = 0; i < paraSelect.options.length; i++) {
      if (!paraSelect.options[i].disabled) {
        paraSelect.selectedIndex = i;
        break;
      }
    }
  }
}

function atualizarOpcoes() {
  const tipoSelecionado = tipoSelect.value;
  const opcoes = unidades[tipoSelecionado];

  deSelect.innerHTML = "";
  paraSelect.innerHTML = "";

  opcoes.forEach((opcao) => {
    const optionDe = document.createElement("option");
    optionDe.textContent = opcao;
    optionDe.value = opcao.toLowerCase();
    deSelect.appendChild(optionDe);

    const optionPara = document.createElement("option");
    optionPara.textContent = opcao;
    optionPara.value = opcao.toLowerCase();
    paraSelect.appendChild(optionPara);
  });

  bloquearOpcaoIgual();
}

// 4. ADICIONAR OS EVENTOS
tipoSelect.addEventListener("change", () => {
  atualizarOpcoes();
  realizarConversao();
});

valorInput.addEventListener("input", realizarConversao);

deSelect.addEventListener("change", () => {
  bloquearOpcaoIgual();
  realizarConversao();
});

paraSelect.addEventListener("change", realizarConversao);

// 5. INICIALIZAÇÃO
atualizarOpcoes();
realizarConversao();
