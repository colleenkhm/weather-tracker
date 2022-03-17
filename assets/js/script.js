const apiKey = '920955b96df093ea34bbb2cb68023416';
// var currentWeather = 
$(document).ready(function(){
 var city = ""
    var queryURL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

// function to fetch weather API
fetch(queryURL)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data)
    return data.coord;
})
.then(function(coord){
    return fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${coord.lat}&lon=${coord.lon}&units=imperial&appid=${apiKey}`)
})
.then(function(response) {
    return response.json();
})
.then(function(data) {
    console.log(data)
})
})

// function to search for a city

// function to add city to search history

// function to present city name, date, icon of weather, temperature, humidity, windspeed, and uv index

// function to make uv index change colors depending on conditions (favorable, moderate, severe)

// function to display 5-day forecast of future conditions (date, icon of weather, temp, wind speed, humidity)

// function to allow user to click items from search history and display weather