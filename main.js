//  Navbar
const menuList = document.querySelector('.nav-list');
const mobile_icon = document.querySelector('.hamburger');

if (mobile_icon) {
  mobile_icon.addEventListener('click', () => {
    mobile_icon.classList.toggle('is-active');
    menuList.classList.toggle('active');
  });
}

// FAQ

const title = document.getElementById('title');
const toggleContent = document.getElementById('content');
const downArrow = document.querySelector('.down-arrow');

const title1 = document.getElementById('title1');
const toggleContent1 = document.getElementById('content1');
const downArrow1 = document.querySelector('.down-arrow1');

const title2 = document.getElementById('title2');
const toggleContent2 = document.getElementById('content2');
const downArrow2 = document.querySelector('.down-arrow2');

const title3 = document.getElementById('title3');
const toggleContent3 = document.getElementById('content3');
const downArrow3 = document.querySelector('.down-arrow3');

const title4 = document.getElementById('title4');
const toggleContent4 = document.getElementById('content4');
const downArrow4 = document.querySelector('.down-arrow4');

const title5 = document.getElementById('title5');
const toggleContent5 = document.getElementById('content5');
const downArrow5 = document.querySelector('.down-arrow5');

const title6 = document.getElementById('title6');
const toggleContent6 = document.getElementById('content6');
const downArrow6 = document.querySelector('.down-arrow6');

if (title) {
  title.addEventListener('click', (e) => {
    toggleContent.classList.toggle('active');
  });
}

if (downArrow) {
  downArrow.addEventListener('click', (e) => {
    toggleContent.classList.toggle('active');
  });
}

if (title1) {
  title1.addEventListener('click', (e) => {
    toggleContent1.classList.toggle('active');
  });
}

if (downArrow1) {
  downArrow1.addEventListener('click', (e) => {
    toggleContent1.classList.toggle('active');
  });
}

if (title2) {
  title2.addEventListener('click', (e) => {
    toggleContent2.classList.toggle('active');
  });
}

if (downArrow2) {
  downArrow2.addEventListener('click', (e) => {
    toggleContent2.classList.toggle('active');
  });
}

if (title3) {
  title3.addEventListener('click', (e) => {
    toggleContent3.classList.toggle('active');
  });
}

if (downArrow3) {
  downArrow3.addEventListener('click', (e) => {
    toggleContent3.classList.toggle('active');
  });
}

if (title4) {
  title4.addEventListener('click', (e) => {
    toggleContent4.classList.toggle('active');
  });
}

if (downArrow4) {
  downArrow4.addEventListener('click', (e) => {
    toggleContent4.classList.toggle('active');
  });
}

if (title5) {
  title5.addEventListener('click', (e) => {
    toggleContent5.classList.toggle('active');
  });
}

if (downArrow5) {
  downArrow5.addEventListener('click', (e) => {
    toggleContent5.classList.toggle('active');
  });
}

if (title6) {
  title6.addEventListener('click', (e) => {
    toggleContent6.classList.toggle('active');
  });
}

if (downArrow6) {
  downArrow6.addEventListener('click', (e) => {
    toggleContent6.classList.toggle('active');
  });
}
const errmessage = 'Please fill all the fields..';
const successmessage = 'You have successfully applied..';

const ApplyBtn = document.getElementById('apply-btn');

ApplyBtn.addEventListener('click', (e) => {
  e.preventDefault();
  // get user inputs
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const mail = document.getElementById('mail').value;
  const qualification = document.getElementById('qualification').value;
  const current_work = document.getElementById('current_work').value;

  if (!name || !phone || !mail || !qualification || !current_work) {
    const cardElement = document.createElement('div');
    cardElement.classList.add('errorDiv');
    cardElement.innerHTML = `<h3>${errmessage}</h3>`;

    // select the form container and insert the card element after the form and the element position is absolute
    document
      .querySelector('.form-container')
      .insertAdjacentElement('afterbegin', cardElement);

    setInterval(() => {
      // remove element after 5sec
      if (document.querySelector('.errorDiv')) {
        document.querySelector('.errorDiv').remove();
      }
    }, 5000);
  } else if (name && phone && mail && qualification && current_work) {
    const cardElement = document.createElement('div');
    cardElement.classList.add('successDiv');
    cardElement.innerHTML = `<p>${successmessage}</p>`;

    document
      .querySelector('.form-container')
      .insertAdjacentElement('afterbegin', cardElement);

    setInterval(() => {
      // remove element after 5sec
      if (document.querySelector('.successDiv')) {
        document.querySelector('.successDiv').remove();
      }
    }, 5000);
    // reset values
    document.getElementById('name').value = ' ';
    document.getElementById('phone').value = ' ';
    document.getElementById('mail').value = ' ';
    document.getElementById('qualification').value = ' ';
    document.getElementById('current_work').value = ' ';
  }
});
