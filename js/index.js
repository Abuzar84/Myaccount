//add new element to the contianer for balance
const content = document.createElement('div');
content.className = "content"
container.appendChild(content);
content.innerHTML = localStorage.getItem(JSON.stringify(1));