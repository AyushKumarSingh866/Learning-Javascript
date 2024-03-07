// // Reveal Event

// // const revealBtn = document.querySelector('.reveal-btn');

// // const hiddenContent = document.querySelector('.hidden-content');

// // function revealContent() {

// //     if (hiddenContent.classList.contains('reveal-btn')) {
// //         hiddenContent.classList.remove('reveal-btn')
        
// //     }else {
// //         hiddenContent.classList.add('reveal-btn')
// //     }
    
// // }

// // revealBtn.addEventListener('click', revealContent);


// document.querySelector('#football').addEventListener
// ('click', function(e){
//          console.log('football is clicked');

//          const target = e.target;
//          if (target.matches('li')) {
//             target.style.backgroundColor = 'lightgrey'
//          }

// })

// document.querySelector('#basketball').addEventListener
// ('click', function(e){
//          console.log('basketball is clicked');

//          const target = e.target;
//          if (target.matches('li')) {
//             target.style.backgroundColor = 'lightgrey'
//          }

// })
// document.querySelector('#boxing').addEventListener
// ('click', function(e){
//          console.log('boxing is clicked');

//          const target = e.target;
//          if (target.matches('li')) {
//             target.style.backgroundColor = 'lightgrey'
//          }

// })
// document.querySelector('#tennis').addEventListener
// ('click', function(e){
//          console.log('tennis is clicked');

//          const target = e.target;
//          if (target.matches('li')) {
//             target.style.backgroundColor = 'lightgrey'
//          }

// })
// document.querySelector('#golf').addEventListener
// ('click', function(e){
//          console.log('golf is clicked');

//          const target = e.target;
//          if (target.matches('li')) {
//             target.style.backgroundColor = 'lightgrey'
//          }

// })


document.querySelector('#sports').addEventListener('click', function (e) {
    
    console.log(e.target.getAttribute('id') + ' is clicked');

    const target = e.target;
    if (target.matches('li')) {
        target.style.backgroundColor = 'red';
        
    }
    
})

const sports = document.querySelector('#sports');
const newSport = document.createElement('li');

newSport.innerText = 'hockey';
newSport.setAttribute('id', 'hockey');


sports.appendChild(newSport);