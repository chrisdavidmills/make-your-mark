// basic variable setup

const cardRadio = document.querySelector('input[value="card"]');
const paypalRadio = document.querySelector('input[value="paypal"]');
const ccFieldset = document.querySelector('.credit-card');
const submitBtn = document.querySelector('form button');
var yearSelect = document.querySelector('#cc-year');

// show/hide card entry form

cardRadio.addEventListener('change', function() {
  ccFieldset.style.display = 'block';
  submitBtn.textContent = 'Submit credit card payment';
})

paypalRadio.addEventListener('change', function() {
  ccFieldset.style.display = 'none';
  submitBtn.textContent = 'Go to Paypal for payment';
})

// auto-populate year

function populateYears() {
  // get this year as a number
  var date = new Date();
  var year = date.getFullYear();

  // Make this year, and the 100 years before it available in the year <select>
  for(var i = 10; i >= 0; i--) {
    var option = document.createElement('option');
    option.textContent = year + i;
    yearSelect.appendChild(option);
  }
}

populateYears();
