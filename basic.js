//elments picking area
const container = document.getElementById("container");
const paymentButton = document.getElementById("payment");
const buttonsContainer = document.getElementById("buttons");



const createButtons = document.createElement('div');
buttonsContainer.appendChild(createButtons);


//add buttons Dynamacilly.
const addButtons = [
    {name:"Payment",url:"payment.html"},
    {name:"Receipt",url:"receipt.html"},
    {name:"Cash Balance",url:"cashbalance.html"},
    {name:"Bank Balance",url:"bankbalance.html"},
];
createButtons.innerHTML = addButtons.map(but =>`<div class="accountingButtons"><a href="${but.url}">${but.name}</a></div>`).join("");