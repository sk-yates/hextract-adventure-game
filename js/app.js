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

/*-------------- story content-------------*/
const textNodes = [
        {
            id: 1, 
            text: "With a shuddering 'clang!' your ship connects with the derelict vessel.",
            options: [
                {
                    text: "Enter Airlock",
                    nextText: 2,
                    failText: "1-f",
                    gameOverText: "go1"
                },
            ]
        },
        {
            id: "1-f", 
            text: "As you enter the airlock, a random electrical surge kills a crew member.",
            options: [
                {
                    text: "Proceed into the airlock",
                    nextText: 2,
                    failText: "1-f",
                    gameOverText: "go1"
                },
            ]
        },
        {
            id: 2, 
            text: "The Airlock door is non-operational",
            options: [
                {
                    text: "Force the door manually",
                    nextText: 3,
                    failText: "2a-f",
                    gameOverText: "go1"
                },
                {
                    text: "Attempt to restore power",
                    nextText: 11,
                    failText: "2b-f",
                    gameOverText: "go1"
                }
            ]
        },
        {
            id: "2a-f", 
            text: "As your force the door, it begins to give...before violently slamming shut, crushing a crew member.",
            options: [
                {
                    text: "Force the door",
                    nextText: 3,
                    failText: "2a-f",
                    gameOverText: "go1"
                },
                {
                    text: "Attempt to restore power",
                    nextText: 11,
                    failText: "2d-f",
                    gameOverText: "go1"
                }
            ]
        },
        {
            id: "2b-f", 
            text: "As you open the console to return power, you tamper with the wrong circut and an arc of electricity kills a crew member.",
            options: [
                {
                    text: "Try forcing the door.",
                    nextText: 3,
                    failText: "2a-f",
                    gameOverText: "go1"
                },
            ]
        },
        {
            id: 3, 
            text: "With enough force, the door opens and clicks into place within it's frame.",
            options: [
                {
                    text: "Call out to any survivors",
                    nextText: 4,
                    failText: "3a-f",
                    gameOverText: "go1"
                },
                {
                    text: "Attempt to access a nearby console",
                    nextText: 12,
                    failText: "3b-f",
                    gameOverText: "go1"
                }
            ]
        },
        {
            id: "3a-f", 
            text: "You call out hoping to hear a voice. Instead, you hear a scuttling in the vents above you. You look around to find one of your crew members is gone!",
            options: [
                {
                    text: "Call out again",
                    nextText: 4,
                    failText: "3a-f",
                    gameOverText: "go1"
                },
                {
                    text: "Proceed forward.",
                    nextText: 5,
                    failText: "4-f",
                    gameOverText: "go1"
                }
            ]
        },
        {
            id: "3b-f", 
            text: "Touching the screen of the console, it flickers for a moment before another flash of electrical light claims a crew member.",
            options: [
                {
                    text: "Proceed forward.",
                    nextText: 5,
                    failText: "4-f",
                    gameOverText: "go1"
                }
            ]
        },
        {
            id: 4, 
            text: "You calls are met by the your own echo down the empty halls of the ship.",
            options: [
                {
                    text: "Proceed forward.",
                    nextText: 5,
                    failText: "4-f",
                    gameOverText: "go1"
                },
            ]
        },
        {
            id: "4-f", 
            text: "Intermittent jets of hot steam flood the ship's hallway, one of your crew members misjudges the interval, they're covered by a hot jet of steam and boil in their suit.",
            options: [
                {
                    text: "Proceed forward.",
                    nextText: 5,
                    failText: "4-f",
                    gameOverText: "go1"
                },
            ]
        },
        {
            id: 5, 
            text: "Intermittent jets of hot steam flood the ship's hallway, with careful timing and luck you make it through the hallway.",
            options: [
                {
                    text: "Use the echo-locator on your suit to plot the next path.",
                    nextText: 6,
                    failText: "5a-f",
                    gameOverText: "go1"
                },
            ]
        },
        {
            id: "5a-f", 
            text: "As the pulse from your echo-locator travels down the hallways, you hear a scuttling in the vents above you. You look around to find one of your crew members is gone!",
            options: [
                {
                    text: "Spend out another from your echo-locator.",
                    nextText: 6,
                    failText: "5a-f",
                    gameOverText: "go1"
                },
            ]
        },
        {
            id: 6, 
            text: "The pulse returns to wrist display, painting a picture of the path ahead. The ships's core-drive isn't too far.",
            options: [
                {
                    text: "Proceed forward with haste.",
                    nextText: 8,
                    failText: "6a-f",
                    gameOverText: "go1"
                },
                {
                    text: "Proceed forward as carefully and quielty as you can.",
                    nextText: 7,
                    failText: "6b-f",
                    gameOverText: "go1"
                }
            ]
        },
        {
            id: "6a-f", 
            text: "As you pick up pace moving down the corridor, a dark form lunches from the shadows, snatching one of your crew members.",
            options: [
                {
                    text: "It's too late to slow down now. Keep running!",
                    nextText: 8,
                    failText: "6a-f",
                    gameOverText: "go1"
                },
            ]
        },
        {
            id: "6b-f", 
            text: "Moving slow and quietly hasn't helped your chances. It's time to run!",
            options: [
                {
                    text: "Run!",
                    nextText: 8,
                    failText: "6a-f",
                    gameOverText: "go1"
                },
            ]
        },
        {
            id: 7, 
            text: "Moving quietly appears to have kept you safe. The entance to the ship's core-drive is just ahead.",
            options: [
                {
                    text: "Proceed to the core-drive.",
                    nextText: 8,
                    failText: "7a-f",
                    gameOverText: "go1"
                },
            ]
        },
        {
            id: "7a-f", 
            text: "As you move towards the door, you turn your head see a crew member dragged into the shadows. It's time to run!",
            options: [
                {
                    text: "Run!",
                    nextText: 8,
                    failText: "6a-f",
                    gameOverText: "go1"
                },
            ]
        },
        {
            id: 8, 
            text: "You make it to the ship's core-drive, looking around you can see extensive damage to the surrounding mechanisms.",
            options: [
                {
                    text: "Extract the core",
                    nextText: 9,
                    failText: "8a-f",
                    gameOverText: "go1"
                },
            ]
        },
        {
            id: "8a-f", 
            text: "As you the core is pulled from it's housing, the sound of a geiger counter clicks violently, a crew member succumbs to the radiation dropping to the ground.",
            options: [
                {
                    text: "Reinsert the core, patch the leak and try again",
                    nextText: 9,
                    failText: "8a-f",
                    gameOverText: "go1"
                },
            ]
        },
        {
            id: 9, 
            text: "With the core in-hand you being to make your way back to your ship. The sound of the geiger counter ticking steadily with each step. You hear unsettling hisses and the sounds of approaching scratches in the vents above your head",
            options: [
                {
                    text: "Try to run back to your ship.",
                    nextText: 10,
                    failText: "9a-f",
                    gameOverText: "go1"
                },
            ]
        },
        {
            id: "9a-f", 
            text: "Dark figures lunge out from the shadows as you run down the corridor. A crew member is caught by the creatures.",
            options: [
                {
                    text: "You're so close now. KEEP RUNNING!!!",
                    nextText: 10,
                    failText: "9a-f",
                    gameOverText: "go1"
                },
            ]
        },
        {
            id: 10, 
            text: "<h1>You make it back to your ship.</h1> <br/> Finally safe!",
            options: [
                {
                    text: "End the game",
                    nextText: 0,
                    failText: 0,
                    gameOverText: "go1"
                },
            ]
        },
        {
            id: 11, 
            text: "Power returns and the door slides open and click into place within it's frame.",
            options: [
                {
                    text: "Call out to any survivors",
                    nextText: 4,
                    failText: "3a-f",
                    gameOverText: "go1"
                },
                {
                    text: "Attempt to access a nearby console",
                    nextText: 12,
                    failText: "3b-f",
                    gameOverText: "go1"
                }
            ]
        },
        {
            id: 12, 
            text: "The console flickers with dim light for a moment before the screen goes dark.",
            options: [
                {
                    text: "Proceed forward.",
                    nextText: 5,
                    failText: "4-f",
                    gameOverText: "go1"
                },
            ]
        },
        {
            id: "go1", 
            text: "Your crew are gone. There are no surivors of this mission. <br/> What killed your crew? <br/> The creatures in the shadows? The unstable ship? Perhaps, it was just a few poor choices. <br/> Eitherway... <br/> <h1> Game Over </h1>",
            options: [
                {
                    text: "restart",
                    nextText: 1,
                    failText: 1,
                    gameOverText: "go1"
                },
                {
                    text: "restart",
                    nextText: 1,
                    failText: 1,
                    gameOverText: "go1"
                }
            ]
        },
    ];



let lives;

let dieRoll;



/*-------------- Functions -------------*/

function gameStart() {
    startButton.classList.add("hidden");
    showTextNode(1);
    lives = 5;
    console.log(lives);
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
    console.log(option);
    rollDie();
    const dieResult = dieRoll;
    console.log(`Dice: ${dieRoll}`);
    if (dieResult >= 3) {
        const nextTextNodeId = option.nextText;
        if (nextTextNodeId === 0) {
            return gameOver();
        };
        console.log('nextTextNodeId', nextTextNodeId);
        showTextNode(nextTextNodeId);
   
    } else {
        const failTextNodeId = option.failText;
        if (failTextNodeId === 0) {
            return gameOver();
        };
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
    if (lives === 4) {
        crew1.classList.add("hidden");
        console.log("die, crew 1");
    } else if (lives === 3) {
        crew2.classList.add("hidden");
        console.log("die, crew 2");
    } else if (lives === 2) {
        crew3.classList.add("hidden");
        console.log("die, crew 3");
    } else if (lives === 1) {
        crew4.classList.add("hidden");
        console.log("die, crew 4");
    } else if (lives === 0) {
        crew5.classList.add("hidden");
        console.log("die, crew 5");
    }
};

function gameOver() {
    console.log("game over");
    startButton.classList.remove("hidden");
    optionButtonsElement.innerHTML = '';
};

function reset() {
    gameStart();
};





