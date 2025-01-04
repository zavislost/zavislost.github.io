const speedUpButton = document.getElementById('speed-up');
const speedDownButton = document.getElementById('slow-down');

const STEP_UP = 7;
const STEP_DOWN = 5;

let speedIntervalId;

//actions to speed up
speedUpButton.addEventListener('touchstart', () => {
    speedUp();
    speedIntervalId = setInterval(speedUp, 20);
});
speedUpButton.addEventListener('touchend', () => {
    clearInterval(speedIntervalId);
});

//actions to speed down
speedDownButton.addEventListener('touchstart', () => {
    slowDown()
    speedIntervalId = setInterval(slowDown, 20);
});
speedDownButton.addEventListener('touchend', () => {
    clearInterval(speedIntervalId);
});

function speedUp() {
    speed += STEP_UP;
    if (speed > MAX_SPEED) {
        speed = MAX_SPEED;
    }
}

function slowDown() {
    speed -= STEP_DOWN;
    if (speed < MIN_SPEED) {
        speed = MIN_SPEED;
    }
}