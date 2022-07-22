input.onButtonPressed(Button.A, function () {
    led.unplot(x, 2)
    x += -1
    led.plot(x, 2)
})
input.onButtonPressed(Button.B, function () {
    led.unplot(x, 2)
    x += 1
    led.plot(x, 2)
})
let x = 0
x = 2
led.plot(x, 2)
