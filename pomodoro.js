// Adding and subtracting from the session and break inputs
// TODO: The timer display needs to be adjusted to tbe a clock display instead of just a number.
var cur;
var sessNum;
var breakNum;

$('#session-minus').click(function() {
  cur = $('#session-length').html();
  if (cur > 1) {
    sessNum = parseInt(cur, 10) - 1;
  }
  $('#session-length, #session-timer').html(sessNum);
});

$('#session-plus').click(function() {
  cur = $('#session-length').html();
  sessNum = parseInt(cur, 10) + 1;
  $('#session-length, #session-timer').html(sessNum);
});

$('#break-minus').click(function() {
  cur = $('#break-length').html();
  if(cur > 1) {
    breakNum = parseInt(cur, 10) - 1;
  }
  $('#break-length').html(breakNum);
});

$('#break-plus').click(function() {
  cur = $('#break-length').html();
  breakNum = parseInt(cur, 10) + 1;
  $('#break-length').html(breakNum);
});


//Pause and Play Animation. It's ALIVE!!!!
$('#the-clock').click(function () {
  $('.inner-circle').toggleClass('inner-circle-play');
});
