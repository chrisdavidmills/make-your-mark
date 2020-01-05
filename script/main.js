// Global variable definitions

const menuList = document.querySelector('nav ul');
const menuToggle = document.querySelector('.toggle');

// Test whether viewport width is less than 700px,
// i.e. we are in the mobile view

function checkViewport() {
  let mql = window.matchMedia('(max-width: 650px)');
  return mql.matches;
}

// Adjust menu to the mobile version if we are in mobile view

if(checkViewport()) {
  menuList.style.height = '0px';
}

window.addEventListener('resize', function() {
  if(checkViewport()) {
    menuList.style.height = '0px';
  } else {
    menuList.style.height = 'auto';
  }
})

menuToggle.addEventListener('click', function() {
  if(menuList.style.height === '0px') {
    menuList.style.height = 'auto';
  } else {
    menuList.style.height = '0px';
  }
})

// code to control the sticky nav logo showing and hiding

const logoContainerElem = document.querySelector('#nav-logo');
const navElem = document.querySelector('nav');

if(!checkViewport()) {
  // Set things up

  window.addEventListener('scroll', handleMenuScroll);

  function handleMenuScroll() {
    let boundingBox = navElem.getBoundingClientRect();
    // needs to be top, as IE/Edge don't support x/y
    // also Edge returns different value for top, so needs to be at least 24 to work on all browsers
    if (boundingBox.top > 30) {
      if(logoContainerElem.getAttribute('class')) {
        logoContainerElem.setAttribute('class', 'shift-left');
      }
    } else {
      logoContainerElem.setAttribute('class', 'shift-right');
    }
  }
}
