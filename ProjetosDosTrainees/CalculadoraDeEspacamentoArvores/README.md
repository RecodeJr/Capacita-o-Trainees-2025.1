# 🌳 Calculadora de Espaçamento de Árvores

**Projeto Recode - Pedro Costa Santos Barreto**

Uma aplicação web interativa para calcular a quantidade ideal de árvores que podem ser plantadas em uma determinada área, considerando o espaçamento adequado para cada espécie.

## 📋 Sobre o Projeto

- Esta calculadora foi desenvolvida para ajudar agricultores, paisagistas, engenheiros agrônomos e entusiastas da jardinagem a planejar o plantio de árvores de forma eficiente e sustentável. A ferramenta considera as características específicas de cada espécie, incluindo seu espaçamento ideal, necessidades de solo, exposição solar e cuidados especiais. Após disto, a área colocada pelo usuário é colocada como uma constante na lógica da cauculadora.
- Após o programa verificar se uma arvore foi escolhida, e se uma área maior que 0 foi escolhida, se é cauculado a Area por Árvore colocando o Espaçamento da mesma ao quadrado. Depois divide-se a Area colocada pelo usuário pela Área Por Árvore para obter o Número de Árvores totais. Depois é multiplicado o Numero de Árvores pela Area Por Árvores para assim obter a Area Total Utilizada. E finalmente, divide-se a Área Total Utilizada pela Área colocada pelo usuário (multiplicada por 100) para conseguir a Eficiência da Utilização Da Area.
- Depois disso o código js já formata a resposta em html com os dados e as contas feitas debaixo da cauculadora.

## 📊 Informações Fornecidas

Para cada cálculo, a aplicação exibe:

- Número total de árvores que cabem na área
- Área ocupada por cada árvore
- Percentual de aproveitamento da área
- Área não utilizada
- Informações técnicas da espécie selecionada

## 🚀 Funcionalidades

- **Cálculo automático** do número de árvores por área
- **40+ espécies** catalogadas, incluindo:
  - Árvores frutíferas (macieira, mangueira, cajueiro, etc.)
  - Árvores nativas brasileiras (ipê, pau-brasil, jacarandá, etc.)
  - Palmeiras (açaizeiro, coqueiro, buriti, etc.)
  - Árvores de reflorestamento (eucalipto, araucária, etc.)
- **Informações detalhadas** sobre cada espécie:
  - Espaçamento recomendado
  - Exposição solar necessária
  - Tipo de solo ideal
  - Técnicas de poda
  - Adubação adequada
- **Análise de eficiência** da área utilizada
- **Interface responsiva** e fácil de usar

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Esqueleto e estrutura da aplicação
- **CSS3** - Estilização e design modernista e minimalista inspirado no estilo BauHaus
- **JavaScript (ES6+)** - Lógica de cálculo, armazenamento de informação e interatividade

## 📁 Estrutura do Projeto

```
projeto-calculadora-arvores/
│
├── index.html          # Página principal
├── style.css           # Estilo e design da aplicação
├── script.js           # Lógica de cálculo e armazenamento de informações sobre as arvores
└── README.md           # Documentação
```

## ⚙️ Como Usar

1. **Acesse o site** do projeto https://ollopo77br.github.io/Projeto-Recode-Cauculadora-de-espa-amento-de-rvores-/
2. **Selecione** a espécie de árvore desejada no dropdown
3. **Digite** a área disponível em metros quadrados
4. **Clique** em "Calcular" ou pressione Enter
5. **Visualize** os resultados detalhados

### Exemplo de Uso

- **Árvore selecionada:** Macieira
- **Espaçamento recomendado** 4(m² \* π) entre árvores
- **Descrição:** Árvore frutífera que precisa de boa ventilação e luz solar
- **Exposição ao sol:** Sol pleno (6-8 horas diárias)
- **Solo:** Bem drenado, pH 6,0-7,0
- **Poda:** Necessita frio hibernal para frutificar
- **Adubação:** Balanceada NPK com potássio extra na frutificação

- **Área total disponível:** 1000m²

- **Área ocupada por cada árvore:** 16m² (4²m)
- **Número de árvores que cabem:** 62

- **Área efetivamente utilizada:** 992m² (99.2% da área total)

- **Área não utilizada:** 8.0m²

## 🌿 Espécies Disponíveis

### Frutíferas

- Macieira, Bananeira, Abacaxeira, Videira, Oliveira
- Goiabeira, Limoeiro, Morangueira, Mirtieira
- Mangueira, Mamoeiro, Abacateiro, Cajueiro

### Nativas Brasileiras

- Ipê, Pau-Brasil, Jacarandá, Paineira, Quaresmeira
- Jabuticabeira, Pitangueira, Embaúba
- Jatobá, Andiroba, Copaíba, Cedro

### Palmeiras

- Açaizeiro, Coqueiro, Babaçu, Buriti

### Outras

- Castanheira, Mogno, Eucalipto, Seringueira, Araucária

## 💡 Dicas de Uso

- O espaçamento é calculado considerando o desenvolvimento saudável das plantas,
  permitindo boa circulação de ar e penetração de luz solar,
  e garantindo espaço adequado para o sistema radicular.
- As informações são baseadas em práticas agronômicas recomendadas e informadas por especialistas

## 🔧 Instalação Local

1. **Clone o repositório:**

```bash
git clone https://github.com/Ollopo77BR/calculadora-arvores.git
```

2. **Navegue até o diretório:**

```bash
cd calculadora-arvores
```

3. **Abra no navegador:**

- Abra o arquivo `index.html` diretamente no navegador
- Ou use um servidor local como Live Server (VS Code)

## 📝 Melhorias Futuras

- [ ] Adicionar mais espécies de árvores nativas e extrangeiras
- [ ] Implementar sistema de favoritagem de árvores (árvores com mais likes sendo mostradas no topo da pagina)
- [ ] Adicionar mapas de plantio visual para auxiliar a vizualização
- [ ] Incluir calculadora de custos e retorno de investimentos
- [ ] Adicionar informações sobre época de plantio
- [ ] Implementar exportação de relatórios
- [ ] Adicionar uma aba de fórums para discussões
- [ ] Melhorar a cauculadora para conseguir receber areas não quadráticas
- [ ] Adicionar algúm tipo de minigame competitivo online para reter visitantes

## 👨‍💻 Autor

**Pedro Costa Santos Barreto**  
Projeto desenvolvido como parte de um programa da Recode

## 🌍 Impacto Ambiental

Esta ferramenta contribui para:

- ✅ Planejamento sustentável de áreas verdes
- ✅ Otimização do uso do solo
- ✅ Preservação de espécies nativas
- ✅ Educação ambiental
- ✅ Agricultura consciente

---

⭐ Se este projeto foi útil para você, considere divulgar este repositório!

🐛 Encontrou um bug ou tem uma sugestão? Abra uma [issue](https://github.com/seu-usuario/calculadora-arvores/issues)!
