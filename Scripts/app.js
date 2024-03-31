import { sendEmail } from "./contact.js";
import { emailCheck } from "./email-validation.js";
import { slideFunction } from "./slide-section.js";

slideFunction();
const popElem = document.querySelector('.pop-ul')
const menuTxt = document.querySelector('.menu-text') 
const topCont = document.querySelector('.notificataion-board-cont')

document.querySelectorAll('.menu, .menu-text').forEach(elem => {
  elem.addEventListener('click', () => {
    popElem.classList.toggle('show')
    // topCont.classList.toggle('margin-top')
    if (menuTxt.innerText === 'Menu') {
      menuTxt.innerText = 'Close'
    } else {
      menuTxt.innerText = 'Menu'
    }
  });
});

document.querySelectorAll('.home').forEach(elem => {
  elem.addEventListener('click', () => {
  document.querySelector('.notificataion-board-cont').scrollIntoView()
    popElem.classList.remove('show')
  });
});

document.querySelectorAll('.about').forEach(elem => {
  elem.addEventListener('click', () => {
    document.querySelector('.about-cont').scrollIntoView()
    popElem.classList.remove('show')

  });
});

document.querySelectorAll('.projects').forEach(elem => {
  elem.addEventListener('click', () => {
    document.querySelector('.projects-cont').scrollIntoView()
    popElem.classList.remove('show')

  });
});

document.querySelectorAll('.technologies').forEach(elem => {
  elem.addEventListener('click', () => {
    document.querySelector('.tecnologies-cont').scrollIntoView()
    popElem.classList.remove('show')

  });
});

document.querySelectorAll('.skills').forEach(elem => {
  elem.addEventListener('click', () => {
    document.querySelector('.skills-cont').scrollIntoView()
    popElem.classList.remove('show')

  });
});

document.querySelectorAll('.contact').forEach(elem => {
  elem.addEventListener('click', () => {
    document.querySelector('.contact-cont').scrollIntoView();
  });
});

document.querySelectorAll('ul, .left-section, .contact-cont, .tecnologies-cont, .projects-cont, .about-cont, footer, .skills-cont , .notificataion-board-cont').forEach(elem => {
  elem.addEventListener('click', () => {
    popElem.classList.remove('show');
    menuTxt.innerText = 'Menu'
  });
});

window.addEventListener('scroll', () => {
  popElem.classList.remove('show');
  menuTxt.innerText = 'Menu';
});

document.querySelector('button').addEventListener('click', (event) => {
  
  let name = document.querySelector('.name').value
  let email = document.querySelector('.email').value
  let message = document.querySelector('.message').value

  const emailValidation = emailCheck(email);
  if (!name) {
    document.querySelector('.name').focus();
    alert('Please type your name.')
    console.log(document.querySelector('.name'));
  } else if (!emailValidation) {
    document.querySelector('.email').focus();
    alert('Please type a valid email Address.')
  } else if (!message) {
    document.querySelector('.message').focus();
    alert('Please type your message.')
  } else {
    let dataObj = {
      title: 'Message From Porfolio',
      name,
      email,
      message
    }
  
    sendEmail(dataObj);
    document.querySelector('.name').value = ''
    document.querySelector('.email').value = ''
    document.querySelector('.message').value = ''
  }
 
})