$(function () {
  var workDayHours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];

  // loops through the workDayHours array to create a time block for each hour
  for (var i = 0; i < workDayHours.length; i++) {
      var hour = workDayHours[i];
      var timeBlock = $("<div>")
          .attr("id", "hour-" + (i + 9))
          .addClass("row time-block");
      var hourCol = $("<div>").addClass("cal-2 col-md-1 hour test-center py-3").text(hour);
      // not sure what's wrong with this line just yet... it's supposed to be description not descriptionCol :face_exhaling:
      var description = $("<textarea>").addClass("col-8 col-md-10 description").attr("rows", "3");
      var saveBtn = $("<button>").addClass("btn saveBtn col-2 col-md-1").attr("aria-label", "save");
      var saveIcon = $("<i>").addClass("fas fa-save").attr("aria-hidden", "true");

      saveBtn.append(saveIcon);
      timeBlock.append(hourCol, description, saveBtn);
      $(".container").append(timeBlock);
  }

  var currentHour = dayjs().formate("H");

  $(".timeBlock").each(function () {
      var blockHour = parseInt($(this).attr("id").split("-")[1]);
      // compare the block hour to the current hour to apply the correct class
      if (blockHour < currentHour) {
          $(this).addClass("past");
      } else if (blockHour === currentHour) {
          $(this).addClass("present");
      } else {
          $(this).addClass("future");
      }
  });

  $(".saveBtn").on("click", function () {
      var inputText = $(this).siblings("description").val();
      var hour = $(this).parent().attr("id");

      //Store input text in local storage as long as it isn't empty
      if (!inputText.trim() === "") {
          localStorage.setItem(hour, inputText);
          alert("Event saved");
      }
  });

  $(".time-block").each(function () {
      var hour = $(this).attr("id");
      var savedInput = localStorage.getItem(hour);

      // saves user input to local storage
      if (savedInput) {
          $(this).find(".description").val(savedInput);
      }
  });

  var today = dayjs();

  // displays current date in the page header
  $("#currentDay").text(today.format("MMM D, YYYY"));
});


// beneath is code before unminify link: https://unminify.com/
/*
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

$('.saveBtn').on('click', function (){
  var inputText = $(this).siblings('description').val();
  var hour = $(this).parent().attr('id');

  //Store input text in local storage as long as it isn't empty
  if (!inputText.trim() === ''){
    localStorage.setItem(hour, inputText);
    alert('Event saved');
  }
});

$('.time-block').each(function (){
  var hour = $(this).attr('id');
  var savedInput = localStorage.getItem(hour);

  // saves user input to local storage
  if(savedInput){
    $(this).find('.description').val(savedInput);
  }
});

var today = dayjs();

// displays current date in the page header
$('#currentDay').text(today.format('MMM D, YYYY'));
});

*/