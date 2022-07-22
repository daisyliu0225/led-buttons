input.onButtonPressed(Button.A, function () {
    led.unplot(x, y)
    x += -1
    if (x == -1) {
        x = 4
    }
    led.plot(x, y)
})
input.onButtonPressed(Button.AB, function () {
    led.unplot(x, y)
    y += -1
    if (y == -1) {
        y = 4
    }
    led.plot(x, y)
})
input.onButtonPressed(Button.B, function () {
    led.unplot(x, y)
    x += 1
    if (x == 5) {
        x = 0
    }
    led.plot(x, y)
})
let y = 0
let x = 0
x = 2
y = 2
led.plot(x, y)
