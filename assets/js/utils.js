
// get input field value by id
function getInputVlaueById(inputID) {
    const inputField = document.getElementById(inputID)
    const inputFieldString = inputField.value
    const inputFieldValue = parseFloat(inputFieldString)
    // inputField.value = ''
    return inputFieldValue
}

// get element value by id
function getElementValueById(elementId) {
    const element = document.getElementById(elementId)
    const elementValueString = element.innerText
    const elementVlaue = parseFloat(elementValueString)
    return elementVlaue
}

// set text element value by id

function setTextElementValueById(elementId, newValue) {
    const textElement = document.getElementById(elementId)
    textElement.innerText = newValue
}
