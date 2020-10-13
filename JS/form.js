class Form {
    constructor(){
    }

    display(){
        var title = createElement('h2');
        title.html("Car Racing");
        title.position(150,20);
        var input = createInput('name');
        var button = createButton('play');
        var greet = createElement('h3');
        input.position(130,160);
        button.position(250,200);
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var Name = input.value();
            playerCount += 1;
            player.update(Name);
            player.updateCount(playerCount);
            greet.html('Hello ' + Name);
            greet.position(130,160);
        });
    }
}