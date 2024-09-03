//* file://wsl.localhost/Ubuntu/home/sk-yates/code/ga/projects/browser-based-game-project/hextract-adventure-game/index.html

/*-------------- Constants -------------*/

const storyTextElement = document.getElementById("storyView");

const optionButtonsElement = document.querySelector(".optionButtons");

const textNodes = [
    {
        id: 1, 
        text: "The team are aboard the lost vessel. vessel ID: not found",
        options: [
            {
                text:"Begin tactical sweep of surrounding area",
                nextText: 2
            },
            {
                text:"Call out for any survivors",
                nextText: 3
            }
        ]
    },
    {
        id: 2,
        text: "The team begin their sweep, there are clear signs of damage and remnants of some form of conflict",
        options: [
            {
                text:"Assess damange to surrounding structures and systems",
                nextText: 4
            },
            {
                text:"Search for any bodies or other remains",
                nextText: 5
            }
        ]
    },
];

/*---------- Variables (state) ---------*/

let crewMembers = {};


/*----- Cached Element References  -----*/


/*-------------- Functions -------------*/

function gameStart() {
    state = {};
    showTextNode(1);
}


function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex);
    storyTextElement.innerText = textNode.text;

    // Select all existing buttons with class 'btn'
    const buttons = document.querySelectorAll('.optionButtons .btn');

    // Loop over the options and update the buttons accordingly
    textNode.options.forEach((option, index) => {
        if (index < buttons.length) {
            buttons[index].innerText = option.text;
            buttons[index].replaceWith(buttons[index].cloneNode(true));
            buttons[index].addEventListener('click', () => selectOption(option));
        }
    });

    for (let i = textNode.options.length; i < buttons.length; i++) {
        buttons[i].style.display = 'none';
    };
};


function selectOption(option) {
    const nextTextNodeId = option.nextText;
    showTextNode(nextTextNodeId);
};



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

