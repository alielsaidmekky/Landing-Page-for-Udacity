/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */

const navigation = document.getElementById('navbar__list');

const sections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

// function to creat navigation lists

const navList = () => {
  let navLi = '';
  sections.forEach(section => {
    const sectionId = section.id;
    const sectionName = section.dataset.nav;
    navLi += `<li><a class="menu__link" href="#${sectionId}">${sectionName}</a></li>`;
  });
  navigation.innerHTML = navLi;
};

navList();

// Add class 'active' to section when near top of viewport

window.onscroll = function () {
  document.querySelectorAll('section').forEach(function(active) {
    if (
      active.getBoundingClientRect().top >= -300 &&
      active.getBoundingClientRect().top <= 150
    ) {
      // addition of active class
      active.classList.add('your-active-class');
    } else {
      // remove of active class
      active.classList.remove('your-active-class');
    };
  });
};



navigation.addEventListener("click", (toSection) => {
  // toSection.preventDefault();
  if (toSection.target.dadaset.nav) {
    document.getElementById(`${toSec.target.dadaset.nav}`).scrollIntoView({ behavior: 'smooth', block: "start"});
  };
});



// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Set sections as active