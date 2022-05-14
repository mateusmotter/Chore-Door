let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');
const botDoorPath = "https://content.codecademy.com/projects/chore-door/images/robot.svg";
const beachDoorPath = 'https://content.codecademy.com/projects/chore-door/images/beach.svg';
const spaceDoorPath = 'https://content.codecademy.com/projects/chore-door/images/space.svg';
const paths = [botDoorPath, beachDoorPath, spaceDoorPath];
let numClosedDoors = 3;
let victories = 0;
let losses = 0;
let result = document.getElementById('message');

// Generates a random sequence of three numbers, later used to select a random image (bot, beach or space) from the 'paths' variable;

const randomSequenceGenerator = () => {
    let sequence = [];
    while (sequence.length < 3) {
        let randomNum = Math.floor(Math.random() * 3);
        if (!sequence.includes(randomNum)) {
            sequence.push(randomNum);
        } 
    }
    return sequence;
}

//resets game to original values

const resetGame = () => {
    doorImage1.src = 'https://content.codecademy.com/projects/chore-door/images/closed_door.svg';
    doorImage2.src = 'https://content.codecademy.com/projects/chore-door/images/closed_door.svg';
    doorImage3.src = 'https://content.codecademy.com/projects/chore-door/images/closed_door.svg';
    message.innerHTML = 'Good Luck';
    numClosedDoors = 3;
    randomSequence = randomSequenceGenerator();
    result.style.border = 'none';
}

// Checks if the clicked door is the bot door and how many doors are still closed.

const messageGenerator = (selectedImage) => {
    // if you opened the bot door and it was the last remaining door, renders you win message, adds a victory point and allows game to reset.
    if (paths[selectedImage] === botDoorPath && numClosedDoors === 1) {
        let winsCounter = document.getElementById('wins');
        result.innerHTML = 'You Win! Play Again';
        victories++;
        winsCounter.innerHTML = `${victories}`;
        result.style.border = '5px solid white';
        result.onclick = () => {
            resetGame();
        }
    }
    // if you opened the bot door and it was not the last remaining door, renders game over message, adds a loss point and allows game to reset.
    if (paths[selectedImage] === botDoorPath && numClosedDoors !== 1) {
        let lossesCounter = document.getElementById('losses');
        result.innerHTML = 'Game Over!';
        losses++;
        lossesCounter.innerHTML = `${losses}`;
        result.style.border = '5px solid white';
        result.onclick = () => {
            resetGame();
        }
    } else {
        numClosedDoors--;
    }
}


let randomSequence = randomSequenceGenerator();


doorImage1.onclick = () => {
    //Check if the last door you opened caused a 'Game Over!' message, in case you do, you can no longer open any other doors.
    if (message.innerHTML === 'Game Over!') {
        return;
    } else {
    doorImage1.src = paths[randomSequence[0]];
    messageGenerator(randomSequence[0]);
    }
};

doorImage2.onclick = () => {
    if (message.innerHTML === 'Game Over!') {
        return;
    } else {
    doorImage2.src = paths[randomSequence[1]];
    messageGenerator(randomSequence[1]);
    }
};

doorImage3.onclick = () => {
    if (message.innerHTML === 'Game Over!') {
        return;
    } else {
    doorImage3.src = paths[randomSequence[2]];
    messageGenerator(randomSequence[2]);
    }
};

