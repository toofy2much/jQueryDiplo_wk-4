"use strict";

/******* Functions & event handlers *******/

function changeColor() {
  const colorChangeEls = $('.color-change');

  for (const el of colorChangeEls) {
    $(el).toggleClass('hide');
  }
}

/******* event handler *******/
$('.color-changer').on('click', changeColor);


function validateNumber(evt) {
  evt.preventDefault();

  const numberInput = $('input[name="number"]');
  const userNum = parseInt(numberInput.val(), 10);  // typecast to num

  const formFeedback = $('#formFeedback');
  if (!userNum) {
    formFeedback.text('Please enter a smaller number');
  } else {
    formFeedback.text('You are good to go!');
  }
}

/******* event handler *******/

$('.number-form').on('submit', validateNumber);

