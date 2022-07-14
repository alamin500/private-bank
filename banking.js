document.getElementById('deposit-button').addEventListener('click', function () {
    const depositInput = document.getElementById('deposit-input')
    const depositInputText = depositInput.value
    const depositInputAmount = parseFloat(depositInputText)

    const depositTotal = document.getElementById('deposit-total')
    const depositTotalText = depositTotal.innerText
    const depositTotalAmount = parseFloat(depositTotalText)
    const depositAmount = depositInputAmount + depositTotalAmount
    depositTotal.innerText = depositAmount

    const totalBalance = document.getElementById('balance-total')
    const totalBalanceText = totalBalance.innerText
    const totalBalanceAmount = parseFloat(totalBalanceText)
    const balaceAmount = totalBalanceAmount + depositInputAmount
    totalBalance.innerText = balaceAmount

    depositInput.value = ''
})

document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input')
    const withdrawInputText = withdrawInput.value
    const withdrawInputAmount = parseFloat(withdrawInputText)

    const withdrawTotal = document.getElementById('withdraw-total')
    const withdrawTotalText = withdrawTotal.innerText
    const withdrawTotalAmount = parseFloat(withdrawTotalText)
    const withdrawAmount = withdrawTotalAmount + withdrawInputAmount
    withdrawTotal.innerText = withdrawAmount

     const totalBalance = document.getElementById('balance-total')
    const totalBalanceText = totalBalance.innerText
    const totalBalanceAmount = parseFloat(totalBalanceText)
    const balaceAmount = totalBalanceAmount - withdrawInputAmount
    totalBalance.innerText = balaceAmount

    withdrawInput.value = ''
})