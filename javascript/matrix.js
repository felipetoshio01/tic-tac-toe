export default class GameMatrix {

    // A instância da Matrix
    static matrix = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ]

    // Faz todos os valores voltarem a ser 0
    static clearMatrix() {
        this.matrix = this.matrix.map( row => row.map( () => 0 ) )
    }
}