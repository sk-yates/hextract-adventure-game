//* file://wsl.localhost/Ubuntu/home/sk-yates/code/ga/projects/browser-based-game-project/hextract-adventure-game/index.html

/*-------------- Constants -------------*/

const storyTextElement = document.getElementById("storyView");
const optionButtonsElement = document.querySelector(".optionButtons");

const textNodes = [
    {
        id: 1, 
        text: "The team are aboard the lost vessel. Vessel ID: not found.",
        options: [
            {
                text: "Begin tactical sweep of surrounding area",
                nextText: 2
            },
            {
                text: "Call out for any survivors",
                nextText: 3
            }
        ]
    },
    {
        id: 2,
        text: "The team begin their sweep. There are clear signs of damage and remnants of some form of conflict.",
        options: [
            {
                text: "Assess damage to surrounding structures and systems",
                nextText: 4
            },
            {
                text: "Search for any bodies or other remains",
                nextText: 5
            }
        ]
    },
    // Add more textNodes as needed
];

/*-------------- Functions -------------*/

function gameStart() {
    showTextNode(1);  // Start with the first node
}

function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(node => node.id === textNodeIndex);
    storyTextElement.innerText = textNode.text;

    // Clear out any old buttons
    optionButtonsElement.innerHTML = '';

    // Loop over the options and create new buttons for each option
    textNode.options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectOption(option));
        optionButtonsElement.appendChild(button);
    });
}

function selectOption(option) {
    const nextTextNodeId = option.nextText;
    showTextNode(nextTextNodeId);
}

gameStart();


/*----------- Event Listeners ----------*/












// // Dice rolling function
// function rollDie() {
//     const die = document.getElementById('diceRoll');
//     const randomNumber = Math.floor(Math.random() * 6) + 1;
//     die.textContent = randomNumber;
    
//     die.style.transform = Math.random();
    
// }

// {
//     if (leftChoice && randomNumber > 3 ) {

//     } else if (rightChoice && randomNumber < 4 ) {

//     } else {

//     }
// }

