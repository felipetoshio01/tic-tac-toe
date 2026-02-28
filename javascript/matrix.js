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

    // Determina se há ou quem é o ganhador no jogo
    static getWinner() {

        if (this.#rowWinner() == "o" || this.#columnWinner() == "o" || this.#diagonalWinner() == "o") {
            console.log("O ganhou")

        } else if (this.#rowWinner() == "x" || this.#columnWinner() == "x" || this.#diagonalWinner() == "o") {
            console.log("X ganhou")

        } else {
            console.log("Nada aconteceu")

        }   
    }   

    // Soma todos os valores de uma Row da Matrix
    static #rowSum(row) {
        return row.reduce((accumulator, previousValue) => accumulator + previousValue);
    }
    
    // Determina se há ou quem é o ganhador em questão das linhas
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

    // Determina se há ou quem é o ganhador em questão das colunas
    static #columnWinner() {

        for (let c = 0; c < 3; c++) {

            let sum = this.matrix[c][0] + this.matrix[c][1] + this.matrix[c][2];
            
            if (sum == 3) {
                return "o";

            } else if (sum == 12) {
                return "x";

            } 
        }

        return null;
    }

    // Determina se há ou quem é o ganhador em questão das diagonais
    static #diagonalWinner() {
        let diagonalSum1 = this.matrix[0][0] + this.matrix[1][1] + this.matrix[2][2];
        let diagonalSum2 = this.matrix[0][3] + this.matrix[1][1] + this.matrix[2][0];

        if (diagonalSum1 == 3 || diagonalSum2 == 3) {
            return "o";

        } else if ((diagonalSum1 == 12 || diagonalSum2 == 12)) {
            return "x";

        } else {
            return null;

        }
    }
}