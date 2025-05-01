const noButton = document.getElementById("no-btn");
const yesButton = document.getElementById("yes-btn");

noButton.addEventListener("click", () => {
  // Move o botão "Não" para uma posição aleatória na tela
  const randomX = Math.random() * 90;  // Entre 0% e 90% da largura da tela
  const randomY = Math.random() * 80;  // Entre 0% e 80% da altura da tela
  noButton.style.position = 'absolute';
  noButton.style.left = `${randomX}%`;
  noButton.style.top = `${randomY}%`;
});

yesButton.addEventListener("click", () => {
  // Redireciona para o jogo2.html quando clica em "Sim"
  window.location.href = "jogo2.html";
});
