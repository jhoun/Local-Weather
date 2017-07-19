navigator.geolocation.getCurrentPosition(function(position) {
  $.ajax({
    url: `https://api.darksky.net/forecast/1b5534a4ca117006f93923cf9fe1b0fb/${position.coords.latitude},${position.coords.longitude}`,
    dataType: "jsonp",
    success:function(result){
      console.log('result: ', result);
      $(".summary").text(result.currently.summary)
      $(".degrees").text(result.currently.temperature + '°' )
    }
  })
});

