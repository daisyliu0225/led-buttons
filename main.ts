basic.forever(function () {
    for (let index = 0; index <= 10; index++) {
        led.plotBarGraph(
        index,
        10
        )
        basic.pause(500)
    }
})
