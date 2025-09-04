//elments picking area
const container = document.getElementById("container");
const paymentButton = document.getElementById("payment");
const buttonsContainer = document.getElementById("buttons");
const span_links = document.getElementById('links');
const dateSpan = document.getElementById('date');
const date = new Date();
const year = date.getFullYear();

const createButtons = document.createElement('div');
buttonsContainer.appendChild(createButtons);


//add buttons Dynamacilly.
const addButtons = [
    {name:"Payment",url:"payment.html"},
    {name:"Receipt",url:"receipt.html"},
    {name:"Cash Balance",url:"cashbalance.html"},
    {name:"Bank Balance",url:"bankbalance.html"}
];
createButtons.innerHTML = addButtons.map(but =>`<div class="accountingButtons"><a href="${but.url}">${but.name}</a></div>`).join("");
//add quick links in footer.
const addLinks = [
    {linksname: 'Payment', linksurl:'payment.html'},
    {linksname: 'Receipt', linksurl:'receipt.html'},
    {linksname:"Cash Balance",linksurl:"cashbalance.html"},
    {linksname:"Bank Balance",linksurl:"bankbalance.html"}
];

span_links.innerHTML = addLinks.map(links => `<p><a href='${links.linksurl}'>${links.linksname}`).join("");

dateSpan.innerHTML = year;