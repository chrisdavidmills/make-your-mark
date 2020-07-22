// basic variables setup

const cardRadio = document.querySelector('input[value="card"]');
const paypalRadio = document.querySelector('input[value="paypal"]');

const paymentCredit = document.querySelector('.payment-credit');
const paymentPaypal = document.querySelector('.payment-paypal');

// show appropriate information depending on radio button selection

paymentCredit.style.display = 'block';
paymentPaypal.style.display = 'none';

cardRadio.addEventListener('change', function() {
  paymentCredit.style.display = 'block';
  paymentPaypal.style.display = 'none';
})

paypalRadio.addEventListener('change', function() {
  paymentCredit.style.display = 'none';
  paymentPaypal.style.display = 'block';
})
