class Form{
    constructor(){
    
    }
    display(){
        var title=createElement('h2')
        title.html('Car Racing Game')
        title.position(130,0)
        var input=createInput('Name')
        input.position(130,160)
        var Button=createButton('Submit')
        Button.position(250,200)
        var greeting=createElement('h3')
        Button.mousePressed(function(){
            input.hide()
            Button.hide()
            var name=input.value()
            playerCount++
            player.update(name)
            player.updateCount(playerCount)
            greeting.html("HELLO "+ name)
            greeting.position(130,160)
        })
        

    }

}