// =========== ELEMENTS ===========
const gameBoard = document.getElementById("gameBoard");
const boardSpaces = document.querySelectorAll(".boardSpace");
const resetBtn = document.getElementById("resetBtn");

/* ============================
        0 = vez do círculo
        1 = vez do X
   ============================ */ 
let currentTurn = 0;  


// Adicione algo no click do boardSpace
gameBoard.addEventListener("click", event => {

    if (!event.target.matches(".boardSpace")) return;

    // Função de marcação
    markBoard(event.target);
})


function markBoard(boardSpace) {
    
    // Verifica se já está marcada
    if (isMarked(boardSpace)) return;

    // Se for a vez do círculo
    if (currentTurn === 0) {
        boardSpace.classList.add("markedCircle");
        currentTurn = 1;  // Muda a vez
    
    // Se for a vez do X
    } else {
        boardSpace.classList.add("markedCross");
        currentTurn = 0;  // Muda a vez
    }
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

        boardSpace.classList.remove("markedCircle", "markedCross");  // Remova ambas as classes
    })
}) 