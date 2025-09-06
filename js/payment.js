const savePay = document.getElementById('savePayment');
const resetPay = document.getElementById('resetPayment');
const serialNumber = document.getElementById('srpay');//serial number for payment 
let srforstore = 0; // serial number for storing in local storage.

savePay.addEventListener('click',()=>{
    const datePay = document.getElementById('paymentdateinput').value;
    const payDrName = document.getElementById('paymentdr').value;
    const payDrAmount = document.getElementById('paymentdebit').value;
    const payCrName = document.getElementById('paymentcr').value;
    const payCrAmount = document.getElementById('paymentcredit').value;
    const payNarration = document.getElementById('narrationpayment').value;

    serialNumber.innerHTML = parseInt(serialNumber.innerHTML) + 1; 
    srforstore = srforstore+1;  

    const pay = {
        srforstore,
        datePay,
        payDrName,
        payDrAmount,
        payCrName,
        payCrAmount,
        payNarration
    };
    console.log(pay);
    localStorage.setItem(JSON.stringify(srforstore),JSON.stringify(pay));
    alert('Payment Saved');

});