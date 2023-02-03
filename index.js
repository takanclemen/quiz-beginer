//factory function
//let students = ['James','Peter','John','Paul'];

// for(let student of students){
// console.log(student)
// }
// let student = {
//   username:'Peter',
//   age:22
// }
// for(let key in student){
// console.log(key)
// }

// const addProducts = document.querySelector('ul');
// const btn = document.querySelector('button');

// btn.addEventListener('click', function(){
// const li = document.createElement('li');
// li.textContent='new link';
// addProducts.append(li);
// })

// addProducts.addEventListener('click', (event)=>{
//   if(event.target.tagName==='LI'){
// //event.target.remove();
// console.log('link old');
//   }

// })

// const actBTN = document.querySelector('.active');
// actBTN.addEventListener('click', (event) =>{
//   event.stopPropagation();
  
// })

// const mstTest = document.querySelector('body');
// mstTest.addEventListener('mousemove', function(event){
// console.log(event);
// })

const form = document.querySelector('.form-inline');
const namePattern = /^[a-z0-9]{6,10}$/;
const feedBPattern = /^.{20,50}/;
const p = document.querySelector('p');
const formControl = document.querySelector('.form-control');

form.addEventListener('submit', function(event){
  event.preventDefault();
  let nameCheck = namePattern.test(form.name.value);
  let feedBCheck = feedBPattern.test(form.feedback.value);
  if(nameCheck && feedBCheck){
p.setAttribute('class', 'text-dark bg-success');
p.textContent = 'Rightfully chosen regular expressions';
  }else{
    p.setAttribute('class', 'text-light bg-danger');
    p.textContent = 'wrongly chosen regular expressions';
  }
})

form.name.addEventListener('keyup', function(event){
  const nameTarget = event.target.value;
  if(namePattern.test(nameTarget)){
    form.name.classList.toggle('border-success');
    form.name.classList.remove('border-danger');
  }else{
    form.name.classList.add('border-danger');
    form.name.classList.remove('border-success');
  }
  
})
