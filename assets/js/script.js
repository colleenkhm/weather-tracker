const apiKey = '920955b96df093ea34bbb2cb68023416';

// var currentWeather = 
$(document).ready(function(){
// function to search for a city
const searchInput = document.querySelector(#searchInput.value);
// make sure the "click" is for the search button
input.addEventListener("click", refreshData)
var city = searchInput;
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
    return fetch(`http://api.openweathermap.org/data/2.5/onecall?lat=${coord.lat}&lon=${coord.lon}&units=imperial&appid=${apiKey}`)
})
.then(function(response) {
    return response.json();
})
.then(function(data) {
    console.log(data)
})
})
// icon variable should use if else/ifs
// rest should be json data
// creating objects for each future forcast
var forecastFiveDayArr = [
{
//var date = fetch
//var icon = (if/else ifs from fetched temp data)
//var temp = fetch
// var wind = fetch
// var humidity = fetch
// can do in one call, just need to specify what data is being fetched in that call and then create objects for each date from it
}
];
// populating weather cards to display 5-day forecast
// might need to do multiple but there could be a way to use this format only once depending on how I populate the variables

// returning data to cycle through for loop (can't figure out if this needs to be contained within a function or not)
${forecastFiveDayArr.map(function(weather) {
    return weather;
}).join('')}
var populateWeatherCard = function() {
    for (var i=0; i < forecastFiveDayArr.length; i++) {
document.getElementById(i).innerHTML = `<h2>${date}</h2> 
<p>${icon}</p>
<p>${temp}</p>
<p>${wind}</p>
<p>${humidity}</p>`
}
}

// function to add city to search history
// populate the aside #recentSearches <div>
// function to present city name, date, icon of weather, temperature, humidity, windspeed, and uv index

// function to make uv index change colors depending on conditions (favorable, moderate, severe)

// function to display 5-day forecast of future conditions (date, icon of weather, temp, wind speed, humidity)

// function to allow user to click items from search history and display weather