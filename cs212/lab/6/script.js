document.addEventListener('DOMContentLoaded', () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    let guesses = 0;

    document.querySelector('#guessButton').addEventListener('click', () => {
        const userGuess = parseInt(document.querySelector('#guessInput').value);
        guesses++;
        let result = '';
        if (userGuess === randomNumber) {
            result = `Correct! It took you ${guesses} guesses.`;
        } else if (userGuess < randomNumber) {
            result = 'Too low!';
        } else {
            result = 'Too high!';
        }
        document.querySelector('#result').textContent = result;
    });
});

