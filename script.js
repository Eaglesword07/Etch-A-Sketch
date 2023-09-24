
// Variables
const container = document.querySelector('#container');
const gridAmountBtn = document.querySelector('#grid-amount');


gridAmountBtn.addEventListener('click', () => {
  createGrid();
})

// Create our grid divs
const createGrid = (amountOfGrids) => {

  amountOfGrids = parseInt(prompt("How many grids would you like?"));

  if ((amountOfGrids < 2) || (amountOfGrids > 100)) {
    alert(`Please give me a number between 2 and 100`);
  } else {

    // Using a for loop, we create each rows(gridBox) and columns(newRow) simultaneouly
    // requiring a nested second loop to create a new row(gridBox) inside the column(newRow) everytime a new column(newRow) is created
    for (let i = 0; i < amountOfGrids; i++) {
      const newRow = document.createElement('div');
      newRow.classList.add('grid-container');

      for (let j = 0; j < amountOfGrids; j++) {
        const gridBox = document.createElement('div');
        gridBox.classList.add('grid-row');
        const gridSize = 960 / amountOfGrids;
        gridBox.style.width = `${gridSize}px`;
        gridBox.style.height = `${gridSize}px`;
        newRow.appendChild(gridBox);
      }

      container.appendChild(newRow);
    }

    hoverOver();
  }
}

// Change the color of the divs when hovered over
const hoverOver = () => {
  document.querySelectorAll('.grid-row').forEach((element) => {
    element.addEventListener('mouseover', () => {
      element.classList.remove('grid-row');
      element.classList.add('hover-grid-row');
    })
  })
}



