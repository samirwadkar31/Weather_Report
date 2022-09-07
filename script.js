var button= document.querySelector("#submit_btn");
var input= document.querySelector("#search_box");
var cityName= document.querySelector(".cityName");
var temp= document.querySelector(".temp");
var desc= document.querySelector(".desc");
var humidity= document.querySelector(".humidity");
var wind= document.querySelector(".wind");


button.addEventListener('click', getreport);

function getreport(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+ input.value +'&units=metric&appid=e548bc1546d75c9cff4a1fb729126cb6')
    .then(response => response.json())
    .then(data => {
      var tempValue = data['main']['temp'];
      var nameValue = data['name'];
      var descValue = data['weather'][0]['description'];
      var humidityValue = data['main']['humidity'];
      var windValue = data['wind']['speed'];

      cityName.innerHTML = nameValue;
      desc.innerHTML = descValue;
      temp.innerHTML = "Temperature: "+tempValue+ "°C";
      humidity.innerHTML =  "Humidity: " + humidityValue + "%";
      wind.innerHTML = "Wind speed: " + windValue + " km/h";
    })
    .catch(err => alert("Wrong city name!"));
    }

