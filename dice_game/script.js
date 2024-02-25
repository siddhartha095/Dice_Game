function startGame() {
    var player1 = (Math.floor((Math.random() * 6) + 1));
    var player2 = (Math.floor((Math.random() * 6) + 1));

    var player1Path = `./assets/dice_${player1}.jpg`;
    var player2Path = `./assets/dice_${player2}.jpg`;
    var result = document.getElementById("result");

    var elem = document.querySelectorAll('.dice');
    console.log(elem);
    elem[0].setAttribute('src', player1Path);
    elem[1].setAttribute('src', player2Path);

    if (player1 > player2) {
        result.innerHTML = ` Player 1 won the match`;
    }
    else if (player2 > player1) {
        result.innerHTML = ` Player 2 won the match`;

    }
    else {
        result.innerHTML = ` Match Draw`;

    }
}


