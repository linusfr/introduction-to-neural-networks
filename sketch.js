var data = []

function setup() {
    createCanvas(800, 800)
    background(51)
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
}
