navigator.geolocation.getCurrentPosition(function(position) {
  $.ajax({
    url: `https://api.darksky.net/forecast/1b5534a4ca117006f93923cf9fe1b0fb/${position.coords.latitude},${position.coords.longitude}`,
    dataType: "jsonp",
    success:function(result){
      var degrees = "<span class='temp'>"+ result.currently.temperature + '</span>°' + "<span class='click text'>F</span>";
      $(".summary").text(result.currently.summary)
      $(".degrees").append(degrees)
      $("body").on("click", ".click", function(event){
        console.log('event: ', event);
        var c = (result.currently.temperature - 32) * 5 / 9;
        if (event.target.innerHTML === 'F'){
          $(".temp").text(c);
          $(".text").text("C");
        } else {
          $(".temp").text(result.currently.temperature);
          $(".text").text("F");
        }
      })
    }
  })
});
