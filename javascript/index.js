// =========== IMPORTS ===========
import GameMatrix from "./matrix.js";


// =========== ELEMENTOS ===========

// Jogo em si
const gameBoard = document.getElementById("gameBoard");  // Tabuleiro todo
const boardSpaces = document.querySelectorAll(".boardSpace");  // Cada espaço individual

// Botão reset
const resetBtn = document.getElementById("resetBtn");

// Mensagem de vitória
const winMessageWrapper = document.getElementById("winMessageWrapper");  // Container da mensagem
const winMessage = document.getElementById("winMessage");  // Texto da mensagem
const closeBtn = document.getElementById("closeBtn");  // Botão de fechar a mensagem


// =========== VARIÁVEIS ===========

/* ============================
        "o" = vez do círculo
        "x" = vez do X
   ============================ */ 
let currentTurn = "x";  
let isBoardBlocked = false;

// Adicione algo no click do boardSpace
gameBoard.addEventListener("click", event => {

    if (!event.target.matches(".boardSpace")) return;

    if (isBoardBlocked) return;

    // Função de marcação na Matrix
    markMatrix(event.target);

    // Função de marcação visual
    markBoard(event.target);

    // Verifica se alguém ganhou
    analyzeBoard();
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

    if (isMarked(boardSpace)) return;

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
}

// Função que verifica se a boardSpace está vazia
function isMarked(boardSpace) {
    const classArray = boardSpace.classList;
    return (classArray.contains("markedCircle") || classArray.contains("markedCross")) ? true : false;
}

// Função que analisa o jogo e define se houve velha ou vitória
function analyzeBoard() {

    // Retorna somente se não há vencedor e o jogo não acabou (não está cheio)
    if (GameMatrix.getWinner() == null && !GameMatrix.isFull()) return;

    // Caso o AZUL ganhe (O)
    if (GameMatrix.getWinner() == "o") {
        winMessage.textContent = "Azul ganhou!";
        winMessage.style.color = "var(--primary-color)";
        winMessageWrapper.classList.add("activeMessage");
    
    // Caso o VERMELHO ganhe (X)
    } else if (GameMatrix.getWinner() == "x") {
        winMessage.textContent = "Vermelho ganhou!";
        winMessage.style.color = "var(--secondary-color)";
        winMessageWrapper.classList.add("activeMessage");
    
    // Se ninguém ganhou e está cheio, deu velha
    } else {
        winMessage.textContent = "Deu velha! Que pena.";
        winMessage.style.color = "black";
        winMessageWrapper.classList.add("activeMessage");

    }

    isBoardBlocked = true;  // Bloquei o click
}

// Função para fechar a mensagem
closeBtn.addEventListener("click", () => {
    winMessageWrapper.classList.remove("activeMessage");
})

// Função que reinicia o jogo
resetBtn.addEventListener("click", () => {

    // Reajustes de variáveis
    isBoardBlocked = false;  // Libera o click novamente
    currentTurn = "x"  // Dá o turno para a bolinha novamente
    GameMatrix.clearMatrix();  // Limpa a Matrix do jogo

    // Para cada boardSpace   
    boardSpaces.forEach( boardSpace => {
        boardSpace.classList.remove("markedCircle", "markedCross");  // Remova ambas as classes
    })
}) 