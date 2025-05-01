const noButton = document.getElementById("no-btn");
const yesButton = document.getElementById("yes-btn");

// Quando o botão "Não" for clicado
noButton.addEventListener("click", () => {
  // Move o botão "Não" para uma posição aleatória na tela
  const randomX = Math.random() * 90;  // Entre 0% e 90% da largura da tela
  const randomY = Math.random() * 80;  // Entre 0% e 80% da altura da tela
  noButton.style.position = 'absolute';
  noButton.style.left = `${randomX}%`;
  noButton.style.top = `${randomY}%`;
});

// Quando o botão "Sim" for clicado
yesButton.addEventListener("click", () => {
  // Redireciona para serio.php
  window.location.href = "serio.php";
});
