basic.showLeds(`
    # # # # #
    # . . . #
    # . . . #
    # . . . #
    # # # # #
    `)
basic.showLeds(`
    . . . . .
    . # # # .
    . # . # .
    . # # # .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . # # # .
    . # . # .
    . # # # .
    . . . . .
    `)
basic.showLeds(`
    # # # # #
    # . . . #
    # . . . #
    # . . . #
    # # # # #
    `)
basic.clearScreen()
for (let y = 0; y <= 4; y++) {
    for (let x = 0; x <= y; x++) {
        led.plot(x, y)
        basic.pause(100)
    }
}
basic.clearScreen()
for (let x = 0; x <= 4; x++) {
    for (let y = 0; y <= x; y++) {
        led.plot(x, y)
        basic.pause(100)
    }
}
basic.clearScreen()
for (let y = 0; y <= 4; y++) {
    for (let x = 0; x <= 4; x++) {
        led.plot(x, y)
        basic.pause(100)
    }
}
basic.clearScreen()
for (let x = 0; x <= 4; x++) {
    for (let y = 0; y <= 4; y++) {
        led.plot(x, y)
        basic.pause(100)
    }
}
