basic.forever(function () {
    if (input.soundLevel() > 50) {
        basic.showIcon(IconNames.Sad)
    } else {
        basic.showIcon(IconNames.Happy)
    }
})
