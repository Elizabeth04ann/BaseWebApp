$(document).ready(function(){
getWeather();
})

function getWeather () {
  var url = "https://api.openweathermap.org/data/2.5/weather?q=Boston&units=imperial&APPID="+apiKEY;

$.ajax(url,{success: function(data){
$(".city"). text(data.name);
$(".city"). text(data.main.Temp);
}})
}
