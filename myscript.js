function setup() {
    createCanvas(windowWidth, windowHeight)
    background(153);
    noStroke();
    textSize(16)
    noiseSlider = createSlider(0, 10, 5, 0.1)
    noiseSlider.position((width - noiseSlider.width) / 2, (height / 1.5 - noiseSlider.height));
    start = 0
    iSlider = createSlider(0, 0.1, 0.01, 0.01)
    iSlider.position((width - noiseSlider.width) / 2, (height / 1.5 + noiseSlider.height));
}

function draw() {
    background(153)
    textFont('Courier New')
    noiseSliderValue = noiseSlider.value()
    text('Noise Detail:', noiseSlider.x - noiseSlider.width + 20, noiseSlider.y + noiseSlider.height - 4)
    text(noiseSliderValue, noiseSlider.x + noiseSlider.width + 20, noiseSlider.y + noiseSlider.height - 4)
    increment = iSlider.value()
    text('Increment:', iSlider.x - iSlider.width + 20, iSlider.y + iSlider.height - 4)
    text(increment, iSlider.x + iSlider.width + 20, iSlider.y + iSlider.height - 4)
    stroke(255)
    noFill()
    beginShape()
    noiseDetail(noiseSliderValue)
    xoff = start
    for (x = 0; x < width; x++) {
        let y = noise(xoff) * height / 1.8 + 20
        vertex(x, y)
        xoff += increment
    }
    start += increment
    endShape()
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    slider.position((width - slider.width) / 2, (height / 1.5 - slider.height));
    iSlider.position((width - slider.width) / 2, (height / 1.5 + slider.height));
}