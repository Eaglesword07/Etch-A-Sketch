
// Variables
const container = document.querySelector('#container');
const mainContainer = document.querySelector('.body-container');
const gridAmountBtn = document.querySelector('#grid-amount');
const resetBtn = document.querySelector('#reset-btn');
const blackBtn = document.querySelector('#black-btn');
const randomBgBtn = document.querySelector('#random-btn');
const userColor = document.querySelector('#color-choice');
const eraserBtn = document.querySelector('#eraser');


// Event Listeners

// Create popUp to initialize the page
window.addEventListener('load', () => {
  setTimeout((event) => {
    document.querySelector('#pop-up').style.display = 'block';
    mainContainer.style.display = 'none';
  },
    50
  )
})

// button creates grid as well as close the popup window
gridAmountBtn.addEventListener('click', () => {
  mainContainer.style.display = 'block';
  document.querySelector('#pop-up').style.display = 'none';
  createGrid();
})

// Reset the sketch
resetBtn.addEventListener('click', () => {
  location.reload();
})

// change hover to balck backgrounds
blackBtn.addEventListener('click', () => {
  hoverOver();
})

// Change hover to random colors
randomBgBtn.addEventListener('click', () => {
  addRandomRGBColors();
})

// Eraser
eraserBtn.addEventListener('click', () => {
  erasePage();
})

// User chooses color
userColor.addEventListener('input', (event) => {
  document.querySelectorAll('.grid-row').forEach((element) => {
    element.addEventListener('mouseover', () => {
      element.style.backgroundColor = event.target.value;
    })
  })
})

// Functions

// Create our grid divs
const createGrid = (amountOfGrids) => {

  amountOfGrids = parseInt(prompt(`How many grids would you like?`));
  if (isNaN(amountOfGrids)) {
    amountOfGrids = 16;
  }
  if ((amountOfGrids < 2) || (amountOfGrids > 100)) {
    alert(`Please give me a digit between 2 and 100`);
    createGrid();
  } else {

    // Using a for loop, we create each rows(gridBox) and columns(newRow) simultaneouly
    // requiring a nested second loop to create a new row(gridBox) inside the column(newRow) everytime a new column(newRow) is created
    for (let i = 0; i < amountOfGrids; i++) {
      const newRow = document.createElement('div');
      newRow.classList.add('grid-container');

      for (let j = 0; j < amountOfGrids; j++) {
        const gridBox = document.createElement('div');
        gridBox.classList.add('grid-row');
        const gridSize = 550 / amountOfGrids;
        gridBox.style.width = `${gridSize}px`;
        gridBox.style.height = `${gridSize}px`;
        newRow.appendChild(gridBox);
      }

      container.appendChild(newRow);
    }

    hoverOver();
  }
}

// Change the color of the divs to black when hovered over
const hoverOver = () => {
  document.querySelectorAll('.grid-row').forEach((element) => {
    element.addEventListener('mouseover', () => {
      element.style.backgroundColor = 'black';
    })
  })
}

// Change to random colors when hovered over
const addRandomRGBColors = () => {
  document.querySelectorAll('.grid-row').forEach((element) => {
    element.addEventListener('mouseover', () => {
      let r = Math.floor(Math.random() * 256);
      let g = Math.floor(Math.random() * 256);
      let b = Math.floor(Math.random() * 256);
      element.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
    })
  })
}


// Erase page
const erasePage = () => {
  document.querySelectorAll('.grid-row').forEach((element) => {
    element.addEventListener('mouseover', () => {
      element.style.backgroundColor = 'white';
    })
  })
}

