input.onButtonPressed(Button.A, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Green))
    basic.showIcon(IconNames.StickFigure)
    kitronik_servo_lite.driveBackwards(30)
    kitronik_servo_lite.turnLeft(90)
    kitronik_servo_lite.driveBackwards(30)
    kitronik_servo_lite.turnLeft(90)
    kitronik_servo_lite.driveBackwards(30)
    kitronik_servo_lite.turnLeft(90)
    kitronik_servo_lite.driveBackwards(30)
    kitronik_servo_lite.turnLeft(90)
    strip.clear()
    strip.show()
    basic.clearScreen()
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    strip.showRainbow(1, 360)
    basic.showIcon(IconNames.Pitchfork)
    basic.pause(2000)
    strip.clear()
    strip.show()
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    basic.pause(2000)
    strip.clear()
    strip.show()
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.pause(2000)
    strip.clear()
    strip.show()
    strip.showColor(neopixel.colors(NeoPixelColors.Green))
    basic.pause(2000)
    strip.clear()
    strip.show()
})
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
strip.showRainbow(1, 360)
strip.show()
strip.easeBrightness()
basic.showString("Ahoj!Volam sa ZAPET")
kitronik_servo_lite.turnLeft(270)
strip.clear()
strip.show()
