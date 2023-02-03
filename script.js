const form = document.querySelector('form');
const result = document.querySelector('.result');
const questions = document.querySelectorAll('.question');


const correctAns = ['A','A','A','A','A']
form.addEventListener('submit', function(event){
    event.preventDefault(); 
    let score = 0;
const respAns = [form.q1.value,form.q2.value,form.q3.value,form.q4.value,form.q5.value,]
respAns.forEach(function(arrayAns,index){
   
if(arrayAns === correctAns[index]){
score += 1;
questions[index].classList.add('correct');
}else{
    questions[index].classList.add('wrong');
}

})
console.log(score);
result.classList.remove('hide');
scrollTo(0,0);
result.querySelector('p').textContent = `You scored ${score}/5`;
})