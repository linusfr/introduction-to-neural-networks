let data = []

let m = 1
let b = 0

function setup() {
    createCanvas(800, 800)
    background(51)
}

function linearRegression() {
    let xSum = 0
    let ySum = 0

    data.forEach((vector) => {
        xSum += vector.x
        ySum += vector.y
    })

    sumX = data.reduce((prev, curr) => {
        console.log(prev)
        console.log(curr)
        prev + curr.x
    })

    console.log(sumX)
    let xMean = xSum / data.length
    let yMean = ySum / data.length
}

function drawLine() {
    let x1 = 0
    let y1 = m * x1 + b
    let x2 = 1
    let y2 = m * x2 + b

    x1 = map(x1, 0, 1, 0, width)
    y1 = map(y1, 0, 1, height, 0)

    x2 = map(x2, 0, 1, 0, width)
    y2 = map(y2, 0, 1, height, 0)

    stroke(255, 0, 255)
    line(x1, y1, x2, y2)
}

function mousePressed() {
    let x = map(mouseX, 0, width, 0, 1)
    let y = map(mouseY, 0, height, 1, 0)

    let point = createVector(x, y)
    data.push(point)
}

function draw() {
    background(51)

    data.forEach((vector) => {
        let x = map(vector.x, 0, 1, 0, width)
        let y = map(vector.y, 0, 1, height, 0)

        fill(255)
        stroke(255)
        ellipse(x, y, 8, 8)
    })
    try {
        linearRegression()
    } catch (e) {
        console.log(e)
    }
    drawLine()
}
