var currentRoom = "start";
var commands = ["go", "pickup", "inventory", "talk"];
var inventory = ["sword", "shield"];

var gameText = document.getElementById('game-text')
var userInput = document.getElementById('user-input')

function changeRoom(dir) {
    if (rooms[currentRoom].directions[dir] !== undefined) {
        currentRoom = rooms[currentRoom].directions[dir]
        gameText.innerHTML += "<p>" + rooms[currentRoom].description + "</p>";
    } else {
        gameText.innerHTML += "<p>You cannot go that way!</p>";
    }


}

function showHelp() {
    gameText.innerHTML += "<p>Here are the possible commands: </p>";
    gameText.innerHTML += "<p><ul>";
    for (var i = 0; i < commands.length; i++) {
        gameText.innerHTML += "<li>" + commands[i] + "</li>";
    }
    gameText.innerHTML += "</ul></p>";

}

function showInventory() {
    if (inventory.length === 0) {
        gameText.innerHTML += "<p>You are not carrying anything!</p>";
        return;
    }
    gameText.innerHTML += "<p>Here is your inventory: </p>";
    gameText.innerHTML += "<p><ul>";
    for (var i = 0; i < inventory.length; i++) {
        gameText.innerHTML += "<li>" + inventory[i] + "</li>";
    }
    gameText.innerHTML += "</ul></p>";

}

function playerInput(input) {
    var command = input.split(" ")[0];
    switch (command) {
        case "go":
            var dir = input.split(" ")[1];
            changeRoom(dir);
            break;
        case "help":
            showHelp();
            break;
        case "inventory":
            showInventory();
            break;
        default:
            gameText.innerHTML += "<p>Invalid command!</p>";
    }
}


gameText.innerHTML += "<p>" + rooms.start.description + "</p>";

userInput.addEventListener('keyup', e => {
    if(e.key === 'Enter'){
        let input = userInput.value.toLowerCase();
        userInput.value = '';
        playerInput(input);
    }
})


