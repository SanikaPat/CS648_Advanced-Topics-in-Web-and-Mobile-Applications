function playRockPaperScissors() {
    let userChoice = prompt("Enter your choice: rock, paper, or scissors");
    if (userChoice === null) {
        alert("Game cancelled.");
        return;
    }
    userChoice = userChoice.toLowerCase().trim();
    if (userChoice !== "rock" && userChoice !== "paper" && userChoice !== "scissors") {
        alert("Invalid choice! Please enter rock, paper, or scissors.");
        return;
    }
    
    const randomNumber = Math.floor(Math.random() * 3); 
    let computerChoice;
    if (randomNumber === 0) {
        computerChoice = "rock";
    } else if (randomNumber === 1) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    console.log(`User chose: ${userChoice}`);
    console.log(`Computer chose: ${computerChoice}`);
 
    let resultMessage = "";
    if (userChoice === computerChoice) {
        resultMessage = `It's a tie! Both chose ${userChoice}.`;
    }
    else if (userChoice === "rock") {
        if (computerChoice === "scissors") {
            resultMessage = "You win! Rock destroys scissors.";
        } else {
            resultMessage = "Computer wins! Paper covers rock.";
        }
    }
    else if (userChoice === "paper") {
        if (computerChoice === "rock") {
            resultMessage = "You win! Paper covers rock.";
        } else {
            resultMessage = "Computer wins! Scissors cut paper.";
        }
    }
    else if (userChoice === "scissors") {
        if (computerChoice === "paper") {
            resultMessage = "You win! Scissors cut paper.";
        } else {
            resultMessage = "Computer wins! Rock destroys scissors.";
        }
    }
    
    alert(resultMessage);
    console.log(resultMessage);
}

playRockPaperScissors();
