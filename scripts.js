// script.js

// Selecionar elementos do DOM
const container = document.getElementById("container");
const resetButton = document.getElementById("resetButton");

// Função para criar a grade
function createGrid(size) {
  // Limpar o container existente
  container.innerHTML = "";

  // Calcular o tamanho de cada quadrado
  const squareSize = 960 / size;

  // Criar os quadrados
  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    // Adicionar evento de hover com randomização de cores
    square.addEventListener("mouseover", () => {
      const randomColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
      square.style.backgroundColor = randomColor;

      // Aplicar escurecimento progressivo
      let currentOpacity = parseFloat(square.style.opacity) || 0;
      if (currentOpacity < 1) {
        square.style.opacity = currentOpacity + 0.1;
      }
    });

    // Adicionar quadrado ao container
    container.appendChild(square);
  }
}

// Função para redefinir a grade
resetButton.addEventListener("click", () => {
  let gridSize = prompt("Digite o tamanho da grade (máx. 100):");
  gridSize = Math.min(100, Math.max(1, parseInt(gridSize))); // Limitar entre 1 e 100
  createGrid(gridSize);
});

// Inicializar a grade padrão
createGrid(16);
