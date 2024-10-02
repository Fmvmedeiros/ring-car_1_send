/**
 * Mudar o Número do grupo de Rádio e o desenho
 */
radio.setGroup(2)
basic.showLeds(`
    # # # # #
    . . . . #
    # # # # #
    # . . . .
    # # # # #
    `)
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        radio.sendValue("Frente", 0)
    } else if (input.buttonIsPressed(Button.B)) {
        radio.sendValue("dir", 0)
    } else if (input.buttonIsPressed(Button.A)) {
        radio.sendValue("esq", 0)
    } else if (input.logoIsPressed()) {
        radio.sendValue("Tras", 0)
    } else {
        radio.sendValue("para", 0)
    }
})
