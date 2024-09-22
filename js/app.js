/*-------------- Constants -------------*/

const storyTextElement = document.getElementById("storyView");
const optionButtonsElement = document.querySelector(".optionButtons");

const startButton = document.querySelector('#startButton');
startButton.addEventListener('click', () => gameStart());

const choiceButtons = document.querySelectorAll('choice');

const crew1 = document.getElementById('crewOne');
const crew2 = document.getElementById('crewTwo');
const crew3 = document.getElementById('crewThree');
const crew4 = document.getElementById('crewFour');
const crew5 = document.getElementById('crewFive');


let lives;

let dieRoll;



/*-------------- Functions -------------*/

function gameStart() {
    startButton.classList.add("hidden");
    showTextNode(1);
    lives = 5;
    crew1.classList.remove("hidden");
    crew2.classList.remove("hidden");
    crew3.classList.remove("hidden");
    crew4.classList.remove("hidden");
    crew5.classList.remove("hidden");
};

function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(node => node.id === textNodeIndex);
    storyTextElement.innerHTML = textNode.text;
    
    optionButtonsElement.innerHTML = '';

    textNode.options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectOption(option));
        optionButtonsElement.appendChild(button);
    });
};

function rollDie() {
    const die = document.getElementById('dieRoll');
    dieRoll = Math.floor(Math.random() * 6) + 1;
    die.textContent = dieRoll;
    die.style.transform = Math.random();
};


function selectOption(option) {
    rollDie();
    const dieResult = dieRoll;
    if (dieResult >= 3) {
        const nextTextNodeId = option.nextText;
        if (nextTextNodeId === 0) {
            return gameOver();
        };
        showTextNode(nextTextNodeId);
   
    } else {
        const failTextNodeId = option.failText;
        if (failTextNodeId === 0) {
            return gameOver();
        };
        showTextNode(failTextNodeId);
        lives --;
        killCrew();
        if (lives <= 0) {
            const gameOverTextNodeId = option.gameOverText;
            showTextNode(gameOverTextNodeId);
            gameOver();
        };
    };
};

function killCrew() {
    if (lives === 4) {
        crew1.classList.add("hidden");
    } else if (lives === 3) {
        crew2.classList.add("hidden");
    } else if (lives === 2) {
        crew3.classList.add("hidden");
    } else if (lives === 1) {
        crew4.classList.add("hidden");
    } else if (lives === 0) {
        crew5.classList.add("hidden");
    }
};

function gameOver() {
    startButton.classList.remove("hidden");
    optionButtonsElement.innerHTML = '';
};

function reset() {
    gameStart();
};





