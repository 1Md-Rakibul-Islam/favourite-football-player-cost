let playersArray = []

function addToCart(element) {
    const PlayerName = element.parentNode.children[0].innerText
    if (playersArray.length !== 5) {
       playersArray.push(PlayerName) 
    }
    else {
        return
    }
    playersDisplay(playersArray)

}


function playersDisplay(players) {
    const playersListElement = document.getElementById('playerListUl')
    playersListElement.innerHTML = ''

    for (let i = 0; i < players.length; i++){
    const playerName = players[i]
    const playerList = document.createElement('li')
    playerList.innerHTML = `
        <li id="player-name" class="list-group-item m-2 text-white"><span id="player-number">${i + 1}. </span> ${playerName}</li>
    `
    playersListElement.appendChild(playerList)
}
}
