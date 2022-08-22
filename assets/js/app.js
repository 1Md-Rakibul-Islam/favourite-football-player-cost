// player total budget
document.getElementById('btn-player-buget-calculate').addEventListener('click', function () {
    //per player buget value
    const playerBudgetField = document.getElementById('per-player-cost-field')
    const playerBudgetVlaueString = playerBudgetField.value
    const playerBudgetValue = parseFloat(playerBudgetVlaueString)

    // player total player.
    //  import playerArray length from addToCart common function.
    const playerBugetTotal = playerBudgetValue * playersArray.length

    // set the value in Player Expenses total
    const  playerExpenses= document.getElementById('total-player-budget')
    playerExpenses.innerText = playerBugetTotal
    console.log(playerBugetTotal);
})

// total budget manager and coach.


