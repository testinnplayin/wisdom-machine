//This is the main scripts file for the Wisdom Machine.
//Author: Rachelle Wood, date: Sept 2016

$(document).ready(function() {
  $('.btn').on('click', function(e) {
    e.preventDefault();
    $('.quote-container').empty();
    $.ajax({
      type: 'GET',
      url: 'http://quotes.stormconsultancy.co.uk/random.json',
      dataType: 'jsonp',
      success: function(data) {
        $('.quote-container').append("<p>" + data.quote + "</p><br>" + "<p> - " + data.author + "</p>");
      },
      cache: false
    });
  });


});
