// basic variables setup

const cardRadio = document.querySelector('input[value="card"]');
const paypalRadio = document.querySelector('input[value="paypal"]');

const paymentTitle = document.querySelector('.payment-title');
const paymentPara = document.querySelector('.payment-para');
const paymentBtn = document.querySelector('.payment-button');

const textStrings = [
  {
    title: 'Credit/debit card payment',
    paragraph: 'You have the "Credit/debit card" payment option selected. Press the button below to be taken to the website of our trusted payment vendor — Stripe — where you can fill in your card details to pay for your order. Once you have completed payment, you will be redirected back to this website.',
    button: 'Proceed to Stripe website'
  },
  {
    title: 'Paypal payment',
    paragraph: 'You have the "Paypal" payment option selected. Press the button below to be taken to the Paypal website, where you can confirm your details and pay for your order. Once you have completed payment, you will be redirected back to this website.',
    button: 'Proceed to Paypal website'
  }
]

// show appropriate information depending on radio button

function updatePaymentInfo(index) {
  paymentTitle.textContent = textStrings[index].title;
  paymentPara.textContent = textStrings[index].paragraph;
  paymentBtn.textContent = textStrings[index].button;
}

cardRadio.addEventListener('change', function() {
  updatePaymentInfo(0);
})

paypalRadio.addEventListener('change', function() {
  updatePaymentInfo(1);
})
