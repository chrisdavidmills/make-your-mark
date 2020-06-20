// basic variable setup

// select box
const regionSelect = document.querySelector('#region');

// cost amounts to display
const postage = document.querySelector('.postage-cost span');
const total = document.querySelector('.total span');

let jsonObj;

// Lookup for the expanded region names

let regionLookup = {
  "uk": "United Kingdom",
  "eu": "Europe",
  "row": "Rest of world"
}

// hardcoded total cost of items.
// on the real page these would be gotten from the shopping cart JSON
let itemTotal = 65;

// fetch JSON
fetch('script/sample-checkout.json')
.then(response => response.json())
.then(json => init(json));

// init functionality - populate regions and initial postage valus
function init(json) {
  jsonObj = json;
  for (let region in jsonObj) {
    let optionElem = document.createElement('option');
    optionElem.setAttribute('value', region);
    optionElem.setAttribute('data-price', jsonObj[region]);
    optionElem.textContent = regionLookup[region] + ': £' + jsonObj[region];
    regionSelect.appendChild(optionElem);
  }

  updateTotal();
}

// function to update the postage and total on the "your order" column whenever the postage is changed

function updateTotal() {
  let currentPostage = regionSelect.selectedOptions[0].getAttribute('data-price');
  let overallTotal = Number(itemTotal) + Number(currentPostage);

  postage.textContent = currentPostage;
  total.textContent = overallTotal;
}

// Event handler to update postage select whenever region changes

regionSelect.addEventListener('change', updateTotal);
