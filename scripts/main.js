//This is the main scripts file for the Wisdom Machine.
//Author: Rachelle Wood, date: Sept 2016

$(document).ready(function() {
  $('.btn').on('click', function(e) {
    e.preventDefault();
    $('.quote-container').empty();
    $.ajax({
      type: 'GET',
      url: 'http://quotes.stormconsultancy.co.uk/quotes.json',
      dataType: 'jsonp',
      success:function(data) {
        var post = data.shift(); //grabs first post in the array
        $('.quote-container').append("<p>" + post.quote + "</p><br>" + "<p> - " + post.author + "</p>");
      },
      cache: false
    });
  });


});
