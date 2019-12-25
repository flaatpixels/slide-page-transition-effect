/**
 * Get all navigation buttons
 * @type {HTMLElement}
 */
var navigationButtons = document.querySelectorAll('.js-nav-btn');

/**
 * Get the slides container
 * @type {HTMLElement}
 */
var wrapper = document.querySelector('.js-slide-wrapper');

/** Add event on each navigation button */
for(var i = 0; i < navigationButtons.length; i++){
  navigationButtons[i].addEventListener('click', function(){
    // Get to now the new position of the sliders
    // Where the sliders will move to
    // Move each slide (the wrapper) to 25% of the current postion
    var newPosition = this.dataset.slidePosition * 25 * -1;
    // Move the wrapper
    wrapper.style.transform = 'translateX(' + newPosition + '%)';

    // Remove the old current nav button style
    // Add it to the new current nav button
    var currentNavBtn = document.querySelector('.js-nav-btn.current');
    currentNavBtn.classList.remove('current');
    this.classList.add('current');
  })
}