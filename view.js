// hjelpevariable for både view og controller
var contentDiv = document.getElementById("content");

// view
show();
function show() {
  svgInnerHtml = "";
  for (let i = 0; i < numbers.length; i++) {
    svgInnerHtml += createBar(numbers[i], i + 1);
  }
  contentDiv.innerHTML = `
  <svg id="chart" width="500" viewBox="0 0 81 103">
  ${svgInnerHtml}
  </svg><br/>
  <p>
  Valgt stolpe er ${chosenBar == null ? "-" : chosenBar + 1}
  med verdi ${chosenBar == null ? "-" : numbers[chosenBar]}
  </p>
  Ny verdi:<input type="number" min="1" max="10" oninput="valueCheck(this.value)" value="${inputValue}"/>
  <button onclick="addBar()">Legg til stolpe</button><br>
  <button ${isDisabled} onClick="cChosenBar(${chosenBar})">Endre valgt stolpe</button></br>
  <button ${isDisabled} onClick="remBar()">Fjerne valgt stolpe</button>
  </br>
  </br>
  <button onclick="window.location='unitTest.html';">Unit test her</button>
  `;
}
function createBar(number, barNo) {
  const width = 8;
  const spacing = 2;
  let x = 2 + (barNo - 1) * (width + spacing);
  let height = number * 10;
  let y = 101 - height;
  let color = calcColor(1, 10, barNo);
  let stroke = chosenBar == barNo - 1 ? "black" : " ";
  return `<rect stroke="${stroke}" width="${width}" height="${height}"
                             x="${x}" y="${y}" fill="${color}" onClick="setChosenBar(${barNo} - 1)"></rect>`;
}

function calcColor(min, max, val) {
  var minHue = 240,
    maxHue = 0;
  var curPercent = (val - min) / (max - min);
  var colString =
    "hsl(" +
    (Math.floor(curPercent * (maxHue - minHue) + minHue) + ",100%,50%)");
  return colString;
}
//viewBox="min x, min y, width, height"
