let userScore = 0;
let compScore = 0;

let userScorePara = document.getElementById("you");
let compScorePara = document.getElementById("pc");
let reset = document.querySelector(".reset-btn");
let choices = document.querySelectorAll(".choice");

let stat = document.querySelector(".status");

const whoWin = (userChoice, computerChoice) => {
  let win = true;

  if (userChoice === "rock") {
    win = computerChoice === "scissors" ? true : false;
  } else if (userChoice === "paper") {
    win = computerChoice === "rock" ? true : false;
  } else {
    win = computerChoice === "paper" ? true : false;
  }

  if (win) {
    console.log("You Win");
    userScore++;
    userScorePara.innerText = userScore;
    stat.innerText = "You Win";
    stat.style.backgroundColor = "#51A23F";
  } else {
    console.log("Computer Win");
    compScore++;
    compScorePara.innerText = compScore;
    stat.innerText = "Computer Win";
    stat.style.backgroundColor = "#DE0404";
  }
};

const draw = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    console.log("Draw");
    stat.innerText = "It's a Draw";
    stat.style.backgroundColor = "#030027";
  } else {
    whoWin(userChoice, computerChoice);
  }
};

const compChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const playGame = (userChoice) => {
  const computerChoice = compChoice();

  console.log("user =", userChoice);
  console.log("computer =", computerChoice);

  draw(userChoice, computerChoice);

  reset.addEventListener("click", () => {
    userScore = 0;
    userScorePara.innerText = userScore;

    compScore = 0;
    compScorePara.innerText = compScore;

    stat.innerText = "Play Your Turn";
    stat.style.backgroundColor = "#030027";
  });
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    let userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
