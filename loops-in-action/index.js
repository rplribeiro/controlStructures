// JavaScript Calculator

const inputNumber = document.getElementById("user-number");
const calculatorButtonPressed = document
  .getElementById("calcButton")
  .addEventListener("click", calcButtonPressed);
const outputResult = document.getElementById("calculated-sum");

function calcButtonPressed() {
  let sumUpToTheNumber = 0;
  for (let i = inputNumber.valueAsNumber; i != 0; i--) {
    sumUpToTheNumber = sumUpToTheNumber + i;
  }
  outputResult.textContent = sumUpToTheNumber;
  outputResult.style.display = "block";
}

// Highlight Links

const highlightLinksButton = document
  .querySelector("#highlight-links button")
  .addEventListener("click", highlightLinksButtonPressed);
const anchorElements = document.querySelectorAll("#highlight-links a");

function highlightLinksButtonPressed() {
  for (const anchors of anchorElements) {
    anchors.classList.add("highlight");
  }
}

// Your Information

const dummyUserData = {
  name: "Rui",
  surname: "Ribeiro",
  age: 41,
};

const dataInformationButton = document
  .querySelector("#user-data button")
  .addEventListener("click", displayInformation);

const displayList = document.getElementById("output-user-data");

function displayInformation() {
  displayList.innerHTML = "";

  for (const key in dummyUserData) {
    let li = document.createElement("li");
    outputText =
      key[0].toUpperCase() + key.substring(1) + ": " + dummyUserData[key];
    li.textContent = outputText;
    displayList.append(li);
  }
}

// statistics

const rollDiceButton = document
  .querySelector("#statistics button")
  .addEventListener("click", rollDiceButtonPressed);

function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function rollDiceButtonPressed() {
  const targetNumberInput =
    document.getElementById("user-target-number").valueAsNumber;

  const diceRollListElements = document.getElementById("dice-rolls");

  diceRollListElements.innerHTML = "";

  let hasRolledTargetNumber = false;
  let numberOfRolls = 0;

  while (!hasRolledTargetNumber) {
    const rolledNumber = rollDice();
    numberOfRolls++;

    const newRollListElement = document.createElement("li");
    outputText = "Roll " + numberOfRolls + ": " + rolledNumber;
    newRollListElement.textContent = outputText;
    diceRollListElements.append(newRollListElement);
    // if (rolledNumber === targetNumberInput) {
    //     hasRolledTargetNumber = true;
    // }       --> same as below
    hasRolledTargetNumber = (rolledNumber === targetNumberInput);
  }

  const totalOutputRolls = document.getElementById("output-total-rolls");
  const outputTargetNumber = document.getElementById("output-target-number");

  outputTargetNumber.textContent = targetNumberInput;
  totalOutputRolls.textContent = numberOfRolls;

  const textAdaptation = document.getElementById("output-rolls-result").childNodes[2];

  if (numberOfRolls == 1) {
    textAdaptation.textContent = " roll to roll a ";
  } else {
    textAdaptation.textContent = " rolls to roll a ";
  }
}
