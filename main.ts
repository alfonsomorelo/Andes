input.onButtonPressed(Button.A, function () {
    mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Run, 21)
    if (mbit_Robot.Avoid_Sensor(mbit_Robot.enAvoidState.OBSTACLE)) {
        mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Back)
        basic.pause(1000)
        mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_SpinRight, 0)
        basic.pause(1000)
    } else {
        mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Run)
    }
})
basic.forever(function () {
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
})
