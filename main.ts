input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    index += -1
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    index += 1
})
let index = 0
basic.forever(function () {
    basic.showNumber(index)
})
