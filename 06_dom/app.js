// // GetElementById()
// const title = document.getElementById('main-heading');
// // console.log(title);

// // // GetElementsByClassName()
// //  const listitems = document.getElementsByClassName('list-items')
// //  console.log(listitems);

// //  GetElementByTagName
// const tagname = document.getElementsByTagName('li')
// // console.log(tagname);

// // querySelector
// const query = document.querySelector('div')
// // console.log(query);

// // querySelectorAll
// const container = document.querySelectorAll('div')
// console.log(container);

// DOM Manipulation
// const title = document.querySelector('#main-heading');
// title.style.color = 'red';


// *******STyling elemensts*******
// const listItems = document.querySelectorAll('.list-items');


// for (i = 0; i < listItems.length; i++) {
//     listItems[i].style.fontSize = '5rem';
    
// }
// console.log(listItems);

// creating elements

const ul = document.querySelector('ul');
const li = document.createElement('li');

//  Adding elements

ul.append(li)

// Modifying the text

li.innerText = 'X-men'

// // Modifying attributes & Classes

// li.setAttribute('id', 'main-heading');
// li.removeAttribute('id');

// const title = document.querySelector('#main-heading');

// console.log(title.getAttribute('id'));


// li.classList.add('list-items')
li.classList.add('list-items')

console.log(li.classList.contains('list-items'));


// Remove elements

li.remove();