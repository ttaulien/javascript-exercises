const grid = document.querySelector('#grid');
const resetButton = document.querySelector('#reset');
const clearButton = document.querySelector('#clear');

function createGrid(size) {
    // Clear existing grid
    grid.innerHTML = '';
    
    // Update CSS grid to match new size
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
    // Create grid items
    for (let i = 0; i < size * size; i++) {
        const div = document.createElement('div');
        div.classList.add('grid-item');
        div.addEventListener('mouseover', () => {
            div.classList.add('hover');
        });
        grid.appendChild(div);
    }
}

resetButton.addEventListener('click', () => {
    const newSize = parseInt(prompt("Enter new grid size (e.g., 16 for 16x16):"));
    if (newSize && newSize > 0 && newSize <= 100) {
        createGrid(newSize);
    } else {
        alert("Please enter a valid number between 1 and 100");
    }
});

clearButton.addEventListener('click', () => {
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(item => item.classList.remove('hover'));
});

// Create initial grid
createGrid(16);
