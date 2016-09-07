Author: Rachelle Wood
Date: Sept, 2016

This program is effectively a random quote generator. Since it seems like random quotes are usually snippets of wisdom, this one is a random wisdom generator.
This project is detailed on Free Code Camp's website at https://www.freecodecamp.com/challenges/build-a-random-quote-machine
but this version will not be on Code Pen. It will be on GitHub instead. The Code Pen version can be found at:

Note that this project uses the API's own random quote generator from http://quotes.stormconsultancy.co.uk/
If the author was to code this on her own, she would use the following code inside the ajax call:

success: function(data) {
  var frst = data[0].id;
  var lst = data.length;

  function obtainRandomID(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min)) + min;
  }

  var idIndex = obtainRandomID(frst, lst);
  $('.quote-container').append("<p>" + data[idIndex].quote + "</p><br><p>- " + data[idIndex].author + "</p>" );
}
