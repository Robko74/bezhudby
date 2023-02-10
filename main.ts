input.onButtonPressed(Button.A, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Green))
    basic.showIcon(IconNames.StickFigure)
    kitronik_servo_lite.driveBackwards(5)
    kitronik_servo_lite.turnLeft(90)
    kitronik_servo_lite.driveBackwards(5)
    kitronik_servo_lite.turnLeft(90)
    kitronik_servo_lite.driveBackwards(5)
    kitronik_servo_lite.turnLeft(90)
    kitronik_servo_lite.driveBackwards(5)
    kitronik_servo_lite.turnLeft(90)
    strip.clear()
    strip.show()
    basic.clearScreen()
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    strip.showRainbow(1, 360)
    basic.showIcon(IconNames.Pitchfork)
    strip.clear()
    strip.show()
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    music.playMelody("E B C5 A B G A F ", 120)
    strip.clear()
    strip.show()
})
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
strip.showRainbow(1, 360)
strip.show()
basic.showString("Ahoj! Volam sa ZAPET")
kitronik_servo_lite.turnLeft(360)
strip.clear()
strip.show()
