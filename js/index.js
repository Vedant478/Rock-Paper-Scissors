const handOptions = {
    "rock": "assets/Rock.png",
    "paper": "assets/paper.png",
    "scissors": "assets/Scissors.png"
}
let SCORE = 0;
let player1Name = "";
let rounds = 0;
let currentRound = 0;
const startGame = () => {
    player1Name = document.getElementById("playerName").value;

    rounds = parseInt(document.getElementById("rounds").value);
    if (isNaN(rounds) || rounds < 1) {
        alert("Please enter a valid number of rounds.");
        return;
    }
    document.getElementById("playerNameLabel").innerText = player1Name;
    // Hide player name input screen
    document.getElementById("playerNameScreen").style.display = "none";
    // Show pick hands screen
    document.getElementById("pickHandsScreen").style.display = "flex";
    // Other game initialization code...
    console.log("Game started with player name:", player1Name);
}

const pickUserHand = (hand) => {
    console.log(hand);
    if (currentRound < rounds) {
        currentRound++;
        //to hide the home page
        let hands = document.querySelector(".hands")
        hands.style.display = "none";

        //to show the contest page 
        let contest = document.querySelector(".contest")
        contest.style.display = "flex";

        //to see what user picks 
        document.getElementById("userPickImage").src = handOptions[hand];

        let cpHand = pickCompHand();
        refree(hand, cpHand)
    } else {
        endSession();
    }
}
const endSession = () => {
    alert("Your session has ended. To play game again please refresh the page");
    SCORE = 0;
    player1Name = "";
    rounds = 0;
    currentRound = 0;
    document.getElementById("playerName").value = "";
    document.getElementById("rounds").value = "1";
    // Hide pick hands screen
    document.getElementById("pickHandsScreen").style.display = "none";

    // Show enter name screen
    document.getElementById("playerNameScreen").style.display = "block";
    document.getElementById("roundsInputScreen").style.display = "block";

    // Reset current round
    currentRound = 0;
}
const pickCompHand = () => {
    let hands = ["rock", "paper", "scissors"]
    let cpHand = hands[Math.floor(Math.random() * 3)]

    //to see what computer picks 
    document.getElementById("compPickImage").src = handOptions[cpHand];

    return cpHand;
}

const refree = (userHand, cpHand) => {

    if (userHand == "paper" && cpHand == "scissors") {
        setDecision("YOU LOSE!")
    }
    if (userHand == "paper" && cpHand == "rock") {
        setDecision("YOU WIN!")
        setScore(SCORE + 1)
    }
    if (userHand == "paper" && cpHand == "paper") {
        setDecision("It's a tie!");
    }
    if (userHand == "rock" && cpHand == "scissors") {
        setDecision("YOU WIN!");
        setScore(SCORE + 1);
    }
    if (userHand == "rock" && cpHand == "paper") {
        setDecision("YOU LOSE!");
    }
    if (userHand == "rock" && cpHand == "rock") {
        setDecision("It's a tie!");
    }
    if (userHand == "scissors" && cpHand == "scissors") {
        setDecision("It's a tie!");
    }
    if (userHand == "scissors" && cpHand == "rock") {
        setDecision("YOU LOSE!");
    }
    if (userHand == "scissors" && cpHand == "paper") {
        setDecision("YOU WIN!");
        setScore(SCORE + 1);
    }
}

const setDecision = (decision) => {
    document.querySelector(".decision h1").innerText = decision;
}

const setScore = (score) => {
    SCORE = score;
    document.querySelector(".score h1").innerText = score;
}
const restart = () => {
    //to hide the home page
    let hands = document.querySelector(".hands")
    hands.style.display = "flex";

    //to show the contest page 
    let contest = document.querySelector(".contest")
    contest.style.display = "none";
}