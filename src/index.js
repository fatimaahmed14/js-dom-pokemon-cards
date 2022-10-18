
console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element
console.log(data[0]);

const ul = document.querySelector('ul')
const li = document.createElement('li')

li.setAttribute('class', 'card')
ul.appendChild(li)