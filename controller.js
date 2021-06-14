//valgt å bruke arrow function for å skrive alle controller funksjonene mine, da jeg trener på å skrive de riktig.
addBar = () => {
  numbers.length == 8
    ? alert("Maks antall stolper er 8")
    : numbers.push(parseInt(inputValue));
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
  chosenBar = nr;
  enableButtons();
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
