// player total budget
document.getElementById('btn-player-buget-calculate').addEventListener('click', function () {
    //per player buget value
    const playerBudgetValue = getInputVlaueById('per-player-cost-field')
    console.log(playerBudgetValue);

    // player total player.
    //  import playerArray length from addToCart common function.
    const playerBugetTotal = playerBudgetValue * playersArray.length

    // set the value in Player Expenses total
    setTextElementValueById('total-player-budget', playerBugetTotal)
})

// total budget manager and coach.`

document.getElementById('btn-calculate-total').addEventListener('click', function(){
    // player cost value
    const playerBudgetValue = getInputVlaueById('per-player-cost-field')
    console.log(playerBudgetValue);

    // player total player.
    //  import playerArray length from addToCart common function.
    const playerBugetTotal = playerBudgetValue * playersArray.length

    // manager cost value
    const managerBudgetValue = getInputVlaueById('manager-input-field') 

    // coach cost value
    const coachBudgetValue = getInputVlaueById('coach-input-field')
    
    // calculate total
    const calculateTotalBudget = managerBudgetValue + coachBudgetValue + playerBugetTotal

    // set the value in total budget
    setTextElementValueById('total-cost', calculateTotalBudget)
})
