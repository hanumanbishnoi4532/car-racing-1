class Form{
    constructor(){

    }
    display(){
        var title=createElement('h2');
        title.html("Car Racing Game");
        title.position(130,0);

        var input=createInput("Name");
        var button=createButton("play");
        input.position(130,160);
        button.position(200,200);
        button.mousePressed(function(){
        input.hide();
        button.hide();
        playerCount+=1;
        player.updateCount(playerCount);
        player.update(name);
        var greating=createElement('h2');
        greating.html("hii friend"+name);
        greating.position(200,200);

        })
    }
}