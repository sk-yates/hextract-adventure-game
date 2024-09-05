//* file://wsl.localhost/Ubuntu/home/sk-yates/code/ga/projects/browser-based-game-project/hextract-adventure-game/index.html

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
            text: "The crew stands at the airlock of the derelict ship. The AI remains silent, and flickering lights give the only hint of activity. The captain gestures toward a dimly lit corridor, but something feels wrong.",
            options: [
                {
                    text: "Proceed down the corridor.",
                    nextText: 2,
                    failText: 3,
                    gameOverText: "go1"
                },
                {
                    text: "Investigate a nearby control panel.",
                    nextText: 4,
                    failText: 5,
                    gameOverText: "go1"
                }
            ]
        },
        {
            id: 2, 
            text: "The crew cautiously moves down the corridor. Suddenly, the ship's ventilation system hisses and the AI's garbled voice announces, 'Life support compromised.'",
            options: [
                {
                    text: "Run back to the airlock.",
                    nextText: 6,
                    failText: 7,
                    gameOverText: "go1"
                },
                {
                    text: "Manually override the life support system.",
                    nextText: 8,
                    failText: 9,
                    gameOverText: "go1"
                }
            ]
        },
        {
            id: 3, 
            text: "As the crew ventures deeper, a toxic gas vents from the floor. A crew member collapses and dies instantly.",
            options: [
                {
                    text: "Return to the airlock.",
                    nextText: 6,
                    failText: 7,
                    gameOverText: "go1"
                },
                {
                    text: "Press forward despite the loss.",
                    nextText: 10,
                    failText: 11,
                    gameOverText: "go1"
                }
            ]
        },
        {
            id: 4, 
            text: "The control panel flickers as you approach, displaying the ship's systems. It shows multiple system failures. 'Reactor breach imminent' flashes on the screen.",
            options: [
                {
                    text: "Shut down the reactor manually.",
                    nextText: 8,
                    failText: 9,
                    gameOverText: "go1"
                },
                {
                    text: "Leave the control panel and warn the others.",
                    nextText: 2,
                    failText: 3,
                    gameOverText: "go1"
                }
            ]
        },
        {
            id: 5, 
            text: "As you inspect the control panel, a surge of electricity arcs out, instantly killing one crew member.",
            options: [
                {
                    text: "Return to the airlock.",
                    nextText: 6,
                    failText: 7,
                    gameOverText: "go1"
                },
                {
                    text: "Continue deeper into the ship.",
                    nextText: 10,
                    failText: 11,
                    gameOverText: "go1"
                }
            ]
        },
        {
            id: 6, 
            text: "The crew retreats to the airlock, but just as they reach it, the derelict ship powers up slightly. The AI reboots, and systems seem to stabilize.",
            options: [
                {
                    text: "Re-enter the ship and investigate further.",
                    nextText: 10,
                    failText: 11,
                    gameOverText: "go1"
                },
                {
                    text: "Run a diagnostic scan from the airlock.",
                    nextText: 4,
                    failText: 5,
                    gameOverText: "go1"
                }
            ]
        },
        {
            id: 7, 
            text: "As the crew rushes back to the airlock, the AI overrides the controls, trapping them inside. A power surge suddenly releases the door, and the crew escapes, though oxygen levels remain dangerously low.",
            options: [
                {
                    text: "Use emergency oxygen reserves and re-enter the ship.",
                    nextText: 10,
                    failText: 11,
                    gameOverText: "go1"
                },
                {
                    text: "Attempt to restart life support systems.",
                    nextText: 8,
                    failText: 9,
                    gameOverText: "go1"
                }
            ]
        },
        {
            id: 8, 
            text: "You rush to the life support panel. Working together, the crew temporarily stabilizes oxygen levels, but the AI remains unstable.",
            options: [
                {
                    text: "Move deeper into the ship to investigate.",
                    nextText: 10,
                    failText: 11,
                    gameOverText: "go1"
                },
                {
                    text: "Return to the airlock with the data.",
                    nextText: 6,
                    failText: 7,
                    gameOverText: "go1"
                }
            ]
        },
        {
            id: 9, 
            text: "As the crew works to stabilize the life support, the system overloads. An explosion rips through the corridor, claiming another crew member.",
            options: [
                {
                    text: "Press on with the remaining crew.",
                    nextText: 10,
                    failText: 11,
                    gameOverText: "go1"
                },
                {
                    text: "Return to the airlock.",
                    nextText: 6,
                    failText: 7,
                    gameOverText: "go1"
                }
            ]
        },
        {
            id: 10, 
            text: "You reach the ship's core. In the shadows, something moves—a creature. The ship's AI continues to malfunction. Every choice from now on is crucial.",
            options: [
                {
                    text: "Investigate the noise.",
                    nextText: 12,
                    failText: 13,
                    gameOverText: "go1"
                },
                {
                    text: "Attempt to power down the AI system.",
                    nextText: 14,
                    failText: 15,
                    gameOverText: "go1"
                }
            ]
        },
        {
            id: 11, 
            text: "As the crew presses forward, the creature emerges from the shadows, attacking a crew member and killing them instantly. Time is running out.",
            options: [
                {
                    text: "Continue toward the ship's core.",
                    nextText: 10,
                    failText: 13,
                    gameOverText: "go1"
                },
                {
                    text: "Return to the airlock.",
                    nextText: 6,
                    failText: 7,
                    gameOverText: "go1"
                }
            ]
        },
        {
            id: 12, 
            text: "You move closer to the noise. The creature is quick and vicious, killing a crew member instantly. There's no time to mourn.",
            options: [
                {
                    text: "Escape with the remaining crew.",
                    nextText: 16,
                    failText: 17,
                    gameOverText: "go1"
                },
                {
                    text: "Fight the creature.",
                    nextText: 14,
                    failText: 15,
                    gameOverText: "go1"
                }
            ]
        },
        {
            id: 13, 
            text: "The AI suddenly powers down as you get closer to the core, but it triggers an automated defense system. A barrage of lasers claims another crew member.",
            options: [
                {
                    text: "Press on with the remaining crew.",
                    nextText: 10,
                    failText: 11,
                    gameOverText: "go1"
                },
                {
                    text: "Retreat to the airlock.",
                    nextText: 6,
                    failText: 7,
                    gameOverText: "go1"
                }
            ]
        },
        {
            id: 14, 
            text: "You reach the AI's mainframe. It flickers with power, and the creature stalks closer. Time is running out to shut it down.",
            options: [
                {
                    text: "Shut down the AI system.",
                    nextText: 8,
                    failText: 9,
                    gameOverText: "go1"
                },
                {
                    text: "Escape back to the airlock.",
                    nextText: 6,
                    failText: 7,
                    gameOverText: "go1"
                }
            ]
        },
        {
            id: 15, 
            text: "The creature lunges as you attempt to shut down the AI!",
            options: [
                {
                    text: "Dodge the creature!",
                    nextText: 10,
                    failText: 11,
                    gameOverText: "go1"
                }
            ]
        },
        {
            id: 16, 
            text: "You manage to escape from the creature and make it to the airlock. However, the ship's systems remain unstable. The escape pod seems functional, but the AI is attempting to override the controls.",
            options: [
                {
                    text: "Initiate the escape pod launch sequence.",
                    nextText: 18,
                    failText: 19,
                    gameOverText: "go1"
                },
                {
                    text: "Try to disable the AI remotely.",
                    nextText: 20,
                    failText: 21,
                    gameOverText: "go1"
                }
            ]
        },
        {
            id: 17, 
            text: "As you run towards the airlock, the creature cuts you off, ripping through the crew. The escape is unsuccessful.",
            options: [
                {
                    text: "Retry the escape.",
                    nextText: 16,
                    failText: 19,
                    gameOverText: "go1"
                }
            ]
        },
        {
            id: 18, 
            text: "The escape pod launches just as the derelict ship begins to collapse. You and the surviving crew members drift into the cold void of space.",
            options: [
                {
                    text: "Well done! You've escaped Click to try again!",
                    nextText: 0,
                    failText: 0,
                    gameOverText: "go1"
                }
            ]
        },
        {
            id: 19, 
            text: "The escape pod fails to launch. As you scramble to fix the controls, the ship's AI shuts down oxygen supply. The crew succumbs to the cold grip of space.",
            options: [
                {
                    text: "Retry the escape.",
                    nextText: 16,
                    failText: 19,
                    gameOverText: "go1"
                }
            ]
        },
        {
            id: 20, 
            text: "You successfully disable the AI, but the ships systems begin a catastrophic failure. You need to get to the escape pod now.",
            options: [
                {
                    text: "Launch the escape pod.",
                    nextText: 18,
                    failText: 19,
                    gameOverText: "go1"
                }
            ]
        },
        {
            id: 21, 
            text: "You try to disable the AI, but the system overloads. An explosion tears through the airlock, sealing your fate.",
            options: [
                {
                    text: "Retry the escape.",
                    nextText: 16,
                    failText: 19,
                    gameOverText: "go1"
                }
            ]
        },
        {
        id: "go1", 
        text: "Your crew are gone. There are no surivors of this mission. <br/> What caused the death of your final crew member? <br/> The creature in the shadows? The unstable AI? <br/> Eitherway... <br/> <h1> Game Over </h1>",
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
    }
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
            return gameStart();
        };
        console.log('nextTextNodeId', nextTextNodeId);
        showTextNode(nextTextNodeId);
   
    } else {
        const failTextNodeId = option.failText;
        if (failTextNodeId === 0) {
            return gameStart();
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





