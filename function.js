function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const valueInText = inputField.value;
    const value = parseFloat(valueInText);
    inputField.value = '';
    return value;

}
function updateTotal(fieldId, amount){
    console.log(fieldId, amount);
    const totalTag = document.getElementById(fieldId);
    const previousTotalInText = totalTag.innerText;
    const previousTotal = parseFloat(previousTotalInText);
    const newTotal = previousTotal + amount;
    totalTag.innerText = newTotal;
}
function getCurrentBalance() {
    const totalBalance = document.getElementById('balance-total')
    const totalBalanceText = totalBalance.innerText
    const totalBalanceAmount = parseFloat(totalBalanceText)
    return totalBalanceAmount
}
function updateBalace(amount, add) {
     const totalBalance = document.getElementById('balance-total')
    const totalBalanceText = totalBalance.innerText
    const totalBalanceAmount = getCurrentBalance()
    if (add == true) {
        totalBalance.innerText = totalBalanceAmount + amount
    }
    else {
        totalBalance.innerText = totalBalanceAmount - amount
    }

}


document.getElementById('deposit-button').addEventListener('click',function(){
    const amount = getInputValue('deposit-input');
  console.log("clicked");
    if (amount > 0) {
        updateTotal('deposit-total', amount);
    updateBalace(amount, true)
   }
})

document.getElementById('withdraw-button').addEventListener('click', function(){
    const amount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance()
    if (amount > 0 && amount < currentBalance) {
        updateTotal('withdraw-total', amount);
    updateBalace(amount, false)
    }
    if (amount > currentBalance) {
        console.log("You can not withdraw more than your balance")
    }

})

