function error () {
    kitronik_VIEW128x64.show("An error occurred!", 1, kitronik_VIEW128x64.ShowAlign.Left)
    kitronik_VIEW128x64.show("An error occurred!", 2, kitronik_VIEW128x64.ShowAlign.Centre)
    kitronik_VIEW128x64.show("An error occurred!", 3, kitronik_VIEW128x64.ShowAlign.Right)
    kitronik_VIEW128x64.show("An error occurred!", 4, kitronik_VIEW128x64.ShowAlign.Centre)
    kitronik_VIEW128x64.show("An error occurred!", 5, kitronik_VIEW128x64.ShowAlign.Left)
    kitronik_VIEW128x64.show("An error occurred!", 6, kitronik_VIEW128x64.ShowAlign.Centre)
    kitronik_VIEW128x64.show("An error occurred!", 7, kitronik_VIEW128x64.ShowAlign.Right)
    kitronik_VIEW128x64.show("An error occurred!", 8, kitronik_VIEW128x64.ShowAlign.Centre)
    while (true) {
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.mysterious), SoundExpressionPlayMode.InBackground)
    }
}
kitronik_VIEW128x64.setFontSize(kitronik_VIEW128x64.FontSelection.Normal)
music.setVolume(255)
music.setBuiltInSpeakerEnabled(true)
basic.showArrow(ArrowNames.South)
kitronik_VIEW128x64.controlDisplayOnOff(kitronik_VIEW128x64.onOff(true))
music.playSoundEffect(music.builtinSoundEffect(soundExpression.happy), SoundExpressionPlayMode.InBackground)
kitronik_VIEW128x64.show("micro:bit", 4, kitronik_VIEW128x64.ShowAlign.Centre, kitronik_VIEW128x64.FontSelection.Big)
kitronik_VIEW128x64.show("Operating System", 5, kitronik_VIEW128x64.ShowAlign.Centre, kitronik_VIEW128x64.FontSelection.Normal)
kitronik_VIEW128x64.show("Made by: szymontrzaskawka", 8, kitronik_VIEW128x64.ShowAlign.Left, kitronik_VIEW128x64.FontSelection.Normal)
basic.pause(5000)
music.playSoundEffect(music.builtinSoundEffect(soundExpression.mysterious), SoundExpressionPlayMode.InBackground)
kitronik_VIEW128x64.controlDisplayOnOff(kitronik_VIEW128x64.onOff(true))
kitronik_VIEW128x64.setFontSize(kitronik_VIEW128x64.FontSelection.Normal)
kitronik_VIEW128x64.clear()
kitronik_VIEW128x64.show("Welcome " + "User 1", 1, kitronik_VIEW128x64.ShowAlign.Centre)
kitronik_VIEW128x64.drawLine(kitronik_VIEW128x64.LineDirectionSelection.horizontal, 128, 0, 7)
kitronik_VIEW128x64.show("File Manager", 3, kitronik_VIEW128x64.ShowAlign.Left)
kitronik_VIEW128x64.show("No more games found.", 5, kitronik_VIEW128x64.ShowAlign.Centre)
kitronik_VIEW128x64.show("Store", 7, kitronik_VIEW128x64.ShowAlign.Left)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        error()
    }
    if (input.buttonIsPressed(Button.B)) {
    	
    }
})
