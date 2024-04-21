function DexCheck () {
    dexCheck = Math.round(input.acceleration(Dimension.Strength) / 10 - 100)
    basic.showNumber(dexCheck)
    if (6 < dexCheck) {
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Breve)), music.PlaybackMode.UntilDone)
    } else if (3 < dexCheck) {
        music.play(music.tonePlayable(349, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
    }
}
input.onButtonPressed(Button.A, function () {
    mode = modeSelector
    if (mode == 1) {
        Score_1 += 1
    }
    if (mode == 0) {
        modeSelector += 1
    }
})
function ModeLEDSelect () {
    if (modeSelector == 1) {
        basic.showLeds(`
            . . # # .
            . # . . .
            . # # # .
            . . . # .
            . # # . .
            `)
    } else if (modeSelector == 2) {
        basic.showLeds(`
            . # # . .
            . # . # .
            . # . # .
            . # . # .
            . # # . .
            `)
    } else if (modeSelector == 3) {
        basic.showLeds(`
            # . # . #
            # . # . #
            # . # . #
            # . # . #
            . # # # .
            `)
    } else if (modeSelector == 4) {
        basic.showLeds(`
            . . # # .
            . # . . .
            . # . . .
            . # . . .
            . . # # .
            `)
    } else if (modeSelector == 5) {
        basic.showLeds(`
            . # # # .
            . . # . .
            . . # . .
            . . # . .
            . # # # .
            `)
    } else if (modeSelector == 6) {
        basic.showLeds(`
            . # # # .
            . # . # .
            . # # # .
            . # . . .
            . # . . .
            `)
    } else {
    	
    }
}
function StrengthCheck () {
    if (Score_2 < Score_1) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    } else if (Score_1 < Score_2) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
    }
}
input.onButtonPressed(Button.B, function () {
    if (mode == 1) {
        Score_2 += 1
    }
    if (mode == 0) {
        modeSelector += 1
    }
})
let Score_2 = 0
let Score_1 = 0
let dexCheck = 0
let modeSelector = 0
let mode = 0
mode = 0
modeSelector = 1
let modeCount = 6
basic.forever(function () {
    if (mode == 0) {
        if (modeSelector > modeCount) {
            modeSelector = 1
        }
        if (modeSelector < 1) {
            modeSelector = modeCount
        }
    } else {
        if (mode == 1) {
            StrengthCheck()
        } else if (mode == 2) {
            DexCheck()
        } else if (mode == 3) {
            music.play(music.createSoundExpression(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        } else if (mode == 4) {
            music.play(music.createSoundExpression(WaveShape.Square, 200, 1, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
        } else if (mode == 5) {
            music.play(music.createSoundExpression(WaveShape.Noise, 200, 1, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
        } else if (mode == 6) {
            music.play(music.createSoundExpression(WaveShape.Sawtooth, 200, 1, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
        } else {
        	
        }
    }
})
