document.querySelector('.check').addEventListener('click', check)
document.querySelector('.again').addEventListener('click', again)


let score = 20
let highscore = 0

function check(){
    let guessRemark =  document.querySelector('.guess-result')
    let scoreDisplay = document.querySelector('.score')
    let highscoreDisplay = document.querySelector('.highscore')
    let secreteNumberDisplay =   document.querySelector('.comp-number')
    let bodyStyle = document.querySelector('body')

    let guessNumber = Number(document.querySelector('input').value)


// empty guess 
    if(!guessNumber){
        guessRemark.textContent = 'Enter a number'
    } else{

        let secreteNumber = Math.floor(Math.random()*20)

        if(score > 0){
            secreteNumberDisplay.textContent = secreteNumber
        }

                // correct guess
            if(secreteNumber === guessNumber){
                guessRemark.textContent  = '🎉 guess is correct'
                highscore = score
                highscoreDisplay.textContent = highscore
                bodyStyle.style.backgroundColor ='#60b347'
            } 
            
            // guess is higher than secrete number
            else if(guessNumber > secreteNumber){
                if(score > 0){
                    score--
                    guessRemark.textContent = '✈ Number too high !'
                    scoreDisplay.textContent = score    
                } else if (score < 1){
                    guessRemark.textContent = 'you lose'
                }
            } 
            // guess is higher than secrete number
            else if (guessNumber < secreteNumber){
                if(score > 0){
                    score--
                    guessRemark.textContent = 'Number too low!'
                    scoreDisplay.textContent = score    
                } else if (score < 1){
                    guessRemark.textContent = 'you lose'
                }
            } 
            
        }

}

function again(){
    score = 20
    document.querySelector('body').style.backgroundColor = '#222'
}