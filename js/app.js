//* file://wsl.localhost/Ubuntu/home/sk-yates/code/ga/projects/browser-based-game-project/hextract-adventure-game/index.html

/*-------------- Constants -------------*/

const storyTextElement = document.getElementById("storyView");
const optionButtonsElement = document.querySelector(".optionButtons");


/*-------------- story content-------------*/
const textNodes = [
    {
        id: 1, 
        text: "<h1> Welcome to Hextract!</h1> <br/> You are the captain of a small extraction team sent to investigate the remains of a derelict vessel floating the expanse of space. <br/> Your crew are your only resource this far out in the expanse, aslong as your have atleast on crew member you can complete your mission. <br/> <br/> What kind of captain will you be?",
        options: [
            {
                text: "Start game",
                nextText: 2,
                gameOverText: "go1"
            },
            {
                text: "Start game",
                nextText: 2,
                gameOverText: "go1"
            }
        ]
    },
    {
        id: 2, 
        text: "The team are aboard the lost vessel. Your scanners return a message: 'Vessel ID: not found'.",
        options: [
            {
                text: "Begin tactical sweep of surrounding area.",
                nextText: 3, //3
                failText: "f1",
                gameOverText: "go1"
            },
            {
                text: "Call out for any survivors.",
                nextText: 1, //4
                failText: "f1",
                gameOverText: "go1"
            }
        ]
    },
    {
        id: 3,
        text: "There are clear signs of damage and remnants of some form of conflict.",
        options: [
            {
                text: "Assess damage to surrounding structures and systems.",
                nextText: 2, //4
                failText: "f1",
                gameOverText: "go1"
            },
            {
                text: "Search for any bodies or other remains.",
                nextText: 2, //5
                failText: "f1",
                gameOverText: "go1"
            }
        ]
    },
    {
        id: 4,
        text: "The team call out for any survivors. The echos of their voices dissipate down the creaking corridors of the ship.",
        options: [
            {
                text: "State to your team that it's unlikely for anyone to have survived.",
                nextText: 4,
                failText: "f1",
                gameOverText: "go1"
            },
            {
                text: "Tell your team not to be discouraged, they may still find someone.",
                nextText: 5,
                failText: "f1",
                gameOverText: "go1"
            }
        ]
    },
    {
        id: "f1",
        text: "Failtext 1",
        options: [
            {
                text: "Tell your crew to be more careful and continue the sweep.",
                nextText: 3,
                failText: "f1",
                gameOverText: "go1"
            },
            {
                text: "Try to comfort your crew. Assure them their crewmate won't be left behind.",
                nextText: 3,
                failText: "f1",
                gameOverText: "go1"
            }
        ]
    },
    {
        id: "go1", 
        text: "Your crew are gone. There are no surivors of this mission. <br/> <h1> Game Over </h1>",
        options: [
            {
                text: "Start game",
                nextText: 2,
                gameOverText: "go1"
            },
            {
                text: "Start game",
                nextText: 2,
                gameOverText: "go1"
            }
        ]
    },


];

const startButton = document.querySelector('#startButton');

let lives = 3;

let dieRoll;

const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', () => gameStart());

const choiceButtons = document.querySelectorAll('choice');

const crew1 = document.getElementById('crewOne');
const crew2 = document.getElementById('crewTwo');
const crew3 = document.getElementById('crewThree');

/*-------------- Functions -------------*/

function gameStart() {
    resetButton.classList.add("hidden");
    showTextNode(1);
    console.log(lives);
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
    console.log(option);
    rollDie();
    const dieResult = dieRoll;
    if (dieResult >= 3) {
        const nextTextNodeId = option.nextText;
        console.log('nextTextNodeId', nextTextNodeId);
        showTextNode(nextTextNodeId);
    } else {
        const failTextNodeId = option.failText;
        console.log("failTextNodeId", failTextNodeId);
        showTextNode(failTextNodeId);
        lives --;
        console.log(lives);
        killCrew();
        if (lives <= 0) {
            const gameOverTextNodeId = option.gameOverText;
            console.log("game over", gameOverTextNodeId);
            showTextNode(gameOverTextNodeId);
            gameOver();
        };
    };
};

function killCrew() {
    if (lives === 2) {
        crew1.classList.add("hidden");
        console.log("die, crew 1");
    } else if (lives === 1) {
        crew2.classList.add("hidden");
        console.log("die, crew 2");
    } else if (lives === 0) {
        crew3.classList.add("hidden");
        console.log("die, crew 3");
    };
};

function gameOver() {
    console.log("game over");
    resetButton.classList.remove("hidden");
    optionButtonsElement.innerHTML = '';
};

function reset() {
    gameStart();
};

startButton.addEventListener('click', () => gameStart());



