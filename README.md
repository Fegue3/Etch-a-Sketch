# Etch-a-Sketch

A simple implementation of an Etch-a-Sketch drawing application built using web technologies. This project is designed to provide a fun and interactive way to create simple drawings directly in your browser.

## Features
- **Interactive Drawing**: Draw by hovering or clicking on the grid.
- **Customizable Grid Size**: Choose the resolution of your drawing grid.
- **Color Options**: Select from different colors to enhance your creativity.
- **Reset Functionality**: Clear the grid and start fresh anytime.

## Getting Started

### Prerequisites
To use this project, you need a modern web browser. No additional software or installation is required.

### Installation
1. Clone this repository:
   ```bash
   git clone https://github.com/Fegue3/Etch-a-Sketch.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Etch-a-Sketch
   ```
3. Open the `index.html` file in your preferred browser to start using the application.

### Demo
You can try the application live by visiting the [Etch-a-Sketch Demo](https://fegue3.github.io/Etch-a-Sketch/).

## Usage
1. Open the application in your browser.
2. Adjust the grid size if needed.
3. Start drawing by moving your cursor over the grid.
4. Use the color options to customize your drawing.
5. Click the reset button to clear the grid.

## Code Examples

### Creating the Drawing Grid
```javascript
function createGrid(size) {
    const container = document.querySelector('.grid-container');
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        const gridElement = document.createElement('div');
        gridElement.classList.add('grid-item');
        container.appendChild(gridElement);
    }
}
```

### Handling Grid Reset
```javascript
function resetGrid() {
    const container = document.querySelector('.grid-container');
    container.innerHTML = '';
    createGrid(currentSize);
}
```

## Limitations
- **Mobile Support**: This application is currently optimized for desktop browsers. A mobile-friendly version has not yet been implemented.

## Credits
This project was developed by [Fegue3](https://github.com/Fegue3). Feel free to explore my other repositories for more projects.

## Contributing
Contributions are welcome! If you have ideas to improve the application or want to fix issues, feel free to open a pull request or submit an issue.



