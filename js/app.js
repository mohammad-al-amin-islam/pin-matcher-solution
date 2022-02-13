function getPin(){
    const pin = Math.round(Math.random()*10000);
    const pinString = pin + "";
    if(pinString.length==4){
        return pin;
    }
    else{
        console.log('less than 4 pin',pin);
        return getPin();
    }
}

function generatePin(){
    const pin = getPin();
    document.getElementById('output-pin').value = pin;
}