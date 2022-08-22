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

// 