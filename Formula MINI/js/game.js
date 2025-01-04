
const formula = document.getElementById('formula');
const circuit = document.getElementById('circuit');
const speedometer = document.getElementById('speedometer');
const units = document.getElementById('units');
const totalLength = circuit.getTotalLength();

const MIN_SPEED = 10;
const MAX_SPEED = 360;


let distance = 0;
let speed = MIN_SPEED;
let rotation;


function game() {
    startFormula();
    //runFormula called in startFormula after countdown
}

function startFormula() {

    const point = circuit.getPointAtLength(distance);
    const nextPoint = circuit.getPointAtLength(distance + speed/ 3500);
    rotation = Math.atan2(nextPoint.y - point.y, nextPoint.x - point.x) * (180 / Math.PI) - 180;

    const formulaWidth = parseFloat(formula.getAttribute('width'));
    const formulaHeight = parseFloat(formula.getAttribute('height'));

    formula.setAttribute('x', nextPoint.x - formulaWidth / 2);
    formula.setAttribute('y', nextPoint.y - formulaHeight / 2);
    formula.setAttribute('transform', `rotate(${rotation}, ${point.x}, ${point.y})`)

    //-----------------------------------------------------------------------------------------------
    let pointLimits = new Array(Math.floor(totalLength)).fill(MAX_SPEED);

    //projdi všechny limity DEBUG - nevím jak se budou finálně limity procházet
    let limity = data["levels"][0]["sectionsLimits"];
    limity.forEach(element => {
        for (let index = element["start"]; index < element["stop"]; index++) {
            pointLimits[index] = element["limit"];   
        }
    });
    let countdown = 3;
    function startCountdown() {
        if (countdown >= 0 ) {
            if (countdown == 0) {
                speedometer.innerHTML = "GO";
            }
            else {
                speedometer.innerHTML = countdown;
            }
            countdown -= 1;
            setTimeout(startCountdown, 1000);
        }
        else {
            speed = MIN_SPEED;
            speedometer.style.fontSize = '25vh';
            speedometer.style.color = ' #2A2E36';
            units.innerHTML = "Km/h";
            runFormula(pointLimits);
        }
    }
    startCountdown();
}

function runFormula(pointLimits) {
    const point = circuit.getPointAtLength(distance);

    if (speed > pointLimits[Math.floor(distance)]) {
        const finalRotationAngle = rotation + 360;

        function crashFormula() {
            if (rotation < finalRotationAngle) {
                formula.setAttribute('transform', `rotate(${rotation}, ${point.x}, ${point.y})`);
                rotation += 5;
                requestAnimationFrame(crashFormula);
            }
            else {
                speed = MIN_SPEED;
                requestAnimationFrame(() => runFormula(pointLimits));
            }
        }  
        crashFormula();
    }

    else {
        distance = distance + (speed / 3500);
        if (distance >= totalLength) {
            distance = 0;
        }

        const nextPoint = circuit.getPointAtLength(distance);
        rotation = Math.atan2(nextPoint.y - point.y, nextPoint.x - point.x) * (180 / Math.PI) - 180;

        const formulaWidth = parseFloat(formula.getAttribute('width'));
        const formulaHeight = parseFloat(formula.getAttribute('height'));

        formula.setAttribute('x', nextPoint.x - formulaWidth / 2);
        formula.setAttribute('y', nextPoint.y - formulaHeight / 2);
        formula.setAttribute('transform', `rotate(${rotation}, ${point.x}, ${point.y})`)
        speedometer.innerHTML = speed;

        requestAnimationFrame(() => runFormula(pointLimits));
    }
}

game();

