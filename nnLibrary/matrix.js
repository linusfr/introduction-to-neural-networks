function Matrix(rows, cols) {
    this.rows = rows
    this.cols = cols
    this.matrix = []

    for (let i = 0; i < this.rows; i++) {
        this.matrix[i] = []

        for (let j; j < this.cols; j++) {
            this.matrix[i][j] = 0
        }
    }
}

Matrix.prototype.scale = function (n) {
    for (let i = 0; i < this.rows; i++) {
        this.matrix[i] = []

        for (let j; j < this.cols; j++) {
            this.matrix[i][j] *= n
        }
    }
}
