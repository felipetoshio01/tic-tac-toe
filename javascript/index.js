// =========== ELEMENTS ===========
const gameBoard = document.getElementById("gameBoard");

let currentTurn = 0;  // 0 = circle, 1 = cross


gameBoard.addEventListener("click", (event) => {

    if (!event.target.matches(".boardSpace")) return;

    markBoard(event.target);
})


function markBoard(boardSpace) {
    
    if (isMarked(boardSpace)) return;

    if (currentTurn === 0) {
        boardSpace.classList.toggle("markedCircle");
        currentTurn = 1;

    } else {
        boardSpace.classList.toggle("markedCross");
        currentTurn = 0;
    }
}


function isMarked(boardSpace) {
    const classArray = boardSpace.classList;
    return (classArray.contains("markedCircle") || classArray.contains("markedCross")) ? true : false;
}