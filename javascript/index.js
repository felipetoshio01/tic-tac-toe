// =========== IMPORTS ===========
import GameMatrix from "./matrix.js";

// =========== ELEMENTS ===========
const gameBoard = document.getElementById("gameBoard");
const boardSpaces = document.querySelectorAll(".boardSpace");
const resetBtn = document.getElementById("resetBtn");

// =========== VARIABLES ===========

/* ============================
        "o" = vez do círculo
        "x" = vez do X
   ============================ */ 
let currentTurn = "o";  

// Adicione algo no click do boardSpace
gameBoard.addEventListener("click", event => {

    if (!event.target.matches(".boardSpace")) return;

    // Função de marcação na Matrix
    markMatrix(event.target);

    // Função de marcação visual
    markBoard(event.target);

    // Verifica se alguém ganhou
    GameMatrix.getWinner();
    
})

// Marca o boardSpace com X ou O
function markBoard(boardSpace) {
    
    // Verifica se já está marcada
    if (isMarked(boardSpace)) return;

    // Se for a vez do círculo
    if (currentTurn === "o") {
        boardSpace.classList.add("markedCircle");
        currentTurn = "x";  // Muda a vez
    
    // Se for a vez do X
    } else {
        boardSpace.classList.add("markedCross");
        currentTurn = "o";  // Muda a vez
    }
}

// Marca na Matrix
function markMatrix(boardSpace) {
    let spaceCoords = boardSpace.value;

    switch (spaceCoords) {

        case "00":
            GameMatrix.matrix[0][0] = currentTurn == "o" ? 1 : 4;
            break;
        
        case "01":
            GameMatrix.matrix[0][1] = currentTurn == "o" ? 1 : 4;
            break;
        
        case "02":
            GameMatrix.matrix[0][2] = currentTurn == "o" ? 1 : 4;
            break;
        
        case "10":
            GameMatrix.matrix[1][0] = currentTurn == "o" ? 1 : 4;
            break;
        
        case "11":
            GameMatrix.matrix[1][1] = currentTurn == "o" ? 1 : 4;
            break;
        
        case "12":
            GameMatrix.matrix[1][2] = currentTurn == "o" ? 1 : 4;
            break;

        case "20":
            GameMatrix.matrix[2][0] = currentTurn == "o" ? 1 : 4;
            break;

        case "21":
            GameMatrix.matrix[2][1] = currentTurn == "o" ? 1 : 4;
            break;

        case "22":
            GameMatrix.matrix[2][2] = currentTurn == "o" ? 1 : 4;
            break;
    }

    console.log(GameMatrix.matrix)
}

// Função que verifica se a boardSpace está vazia
function isMarked(boardSpace) {
    const classArray = boardSpace.classList;
    return (classArray.contains("markedCircle") || classArray.contains("markedCross")) ? true : false;
}

// Função que reinicia o jogo
resetBtn.addEventListener("click", () => {

    // Para cada boardSpace   
    boardSpaces.forEach( boardSpace => {

        GameMatrix.clearMatrix();  // Limpa a Matrix do jogo
        boardSpace.classList.remove("markedCircle", "markedCross");  // Remova ambas as classes
    })
}) 