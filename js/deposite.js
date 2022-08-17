// Tep 1: add event listener to the btn
document.getElementById('btn-deposite').addEventListener('click', function () {
    // step 2: get the ammount from thr deposite input field
    // for getting input field value, we need to use value inside the input field
    const depositeField = document.getElementById('deposite-field');
    const newDepositeAmountString = depositeField.value;
    const newDepositeAmount = parseFloat(newDepositeAmountString);

    // step 3: get the current total deposite
    // for non-input we can use innerText
    const depositeTotalElement = document.getElementById('deposite-total');
    const PreviousDepositeTotalString = depositeTotalElement.innerText;
    const PreviousDepositeTotal = parseFloat(PreviousDepositeTotalString);

    // step 4: add numbers to save the total deposite
    const currentDepositeTotal = PreviousDepositeTotal + newDepositeAmount;

    // set the depositeTotal
    depositeTotalElement.innerText = currentDepositeTotal;

    // step 5: get balance total 

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalSting = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalSting);

    // step 6: calculate current total balance
    const currentBalanceTotal = previousBalanceTotal + newDepositeAmount;

    // set the balance total
    balanceTotalElement.innerText = currentBalanceTotal;








    // step 7: clear the deposite field
    depositeField.value = '';
})