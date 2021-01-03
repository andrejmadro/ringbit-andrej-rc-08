radio.onReceivedNumber(function (receivedNumber) {
    I = receivedNumber
})
let I = 0
radio.setGroup(0)
basic.showLeds(`
    # # # # .
    # . . . .
    # # # . .
    # . . # #
    # . . # #
    `)
RingbitCar.init_wheel(AnalogPin.P1, AnalogPin.P2)
let strip = neopixel.create(DigitalPin.P0, 2, NeoPixelMode.RGB)
strip.showColor(neopixel.colors(NeoPixelColors.Green))
basic.forever(function () {
    if (I == 15) {
        RingbitCar.turnleft()
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        basic.pause(500)
    }
    if (I == 16) {
        RingbitCar.turnright()
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
        basic.pause(500)
    }
    if (I == 17) {
        RingbitCar.back()
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
        basic.pause(500)
        if (I == 18) {
            RingbitCar.back()
            basic.showLeds(`
                . . # . .
                . . # . .
                # . # . #
                . # # # .
                . . # . .
                `)
            basic.pause(500)
        }
    }
})
