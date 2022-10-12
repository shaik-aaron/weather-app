var button = document.querySelector('.button')
var input = document.querySelector('.inputvalue')
var city = document.querySelector('.city')
var temp = document.querySelector('.temp');
var desc = document.querySelector(".desc");
var humid = document.querySelector(".humid");
var wind = document.querySelector(".wind");
var img = document.querySelector(".weathericon");

button.addEventListener('click',function() {
  fetch(
    "http://api.openweathermap.org/data/2.5/weather?q=" +
      input.value +
      "&appid=7a9d7a1940edef090c0b39d1e737d6ba"
  )
    .then((response) => response.json())
    .then((data) => {
      var nameValue = data['name'];
      var tempValue = data['main']['temp'];
      var descValue = data['weather']['0']['description'];
      var humidValue = data['main']['humidity'];
      var windValue = data['wind']['speed'];

      img.setAttribute("src", "http://openweathermap.org/img/wn/" + data['weather']['0']['icon'] + ".png");
      img.style.display='block';
      humid.style.display='block';
      wind.style.display='block';

      tempValue = tempValue - 273.15;
      tempValue = tempValue.toFixed(1);

      city.innerHTML = "Weather in " + nameValue;
      temp.innerHTML = tempValue + "°C";
      desc.innerHTML = descValue;
      humid.innerHTML = "Humidity: " + humidValue + "%";
      wind.innerHTML = "Wind Speed: " + windValue + " m/s";
    })
    .catch((err) => alert("Wrong City name!")); 
})