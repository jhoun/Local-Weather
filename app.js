navigator.geolocation.getCurrentPosition(function(position) {
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;
  $.ajax({
    url: `https://api.darksky.net/forecast/1b5534a4ca117006f93923cf9fe1b0fb/${latitude},${longitude}`,
    dataType: "jsonp",
    success:function(result){
      console.log('result: ', result);
      var icon;
      var farenheit = result.currently.temperature;
      var celcius = Math.round((result.currently.temperature - 32) * 5 / 9 * 100)/100;
      var degreesHTML = "<span class='temperatureNumber'>"+ farenheit + '</span>°' + "<span class='click temperatureType'>F</span>";
      $(".summary").text(result.currently.summary)
      $(".degrees").append(degreesHTML)
      $("body").on("click", ".click", function(event){
        if (event.target.innerHTML === 'F'){
          $(".temperatureNumber").text(celcius);
          $(".temperatureType").text("C");
        } else {
          $(".temperatureNumber").text(farenheit);
          $(".temperatureType").text("F");
        }
      })
      switch(result.currently.icon){
        case "partly-cloudy-night":
          icon = '<img src="images/night.png"/>';
          break;
        default:
          icon = `<img src="images/sun.png"/>`;
      }
      $(".image").prepend(icon);
    }
  })

  $.ajax({
    url: `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyA9SNRd6RtfxR0F2BHzY3g-gUOG3SbLhQQ`,
    method: "GET",
    success:function(result){
      $(".cityName").text(result.results[1].formatted_address);
    }
  })

});


