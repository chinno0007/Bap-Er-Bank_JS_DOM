/* 
1. add event handler with the withdraw button
2.get the withdraw amount from the withdraw input field
2.5 also make sure to conver the inpust to number by using parseFloat
3. get previous withdraw total
4. calculate total withdraw Amount
4.5. set total withdraw ammount
5. get the previous balance total
6. calculate new balance total


7. clear the input field
*/

// 1
document.getElementById('btn-withdraw').addEventListener('click', function () {

    // step 2

    const withdrawField = document.getElementById('withdaw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    // step 7
    withdrawField.value = '';

    if (isNaN(newWithdrawAmount)) {
        alert('Please provide a valid number');
        return;
    }


    // step 3
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);


    // step 5
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalSting = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalSting);



    if (newWithdrawAmount > previousBalanceTotal) {
        alert('bap er bank e eto taka nay!!!')
        return;
    }

    // step 4
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;
    // step 6
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;


})