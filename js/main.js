
// leaarn call back function
// check if forEach returns a value 
// difference between methods and properties  
//event listener bubbling up
// look at event listeners

const correctAnwers = ['A', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const displayScore = document.querySelector('.display-score');



form.addEventListener('submit', e => {
    e.preventDefault()
    let score = null;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value]

    //checker
    userAnswers.forEach( ( e, itter) =>{
        if(e === correctAnwers[itter]){
        score += 25;       
        }
    }
    )
    scrollTo(0,0)
   
    let msg = null;  
  
    displayScore.classList.remove('d-none')
        let scoreCount = 0;
        const timer =setInterval(() => {
            displayScore.querySelector('span').textContent = ` ${scoreCount}% `; 
            if ( score === scoreCount){
                clearInterval(timer)
            } else {
                scoreCount+= 1;
            }

    }, 50);
    console.log('running ' + scoreCount)
    if (score === 100){
        msg = 'excellent'
        
    }
    else if (score >= 70){
    msg = ' amazing'
    } else if (score >= 50){
        msg = 'well done'
    } else {
        msg = 'nice'
    }
    

    displayScore.querySelector('.msg').textContent = `  ${msg}`; 

})





