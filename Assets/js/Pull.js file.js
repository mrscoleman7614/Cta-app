//Pull.js file
$.getJSON('http://data.cityofchicago.org/resource/8pix-ypme.json',function(lstops){
      $('lstoplist').empty();
      
      $.each(lstops,function(i, lstops){
      $('#lstoplist').append(generateLStopLink(lstop));
  });
  $('lstoplist').refresh();
})
