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
        if (givenInput == 'C') {
            inputField.value = "";
        }
        if (givenInput == '<') {
            inputField.value = inputField.value.slice(0, -1);
        }
    }
    else {
        const previousInput = inputField.value;
        const output = previousInput + givenInput;
        inputField.value = output;
    }
});

let loginAttempts = 3;
function verifyPin() {
    const generatePin = document.getElementById('output-pin').value;
    const typedPin = document.getElementById('display-input').value;
    if (generatePin == typedPin) {
        document.getElementById('matched-warning').style.display = 'block';
        document.getElementById('mismatch-warning').style.display = 'none';
    }
    else {
        document.getElementById('matched-warning').style.display = 'none';
        document.getElementById('mismatch-warning').style.display = 'block';
        let failAttempt = --loginAttempts;
        document.getElementById("action-left").innerText = failAttempt;
        if(failAttempt == 0){
            document.getElementById('submit').setAttribute('disabled',true);
            document.getElementById("all").innerText = 'All Try Finished';
        }

    }

}

