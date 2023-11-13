document.addEventListener('DOMContentLoaded', function() {
    const submitGuess = document.getElementById('submitGuess');
    const result = document.getElementById('result');
    let secretNumber = Math.floor(Math.random() * 100) + 1;

    submitGuess.onclick = function() {
        let userGuess = parseInt(document.getElementById('guess').value);
        if (userGuess === secretNumber) {
            result.textContent = 'Congratulations! You guessed right!';
        } else if (userGuess < secretNumber) {
            result.textContent = 'Too low. Try again!';
        } else {
            result.textContent = 'Too high. Try again!';
        }
    };
});
