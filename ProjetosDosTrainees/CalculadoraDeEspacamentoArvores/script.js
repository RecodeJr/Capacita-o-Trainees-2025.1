const treeData = {
  // Base de dados de todas as árvores
  apple: {
    nome: "Macieira",
    espacamento: 4,
    descricao: "Árvore frutífera que precisa de boa ventilação e luz solar",
    expo: "Sol pleno (6-8 horas diárias)",
    soil: "Bem drenado, pH 6,0-7,0",
    poda: " Necessita frio hibernal para frutificar",
    adubo: "Balanceada NPK com potássio extra na frutificação",
  },
  banana: {
    nome: "Bananeira",
    espacamento: 2.5,
    descricao: "Planta tropical que cresce em grupos, espaçamento menor",
    expo: "Sol pleno a meia-sombra",
    soil: "Bem drenado, rico em matéria orgânica, pH 6,0-7,0",
    poda: "Remoção de folhas secas e perfilhos extras após colheita",
    adubo: "Rica em potássio e matéria orgânica",
  },
  pineapple: {
    nome: "Abacaxeira",
    espacamento: 1.2,
    descricao: "Planta baixa, permite maior densidade de plantio",
    expo: "Sol pleno",
    soil: "Excelente drenagem, pH 4,5-6,5",
    poda: "Remoção de folhas secas da base",
    adubo: "Baixo nitrogênio, rico em potássio",
  },
  grape: {
    nome: "Videira",
    espacamento: 2,
    descricao: "Trepadeira que pode ser conduzida em sistemas de suporte",
    expo: "Sol pleno",
    soil: "Bem drenado, pH 6,0-7,0",
    poda: "Poda de formação e limpeza no final do inverno",
    adubo: "Balanceada NPK com cálcio",
  },
  olive: {
    nome: "Oliveira",
    espacamento: 6,
    descricao: "Árvore mediterrânea que precisa de bastante espaço",
    expo: "Sol pleno",
    soil: "Excelente drenagem, pH 6,5-7,5",
    poda: "Poda leve de formação, adaptável ao clima seco",
    adubo: "Baixa em nitrogênio, rica em potássio",
  },
  guava: {
    nome: "Goiabeira",
    espacamento: 5,
    descricao: "Árvore frutífera de porte médio",
    expo: "Sol pleno",
    soil: "Bem drenado, pH 5,5-7,0",
    poda: "Poda de limpeza após colheita",
    adubo: "Rica em fósforo e potássio",
  },
  lemon: {
    nome: "Limoeira",
    espacamento: 4,
    descricao: "Citrus que precisa de boa circulação de ar",
    expo: "Sol pleno",
    soil: "Bem drenado, pH 6,0-7,0",
    poda: "Poda de limpeza e formação no início do ano",
    adubo: "Rica em nitrogênio e micronutrientes",
  },
  strawberry: {
    nome: "Morangueira",
    espacamento: 0.3,
    descricao: "Planta rasteira, alta densidade de plantio",
    expo: "Sol pleno a meia-sombra",
    soil: "Bem drenado, rico em matéria orgânica, pH 5,5-6,5",
    poda: "Poda de limpeza e remoção de estolões",
    adubo: "Rica em matéria orgânica e potássio",
  },
  blueberry: {
    nome: "Mirtieira",
    espacamento: 1.5,
    descricao: "Arbusto pequeno que pode ser plantado próximo",
    expo: "Sol pleno a meia-sombra",
    soil: "Muito bem drenado, ácido pH 4,5-5,5",
    poda: "Poda de formação e remoção de galhos doentes",
    adubo: "Específica para plantas acidófilas",
  },
  mango: {
    nome: "Mangueira",
    espacamento: 10,
    descricao: "Árvore frutífera tropical de grande porte",
    expo: "Sol pleno",
    soil: "Bem drenado, pH 5,5-7,0",
    poda: "Poda de formação nos primeiros anos",
    adubo: "Rica em potássio e matéria orgânica",
  },
  papaya: {
    nome: "Mamoeiro",
    espacamento: 2.5,
    descricao: "Planta herbácea frutífera de crescimento rápido",
    expo: "Sol pleno",
    soil: "Bem drenado, pH 6,0-7,0",
    poda: "Apenas remoção de folhas secas",
    adubo: "Rica em nitrogênio e potássio",
  },
  avocado: {
    nome: "Abacateiro",
    espacamento: 7,
    descricao: "Árvore tropical frutífera de médio a grande porte",
    expo: "Sol pleno a meia-sombra",
    soil: "Bem drenado, pH 6,0-7,0",
    poda: "Poda de formação e limpeza",
    adubo: "Balanceada NPK com matéria orgânica",
  },
  cashew: {
    nome: "Cajueiro",
    espacamento: 9,
    descricao: "Árvore nativa frutífera tropical resistente à seca",
    expo: "Sol pleno",
    soil: "Tolerante a solos pobres, pH 5,5-7,0",
    poda: "Poda leve de formação",
    adubo: "Baixa exigência, matéria orgânica",
  },
  nut: {
    nome: "Castanheira",
    espacamento: 13.5,
    descricao: "Árvore de grande porte de crescimento lento",
    expo: "Sol pleno",
    soil: "Bem drenado, pH 5,5-6,5",
    poda: "Poda mínima de formação",
    adubo: "Rica em matéria orgânica",
  },
  acai: {
    nome: "Açaizeiro",
    espacamento: 4.5,
    descricao: "Palmeira amazônica frutífera que prefere solo úmido",
    expo: "Sol pleno a meia-sombra",
    soil: "Solo úmido mas não encharcado, pH 5,0-6,5",
    poda: "Apenas remoção de folhas secas",
    adubo: "Rica em matéria orgânica e potássio",
  },
  jabuti: {
    nome: "Jabuticabeira",
    espacamento: 7,
    descricao: "Árvore nativa frutífera de crescimento lento",
    expo: "Sol pleno a meia-sombra",
    soil: "Bem drenado, pH 5,5-6,5",
    poda: "Poda mínima de limpeza",
    adubo: "Rica em matéria orgânica",
  },
  cupuacu: {
    nome: "Cupuaçeiro",
    espacamento: 5,
    descricao: "Árvore amazônica frutífera de porte médio",
    expo: "Meia-sombra a sol pleno",
    soil: "Bem drenado, rico em matéria orgânica, pH 5,5-6,5",
    poda: "Poda leve de formação",
    adubo: "Rica em matéria orgânica e potássio",
  },
  pitanga: {
    nome: "Pitangueira",
    espacamento: 5,
    descricao: "Árvore frutífera nativa de pequeno porte",
    expo: "Sol pleno a meia-sombra",
    soil: "Bem drenado, pH 5,5-7,0",
    poda: "Poda de limpeza após frutificação",
    adubo: "Moderada em matéria orgânica",
  },
  roma: {
    nome: "Romãzeiro",
    espacamento: 3.5,
    descricao: "Arbusto frutífero mediterrâneo resistente à seca",
    expo: "Sol pleno",
    soil: "Bem drenado, pH 6,0-7,5",
    poda: "Poda de formação e limpeza, adaptado ao clima seco",
    adubo: "Baixa exigência, balanceada NPK",
  },
  coconut: {
    nome: "Coqueiro",
    espacamento: 9,
    descricao: "Palmeira costeira de grande porte",
    expo: "Sol pleno",
    soil: "Bem drenado, tolerante à salinidade, pH 6,0-8,0",
    poda: "Apenas remoção de folhas secas, ideal para o litoral",
    adubo: "Rica em potássio e micronutrientes",
  },
  oak: {
    nome: "Carvalho",
    espacamento: 10,
    descricao: "Árvore de grande porte, precisa de muito espaço",
    expo: "Sol pleno",
    soil: "Bem drenado, pH 6,0-7,0",
    poda: "Poda de formação no inverno e limpeza",
    adubo: "Rica em matéria orgânica",
  },
  birch: {
    nome: "Vidoeiro",
    espacamento: 8,
    descricao: "Árvore de porte médio a grande",
    expo: "Sol pleno",
    soil: "Bem drenado, pH 5,5-6,5",
    poda: "Poda de formação e limpeza no inverno",
    adubo: "Moderada em nitrogênio",
  },
  ashwood: {
    nome: "Freixo",
    espacamento: 8,
    descricao: "Árvore de crescimento rápido e porte alto",
    expo: "Sol pleno",
    soil: "Bem drenado, pH 6,0-7,5",
    poda: "Poda de formação e limpeza de galhos secos",
    adubo: "Rica em matéria orgânica",
  },
  bordo: {
    nome: "Bordo",
    espacamento: 7,
    descricao: "Árvore ornamental de porte médio",
    expo: "Sol pleno a meia-sombra",
    soil: "Bem drenado, pH 6,0-7,0",
    poda: "Poda de formação e limpeza no final do inverno",
    adubo: "Rica em matéria orgânica",
  },
  eucalipito: {
    nome: "Eucalipto",
    espacamento: 3,
    descricao: "Árvore de crescimento rápido para reflorestamento",
    expo: "Sol pleno",
    soil: "Bem drenado, pH 5,5-7,0",
    poda: "Poda de formação, algumas espécies adaptadas",
    adubo: "Rica em potássio e fósforo",
  },
  latex: {
    nome: "Seringueira",
    espacamento: 7,
    descricao: "Árvore de grande porte para extração de látex",
    expo: "Sol pleno a meia-sombra",
    soil: "Bem drenado, pH 5,5-6,5",
    poda: "Poda de formação e sangria",
    adubo: "Rica em nitrogênio e potássio",
  },
  ipe: {
    nome: "Ipê",
    espacamento: 8,
    descricao: " Árvore nativa ornamental de madeira nobre",
    expo: "Sol pleno",
    soil: "Bem drenado, pH 5,5-7,0",
    poda: "Poda mínima de formação, nativa da região",
    adubo: "Rica em matéria orgânica",
  },
  brasilwood: {
    nome: "Pau-Brasil",
    espacamento: 10,
    descricao: "Árvore histórica brasileira de madeira nobre",
    expo: "Sol pleno a meia-sombra",
    soil: "Bem drenado, pH 5,5-6,5",
    poda: "Poda mínima, nativa da Mata Atlântica",
    adubo: "Rica em matéria orgânica",
  },
  cecropia: {
    nome: "Embaúba",
    espacamento: 5,
    descricao: "Árvore pioneira de crescimento rápido",
    expo: "Sol pleno",
    soil: "Tolerante a solos pobres, pH 5,0-7,0",
    poda: "Poda mínima, espécie pioneira",
    adubo: "Baixa exigência",
  },
  mahogany: {
    nome: "Mogno",
    espacamento: 13.5,
    descricao: "Árvore de madeira nobre de grande porte",
    expo: "Sol pleno a meia-sombra",
    soil: "Bem drenado, rico em nutrientes, pH 6,0-7,0",
    poda: "Poda de formação, crescimento lento",
    adubo: "Rica em matéria orgânica",
  },
  jatoba: {
    nome: "Jatobá",
    espacamento: 15.5,
    descricao: "Árvore nativa de grande porte e madeira nobre",
    expo: "Sol pleno",
    soil: "Bem drenado, pH 5,5-7,0",
    poda: "Poda mínima, nativa do Cerrado",
    adubo: "Rica em matéria orgânica",
  },
  parapine: {
    nome: "Araucária",
    espacamento: 10,
    descricao: "Conífera nativa de clima subtropical",
    expo: "Sol pleno",
    soil: "Bem drenado, pH 5,5-6,5",
    poda: "Poda de formação no inverno e limpeza",
    adubo: "Rica em matéria orgânica",
  },
  babacu: {
    nome: "Babaçu",
    espacamento: 9.5,
    descricao: "Palmeira nativa de grande porte",
    expo: "Sol pleno",
    soil: "Bem drenado, pH 5,5-6,5",
    poda: "Apenas remoção de folhas secas",
    adubo: "Rica em potássio",
  },
  buriti: {
    nome: "Buriti",
    espacamento: 7,
    descricao: "Palmeira de áreas úmidas do Cerrado",
    expo: "Sol pleno",
    soil: "Solo úmido, pH 5,0-6,5",
    poda: "Apenas remoção de folhas secas",
    adubo: "Rica em matéria orgânica",
  },
  andiroba: {
    nome: "Andiroba",
    espacamento: 10,
    descricao: "Árvore amazônica de madeira e óleo medicinal",
    expo: "Sol pleno a meia-sombra",
    soil: "Bem drenado, pH 5,5-6,5",
    poda: "Poda mínima de formação",
    adubo: "Rica em matéria orgânica",
  },
  copaiba: {
    nome: "Copaíba",
    espacamento: 13.5,
    descricao: "Árvore amazônica produtora de óleo medicinal",
    expo: "Sol pleno a meia-sombra",
    soil: "Bem drenado, pH 5,5-6,5",
    poda: "Poda mínima",
    adubo: "Rica em matéria orgânica",
  },
  cedro: {
    nome: "Cedro",
    espacamento: 10,
    descricao: "Árvore de madeira nobre aromática",
    expo: "Sol pleno a meia-sombra",
    soil: "Bem drenado, pH 6,0-7,0",
    poda: "Poda de formação",
    adubo: "Rica em matéria orgânica",
  },
  paineira: {
    nome: "Paineira",
    espacamento: 10,
    descricao: "Árvore nativa ornamental de grande porte",
    expo: "Sol pleno",
    soil: "Bem drenado, pH 5,5-7,0",
    poda: "Poda de limpeza após floração",
    adubo: "Moderada em matéria orgânica",
  },
  quaresmeira: {
    nome: "Quaresmeira",
    espacamento: 5,
    descricao: "Árvore ornamental de floração roxa",
    expo: "Sol pleno a meia-sombra",
    soil: "Bem drenado, pH 5,5-6,5",
    poda: "Poda leve após floração",
    adubo: "Rica em matéria orgânica",
  },
  jacaranda: {
    nome: "Jacarandá",
    espacamento: 10,
    descricao: "Árvore ornamental de floração azul/roxa",
    expo: "Sol pleno",
    soil: "Bem drenado, pH 6,0-7,0",
    poda: "Poda de formação e limpeza",
    adubo: "Rica em matéria orgânica",
  },
};

function calcularArvores() {
  // Verifica qual árvore e area o usuário selecionou, e se essaas constantes são validas ou vazias
  const typeTree = document.getElementById("tree").value;
  const area = parseFloat(document.getElementById("area").value);

  if (!typeTree) {
    alert("Por favor, selecione um tipo de árvore");
    return;
  }

  if (!area || area <= 0) {
    alert("Por favor, digite uma área válida");
    return;
  }

  // Pega qual árvore o usuário escolheu, e a guarda em uma constante, assim como também pega o espacamento dessa arvore na base de dados
  const arvore = treeData[typeTree];
  const espacamento = arvore.espacamento;

  // Sabendo o espaçamento, se é colocado esse ao quadrado para estabelecer a area por arvore.
  // Depois, para saber o número de árvores na area, se é dividido à area pela area por arvore
  const areaPerTree = espacamento * espacamento;
  const treeNumber = Math.floor(area / areaPerTree);

  // Multiplicando o número de árvores pela area por árvores, obtemos a area utilizada
  // Finalmente, ao dividir a area utilizada pela area e mutiplicando a area por 100, obtemos a eficiencia da area utilizada (percentagem da area que esta sendo usada)
  const utilizedArea = treeNumber * areaPerTree;
  const efficiency = ((utilizedArea / area) * 100).toFixed(1);

  // Toda essa estrutura em HTML abaixo é criada usando as duas funções abaixo, a estrutura vai aparecer no site após o usuario apertar o botão de cauculo imediatamente
  const resultdiv = document.getElementById("result");
  resultdiv.innerHTML = `
        <h3>Resultado do Cáulculo</h3>
        <div class="info-arvore">
             <strong>Árvore selecionada:</strong> ${arvore.nome}<br>
             <strong>Espaçamento recomendado</strong> ${espacamento}(m² * π) entre árvores</br>
             <strong>Descrição:</strong> ${arvore.descricao}</br>
             <strong>Exposição ao sol:</strong> ${arvore.expo}</br>
             <strong>Solo:</strong> ${arvore.soil}</br>
             <strong>Poda:</strong> ${arvore.poda}</br>
             <strong>Adubação:</strong> ${arvore.adubo}</br>
            </div>
            <p><strong>Área total disponível:</strong> ${area}m²</p>
            <p><strong>Área ocupada por cada árvore:</strong> ${areaPerTree}m² (${espacamento}²m)</p>
            <h4>Número de árvores que cabem: ${treeNumber}</h4>
            <p><strong>Área efetivamente utilizada:</strong> ${utilizedArea}m² (${efficiency}% da área total)</p>
            <p><strong>Área não utilizada:</strong> ${(
              area - utilizedArea
            ).toFixed(1)}m²</p>  
            <div style="margin-top: 15px; padding: 10px; background-color: #fff3cd; border-radius: 5px;">
                <strong> Dica:</strong> O espaçamento é importante para o desenvolvimento saudável das plantas, 
                permitindo boa circulação de ar, penetração de luz solar e espaço para o sistema radicular.
            </div>        
        `;
  resultadoDiv.style.display = "block";
}

// Essa parte garante que ao botão de cauculo ser apertado ou ao se pressionado a tecla enter, o programa em js acima ira rodar
document.getElementById("area").addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    calcularArvores();
  }
});
