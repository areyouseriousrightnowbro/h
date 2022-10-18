function quadratic (a: number, b: number, c: number) {
    if (b ** 2 - 4 * (a * c) < 0) {
        basic.showString("impossible", 70)
    } else if (b ** 2 - 4 * (a * c) == 0) {
        basic.showString("x = x2", 70)
    } else {
        x = (b * -1 + (b ** 2 - 4 * (a * c)) ** 0.5) / (2 * a)
        x2 = (b * -1 - (b ** 2 - 4 * (a * c)) ** 0.5) / (2 * a)
        basic.showString("x1=" + x + "x2" + x2)
    }
}
input.onButtonPressed(Button.A, function () {
    if (state == 0) {
        operation += 1
        operation = operation % 3
        basic.showString("" + (choice[operation]), 70)
    } else if (state > 0) {
        temp += 1
        basic.showNumber(temp, 70)
    }
})
function set_all_variables () {
    y = 0
    x = 0
    x2 = 0
    b = 0
    m = 0
    state = 0
    temp = 0
    operation = 0
    num1 = 0
    num2 = 0
    num3 = 0
    num4 = 0
    choice = ["find line", "quadratic", "intersection"]
}
function point_of_intersection (a: number, b: number, c: number, d: number) {
    if (a == c) {
        basic.showString("IMPOSSIBLE")
    } else {
        x = d - b + (a - c)
        y = a * x + b
        basic.showString("(" + y + ", " + x + ")")
    }
}
input.onButtonPressed(Button.AB, function () {
    if (state == 0) {
        change_state()
        basic.showString("num1", 70)
    } else if (state == 1) {
        num1 = temp
        change_state()
        basic.showString("num2", 70)
    } else if (state == 2) {
        num2 = temp
        change_state()
        basic.showString("num3", 70)
    } else if (state == 3) {
        num3 = temp
        change_state()
        basic.showString("num4", 70)
    } else if (state == 4) {
        num4 = temp
        change_state()
        if (operation == 0) {
            eq_of_line(num1, num2, num3, num4)
        } else if (operation == 1) {
            quadratic(num1, num2, num3)
        } else if (operation == 2) {
            point_of_intersection(num1, num2, num3, num4)
        }
        control.reset()
    }
})
input.onButtonPressed(Button.B, function () {
    if (state > 0) {
        temp += -1
        basic.showNumber(temp, 70)
    }
})
function eq_of_line (x1: number, y1: number, x2: number, y2: number) {
    if (y1 == y2) {
        basic.showString("y=" + y1)
    } else if (x1 == x2) {
        basic.showString("x=" + x1)
    } else {
        m = (y2 - y1) / (x2 - x1)
        b = y1 - m * x1
        basic.showString("y=" + m + "x" + "+" + b)
    }
}
function change_state () {
    basic.showIcon(IconNames.Yes)
    basic.clearScreen()
    state += 1
    temp = 0
}
let num4 = 0
let num3 = 0
let num2 = 0
let num1 = 0
let m = 0
let b = 0
let y = 0
let state = 0
let x2 = 0
let x = 0
let temp = 0
let operation = 0
let choice: string[] = []
set_all_variables()
