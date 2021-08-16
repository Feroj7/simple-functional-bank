
//get input value
function getInputValue(inputId){
    const newInput = document.getElementById(inputId);
    const newInputText = newInput.value;
    const newAmount = parseFloat(newInputText);

    //clear input field
    newInput.value ='';

    return newAmount;
}

//update deposit & withdraw amount
function updateAmount(totalFieldId, amount){
     //get previous deposit value
     const total = document.getElementById(totalFieldId);
     const totalText = total.innerText;
     const totalAmount = parseFloat(totalText);
     //total deposit amount
     total.innerText = totalAmount + amount;
}

//get current balance
function getCurrentBalance(){
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;
    
}

//update balance
function updateBalance(amount, isAdd){
    //total balance update
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotal = getCurrentBalance();
    if (isAdd == true){
        balanceTotal.innerText = previousBalanceTotal + amount;
    }
    else{
        balanceTotal.innerText = previousBalanceTotal - amount;
    }
}

//deposit btn event handler
document.getElementById('deposit-btn').addEventListener('click', function(){

    //get deposit input value
   const newDepositAmount = getInputValue('deposit-input');

   if(newDepositAmount > 0){
    // //total deposit amount
    updateAmount('deposit-total', newDepositAmount);
   
    //total balance update
    updateBalance(newDepositAmount, true);
   }
    
    
})


//update withdraw total

//withdraw btn event handler
document.getElementById('withdraw-btn').addEventListener('click', function(){

    //get withdraw input value
   const withdrawAmount = getInputValue('withdraw-input');

   const previousBalanceTotal = getCurrentBalance();
   if(withdrawAmount > 0 && withdrawAmount <= previousBalanceTotal ){
    // //total withdraw amount
    updateAmount('withdraw-total', withdrawAmount);

    // update total balance after withdraw 
    updateBalance(withdrawAmount, false);
   }
   if(withdrawAmount > previousBalanceTotal){
       alert('You do not have enough ($) money in your account');
   }
    

})