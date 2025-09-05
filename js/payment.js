// Get DOM elements
const Payment_serial_no = document.getElementById('srpay');
const paymentDate = document.getElementById('paymentdateinput');
const paymentDr = document.getElementById('paymentdr');
const PaymentDebite = document.getElementById('paymentdebit');
const PaymentCr = document.getElementById('paymentcr');
const PaymentCredit = document.getElementById('paymentcredit');
const NarrationPayment = document.getElementById('narrationpayment');
const PaymentReset = document.getElementById('resetPayment');
const PaymentSave = document.getElementById('savePayment');

// Function to save payment data to localStorage
PaymentSave.addEventListener('click', () => {
    // Get current values from input fields
    const paymentSr = Payment_serial_no.innerHTML.trim();
    const paymentDates = paymentDate.value.trim();
    const paymentDebit = PaymentDebite.value.trim();
    const paymentCredit = PaymentCredit.value.trim();
    const narration = NarrationPayment.value.trim();

    // Basic validation
    if (!paymentDates || !paymentDebit || !paymentCredit || !narration) {
        alert('Please fill in all required fields.');
        return;
    }

    // Create payment object
    const payment = {
        paymentSr,
        paymentDates,
        paymentDebit,
        paymentCredit,
        narration
    };

    // Retrieve existing payments from localStorage or initialize an empty array
    let payments = JSON.parse(localStorage.getItem('paymentStore')) || [];

    // Add new payment to the array
    payments.push(payment);

    // Save updated array back to localStorage
    localStorage.setItem('paymentStore', JSON.stringify(payments));

    console.log('Payment saved:', payment);
    alert('Payment data saved successfully!');

    // Optionally reset the form after saving
    resetForm();
});

// Function to reset the form
function resetForm() {
    paymentDate.value = '';
    PaymentDebite.value = '';
    PaymentCredit.value = '';
    NarrationPayment.value = '';
    // Note: Payment_serial_no is innerHTML, so it may not need resetting unless it's an input
}

// Add event listener for reset button
PaymentReset.addEventListener('click', () => {
    resetForm();
    console.log('Form reset');
});

// Optional: Load and display existing payments on page load
window.addEventListener('load', () => {
    const payments = JSON.parse(localStorage.getItem('paymentStore')) || [];
    console.log('Existing payments:', payments);
    // You can add code here to display payments in the UI if needed
});