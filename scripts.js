const newgrid_button = document.querySelector("#newgrid");
const showgrid = document.querySelector("#showgrid");
const resetbutton = document.querySelector("#resetButton");
const colorpicker = document.querySelector("#color-picker");
const fillgridcolor = document.querySelector("#fillgrid");
const rainbowcolor = document.querySelector("#rainbowbutton");
const container = document.querySelector("#container");

function createGrid(size) {
    container.innerHTML = ''; // Limpa o grid existente
    const totalSquares = size * size;

    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `${1000 / size}px`; // Ajusta o tamanho do quadrado
        square.style.height = `${990 / size}px`;
        square.addEventListener('mouseover', () => {
            const color = document.getElementById('color-picker').value;
            square.style.backgroundColor = color;
          });
      
          container.appendChild(square);
        }
      }

createGrid(16);      

newgrid_button.addEventListener('click', () => {
    const newgrid_size = parseInt(prompt('Chose the number of squares (1-100):'));

    if (isNaN(newgrid_size) || newgrid_size < 1 || newgrid_size > 100) {
        alert('Please enter a valid number between 1 and 100.');
        return;
    }
      createGrid(newgrid_size);
})


