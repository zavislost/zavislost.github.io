const speedUpButton = document.getElementById('speed-up');
const speedDownButton = document.getElementById('slow-down');

let speedIntervalId;

//actions to speed up
speedUpButton.addEventListener('mousedown', () => {
    speedUp();
    speedIntervalId = setInterval(speedUp, 20);
});
speedUpButton.addEventListener('mouseup', () => {
    clearInterval(speedIntervalId);
});
speedUpButton.addEventListener('mouseout', () => {
    clearInterval(speedIntervalId);
});

//actions to speed down
speedDownButton.addEventListener('mousedown', () => {
    slowDown()
    speedIntervalId = setInterval(slowDown, 20);
});
speedDownButton.addEventListener('mouseup', () => {
    clearInterval(speedIntervalId);
});
speedDownButton.addEventListener('mouseout', () => {
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