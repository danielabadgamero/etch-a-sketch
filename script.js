const grid = document.querySelector("main");
const reset = document.querySelector("button");
const numberOfSquares = document.querySelector("#size");

let gridSize

grid.style.cssText = "height: 100vh; width: 100vh; display: flex; flex-wrap: wrap;"

numberOfSquares.addEventListener('input', () => {
    grid.innerHTML = "";
    gridSize = document.getElementById("size").value;
    for (let i = 1; i <= gridSize * gridSize; i++) {
        const square = document.createElement("div");
        square.style.cssText = `height: calc(100vh / ${gridSize}); width: calc(100vh / ${gridSize}); border: ${1 / gridSize}px solid black; border-radius: ${1 / gridSize}px; box-sizing: border-box;`
        square.setAttribute("id", `square${i}`)
        grid.appendChild(square);
    }
    
    for (let i = 1; i <= gridSize * gridSize; i++) {
        document.getElementById("square" + i).addEventListener("mouseover", () => {
            document.getElementById("square" + i).classList.add("hover");
        })
    }
})

reset.addEventListener("click", () => {
    for (let i = 1; i <= gridSize * gridSize; i++) {
        document.getElementById("square" + i).classList.remove("hover");
    }
})