//valgt å bruke arrow function for å skrive alle controller funksjonene mine, da jeg trener på å skrive de riktig.
addBar = () => {
  if (inputValue < 1) {
    alert("Verdi i input box er mindre en 1");
  } else if (inputValue > 10) {
    alert("Verdi i input box er større enn 10");
  } else {
    numbers.length == 8
      ? alert("Maks antall stolper er 8")
      : numbers.push(parseInt(inputValue));
  }
  show();
};
remBar = () => {
  if (chosenBar == null) {
    alert("Choose a bar");
  } else {
    chosenBar == 0
      ? numbers.shift()
      : chosenBar == numbers.length
      ? numbers.pop()
      : remAtArrIndex();
    chosenBar = null;
    disableButtons();
    show();
  }
};

remAtArrIndex = () => {
  tN1 = numbers.splice(chosenBar);
  numbers = numbers.concat(tN1.splice(1));
};

setChosenBar = (nr) => {
  if (nr == chosenBar) {
    disableButtons();
    chosenBar = null;
  } else {
    chosenBar = nr;
    enableButtons();
  }
  show();
};

enableButtons = () => {
  isDisabled = "";
};

disableButtons = () => {
  isDisabled = "disabled";
};

cChosenBar = (bNr) => {
  numbers[bNr] = inputValue;
  show();
};

valueCheck = (v) => {
  inputValue = v;
};
