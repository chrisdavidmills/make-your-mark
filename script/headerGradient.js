// Create gradient for header

let start = 'radial-gradient(circle at 30% 45%,';
let end = ')';
let red = [];
let green = [];
let blue = [];
let startPx = [];
let gradValue = '';

for(let i = 0; i < 60; i++) {
  let redAdjuster = Math.floor((255 - 44)/50);
  let redValue = 255 - (i * redAdjuster);
  red.push(redValue);
}

for(let j = 0; j < 60; j++) {
  let greenAdjuster = Math.floor((255 - 60)/50);
  let greenValue = 255 - (j * greenAdjuster);
  green.push(greenValue);
}

for(let k = 0; k < 60; k++) {
  let blueAdjuster = Math.floor((255 - 122)/50);
  let blueValue = 255 - (k * blueAdjuster);
  blue.push(blueValue);
}

for(let l = 0; l < 60; l++) {
  let startAdjuster = 20;
  let startValue = 0 + (l * startAdjuster);
  startPx.push(startValue);
}

gradValue += start;

for(let m = 0; m < 60; m++) {
  if(m !== 59) {
    gradValue += 'rgb(' + red[m] + ',' + green[m] + ',' + blue[m] + ') ' + startPx[m] + 'px, ';
    gradValue += 'rgb(' + red[m] + ',' + green[m] + ',' + blue[m] + ') ' + (startPx[m] + 19) + 'px, ';
  } else {
    gradValue += 'rgb(' + red[m] + ',' + green[m] + ',' + blue[m] + ') ' + startPx[m] + 'px, ';
    gradValue += 'rgb(' + red[m] + ',' + green[m] + ',' + blue[m] + ') ' + (startPx[m] + 19) + 'px';
  }
}

gradValue += end;

let headerElem = document.querySelector('header');
headerElem.style.backgroundImage = gradValue;
let footerElem = document.querySelector('footer');
footerElem.style.backgroundImage = gradValue;
