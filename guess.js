// game values 
let min = 1,
    max = 10,
    winningNum = guessRandomNum(min,max),
    guessLeft = 3;

//UI Elements

const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessInput = document.querySelector('#guess-input'),
      guessBtn = document.querySelector('#guess-btn'),
      message = document.querySelector('.message');


// assign min and max value
minNum.textContent = min;
maxNum.textContent = max;

game.addEventListener('mousedown', function(e){
  if(e.target.className === 'play-again'){
    window.location.reload();
  }
});

// event listener
guessBtn.addEventListener('click', function(){
  let guess = parseInt(guessInput.value);
  
// validating the input
  if(isNaN(guess) || guess < min || guess > max){
    setMessage(`Enter a number between ${min} and ${max}`, 'red');
  }

//guessing number
if(guess === winningNum){
  // You Win

    gameOver(true, `Amazing: You Won ${winningNum} is the correct number`);

} else {
  // you lose
  guessLeft -= 1;
  if(guessLeft ===0){

    gameOver(false, `Loooseeeerrr, you fail, ${winningNum} is the correct number`);
    
  }else {
    guessInput.value='';
    guessInput.style.borderColor = 'red';
    setMessage(`${guess} is not correct,You have ${guessLeft} guess left`, 'red');
    
  }
}
  
});

function gameOver(won, msg){
  let color;
  won === true ? color = 'green' : color = 'red';
  guessInput.disabled = true;
  guessInput.style.borderColor = color;
  message.style.color = color;
  setMessage(msg);

  // Play again
  guessBtn.value = 'Play Again';
  guessBtn.className += 'play-again';

}
//guess random number
function guessRandomNum(min, max){
  return Math.floor(Math.random()*(max-min+1)+min)
}
function setMessage(msg, color){
  message.style.color = color;
  message.textContent = msg;
}
