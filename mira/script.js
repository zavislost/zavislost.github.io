const friend = document.getElementById('friend');
const obstacle = document.getElementById('obstacle');
const jazz = document.getElementById('jazz');
const info = document.getElementById('info');

const arrowUp = document.getElementById('arrow-up');
const arrowLeft = document.getElementById('arrow-left');
const arrowRight = document.getElementById('arrow-right');
const arrowDown = document.getElementById('arrow-down');

let step = 2;
let topVal = 100;
let leftVal = 50;

function isCollision(friendBounds, obstacleBounds) {
    return !(
        friendBounds.right < obstacleBounds.left ||
        friendBounds.left > obstacleBounds.right ||
        friendBounds.bottom < obstacleBounds.top ||
        friendBounds.top > obstacleBounds.bottom
    );
}

function youWon() {
    jazz.style.display = 'none'
    friend.style.display = 'none'
    obstacle.style.display = 'none'
    info.textContent = "Já věděl že to najdeš. Musíme tam zajít. Kámo mockrát děkuji za přání. Ještě jednou děkuji a užívej."
    info.style.display = 'block'
}

function toStart() {
    topVal = 100;
    leftVal = 50; 
    friend.style.top = topVal + '%';
    friend.style.left = leftVal + '%';
}


arrowUp.addEventListener('click', () => {
    info.style.display = 'none'

    let friendBounds = friend.getBoundingClientRect();
    let obstacleBounds = obstacle.getBoundingClientRect();
    let jazzBounds = jazz.getBoundingClientRect();

    if(!isCollision(friendBounds, obstacleBounds)) {
        topVal -= step; 
        friend.style.top = topVal + '%';
    }
    else {
        toStart()
    }

    if (isCollision(friendBounds,jazzBounds)) {
        youWon();
    }
});

arrowLeft.addEventListener('click', () => {
    info.style.display = 'none'

    let friendBounds = friend.getBoundingClientRect();
    let obstacleBounds = obstacle.getBoundingClientRect();
    let jazzBounds = jazz.getBoundingClientRect();

    if(!isCollision(friendBounds, obstacleBounds)) {
        leftVal -= step ;
        friend.style.left = leftVal + '%';
    }
    else {
        toStart()
    }

    if (isCollision(friendBounds,jazzBounds)) {
        youWon();
    }
});

arrowRight.addEventListener('click', () => {
    info.style.display = 'none'

    let friendBounds = friend.getBoundingClientRect();
    let obstacleBounds = obstacle.getBoundingClientRect();
    let jazzBounds = jazz.getBoundingClientRect();

    if(!isCollision(friendBounds, obstacleBounds)) {
        leftVal += step; 
        friend.style.left = leftVal + '%';
    }   
    else {
        toStart()
    }

    if (isCollision(friendBounds,jazzBounds)) {
        youWon();
    }
});

arrowDown.addEventListener('click', () => {
    info.style.display = 'none'

    let friendBounds = friend.getBoundingClientRect();
    let obstacleBounds = obstacle.getBoundingClientRect();
    let jazzBounds = jazz.getBoundingClientRect();

    if(!isCollision(friendBounds, obstacleBounds)) {
        topVal += step; 
        friend.style.top = topVal + '%';
    }
    else {
        toStart()
    }

    if (isCollision(friendBounds,jazzBounds)) {
        youWon();
    }
});
