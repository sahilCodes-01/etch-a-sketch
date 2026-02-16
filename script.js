//  random color while hover over the div
function getRandomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red},${green},${blue})`;
};

const container = document.querySelector("#container");


// creat grid using flex in container
for (let i = 0; i < 256; i++) {
    const div = document.createElement("div");


    div.classList.add("newDiv")
    container.appendChild(div);
};
// it contain all the div in allDiv
const allDiv = document.querySelectorAll(".newDiv")

// color the grid cell when hover over them
function colorcell() {
    this.classList.add("active")
};

// For every grid cell, listen for when the mouse enters it, and
//  when that happens, add the active class to that specific cell so it changes color.

allDiv.forEach(cell => {
    cell.addEventListener("mouseenter", colorcell);
});


// It removes all child elements from the container, completely clearing it.before using button 
function clearContainer() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
};

// It clears the old grid and creates a new square grid of interactive cells based on the given size.
function creatGrid(size) {

    clearContainer();

    const boxSzing = 100 / size;

    // creat a correct number of cell
    for (let i = 0; i < size * size; i++) {

        const box = document.createElement("div")
        box.classList.add("boxDiv")

        // Make container square 
        box.style.width = `${boxSzing}%`;
        box.style.height = `${boxSzing}%`;


        let opacity = 1;
        // Implement random RGB color on hover and 10% opacity darkening per interaction

        box.addEventListener("mouseover", () => {
            box.classList.add("active");

            box.style.backgroundColor = getRandomColor();

            if (opacity > 0) {
                opacity -= 0.1;
                box.style.opacity = opacity;
            }
        });




        container.appendChild(box);

    }
};

creatGrid(16);


// Takw the input and Execute the function and implement the new grid
const button = document.querySelector("#myButton");

button.addEventListener("click", () => {
    const size = Number(prompt("Enter grid size"));

    if (size > 0 && size <= 100) {
        creatGrid(size);
    }

    else {
        alert("Invalid input");
    }
});
