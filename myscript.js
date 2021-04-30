function setup() {
    createCanvas(windowWidth, windowHeight)
    background(153);
    noStroke();
    textSize(16)
    slider = createSlider(0, 10, 5, 0.1)
    slider.position((width - slider.width) / 2, (height / 1.5 - slider.height));
    start = 0
    iSlider = createSlider(0, 0.1, 0.01, 0.01)
    iSlider.position((width - slider.width) / 2, (height / 1.5 + slider.height));
}

function draw() {
    background(153)
    textFont('Courier New')
    sliderValue = slider.value()
    text('Noise Detail:', slider.x - slider.width + 20, slider.y + slider.height -4)
    text(sliderValue, slider.x + slider.width + 20, slider.y + slider.height-4 )
    increment = iSlider.value()
    text('Increment:', iSlider.x - iSlider.width + 20, iSlider.y + iSlider.height -4)
    text(increment, iSlider.x + iSlider.width + 20, iSlider.y + iSlider.height-4 )
    stroke(255)
    noFill()
    beginShape()
    noiseDetail(sliderValue)
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