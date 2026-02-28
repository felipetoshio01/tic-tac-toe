export default class GameMatrix {

    /* Considere:
        - 1 = O
        - 4 = X
    */

    // A instância da Matrix
    static matrix = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];

    // Faz todos os valores voltarem a ser 0
    static clearMatrix() {
        this.matrix = this.matrix.map( row => row.map( () => 0 ) );
    }


    static getWinner() {

        if (this.#rowWinner() == "o") {
            console.log("O ganhou")

        } else if (this.#rowWinner() == "x") {
            console.log("X ganhou")

        } else {
            console.log("Nada aconteceu")

        }

    }   


    // Soma todos os valores de uma Row da Matrix
    static #rowSum(row) {
        return row.reduce((accumulator, previousValue) => accumulator + previousValue);
    }
    
    static #rowWinner() {

        for (let row of this.matrix) {

            if (this.#rowSum(row) == 3) {
                return "o";

            } else if (this.#rowSum(row) == 12) {
                return "x";

            } 
        };

        return null;
    }
}