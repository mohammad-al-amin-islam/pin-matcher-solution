function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + "";
    if (pinString.length == 4) {
        return pin;
    }
    else {
        console.log('less than 4 pin', pin);
        return getPin();
    }
}

function generatePin() {
    const pin = getPin();
    document.getElementById('output-pin').value = pin;
}

document.getElementById('key-pad').addEventListener('click', function (event) {
    //console.log(event.target.innerText);
    const givenInput = event.target.innerText;
    const inputField = document.getElementById('display-input');

    if (isNaN(givenInput)) {
        //console.log('not a number')
        if(givenInput == 'C'){
            inputField.value = "";
        }
    }
    else {
        const previousInput = inputField.value;
        const output = previousInput + givenInput;
        inputField.value = output;
    }
});