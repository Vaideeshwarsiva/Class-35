class Player {
    constructor(){
    }

    getCount() {
        var playerCountref = database.ref('playerCount');
        playerCountref.on('value', function(data) {
            playerCount = data.val();
        });
    }

    updateCount(count){
        database.ref('/').update({
            playerCount: count
        })
    }
    update(Name){
        var playerIndex = 'Player ' + playerCount;
        database.ref(playerIndex).set({
            Name: Name
        })
    }
}