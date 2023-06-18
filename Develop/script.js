$(function () {
  var workDayHours = [
    '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM'
  ];

  // loops through the workDayHours array to create a time block for each hour
  for (var i = 0; i <workDayHours.length; i++){
    var hour = workDayHours[i];
    var timeBlock = $('<div>').attr('id', 'hour-' + (i+9)).addClass('row time-block');
    var hourCol = $('<div>').addClass('cal-2 col-md-1 hour test-center py-3').text(hour);
    // not sure what's wrong with this line just yet... it's supposed to be description not descriptionCol :face_exhaling:
    var description = $('<textarea>').addClass('col-8 col-md-10 description').attr('rows', '3');
    var saveBtn = $('<button>').addClass('btn saveBtn col-2 col-md-1').attr('aria-label', 'save');
    var saveIcon = $('<i>').addClass('fas fa-save').attr('aria-hidden', 'true');

    saveBtn.append(saveIcon);
    timeBlock.append(hourCol, description, saveBtn);
    $('.container').append(timeBlock);
}

var currentHour = dayjs().formate('H');

$('.timeBlock').each(function (){
  var blockHour = parseInt($(this).attr('id').split('-')[1]);
  // compare the block hour to the current hour to apply the correct class
  if (blockHour < currentHour){
    $(this).addClass('past');
  } else if (blockHour === currentHour){
    $(this).addClass('present');
  } else {
    $(this).addClass('future');
  }
});


  /*
  TODO: Add a listener for click events on the save button. This code should
  use the id in the containing time-block as a key to save the user input in
  local storage. 
  HINT: What does `this` reference in the click listener function? 
  How can DOM traversal be used to get the "hour-x" id of the time-block 
  containing the button that was clicked? 
  How might the id be useful when saving the description in local storage?
  
  TODO: Add code to apply the past, present, or future class to each time
  block by comparing the id to the current hour. 
  HINTS: How can the id attribute of each time-block be used to conditionally 
  add or remove the past, present, and future classes? 
  How can Day.js be used to get the current hour in 24-hour time?
  
  TODO: Add code to get any user input that was saved in localStorage and set
  the values of the corresponding textarea elements. 
  HINT: How can the id attribute of each time-block be used to do this?
  
  TODO: Add code to display the current date in the header of the page. 
  */
});
