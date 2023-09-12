const dino = document.getElementById('dino');
const obstacle = document.getElementById('obstacle');

document.addEventListener('keydown', jump);

function jump(event) {
    if (event.keyCode === 32) { // Space key
        dino.classList.add('jump');
        setTimeout(() => {
            dino.classList.remove('jump');
        }, 500);
    }
}

function checkCollision() {
    const dinoBottom = parseInt(window.getComputedStyle(dino).getPropertyValue('bottom'));
    const obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue('right'));

    if (dinoBottom <= 50 && obstacleLeft <= 50) {
        alert('Game Over!');
        obstacle.style.animation = 'none';
    }
}

setInterval(checkCollision, 10);
