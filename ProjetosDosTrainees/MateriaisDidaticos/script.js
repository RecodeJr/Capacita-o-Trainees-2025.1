/*script-filters*/
function filters(categoria) {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    if (categoria === "all" || card.classList.contains(categoria)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}
