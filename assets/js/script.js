const api = '920955b96df093ea34bbb2cb68023416';
var searchInput = document.getElementById("searchInput");
var searchInputSubmit = document.getElementById("submit");
var city
var cityDisplayed
// function to search for a city
function getCity(event) {
    event.preventDefault();
    console.log(searchInput.value)
    city = searchInput.value.trim();
    var queryURL = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${api}`;
    fetch(queryURL)
        .then(response => response.json())
        .then(data => getWeather(data))
}

// write a function to get weather for city
function getWeather(cityArr) {
    console.log(cityArr)
    var lat = cityArr[0].lat
    var lon = cityArr[0].lon
    var openWeatherUrl = `http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${api}`
    fetch(openWeatherUrl)
        .then(response => response.json())
        .then(data => renderWeather(data))
}
searchInputSubmit.addEventListener("click", getCity);

// write a function to render weather
function renderWeather(forecast) {
    console.log(forecast)
    var temp = forecast.current.temp
    var wind = forecast.current.wind_speed
    var uvi = forecast.current.uvi
    var humidity = forecast.current.humidity
    var icon = forecast.current.weather[0].icon
    var unixDate = forecast.current.dt
    var dateObject = new Date(unixDate * 1000)
    console.log(dateObject)
    var dateDisplayed = dateObject.toLocaleString("en-US", {timeZoneName: "short"})
    dateDisplayed = dateDisplayed.split(",")
    console.log(dateDisplayed)
    var currentWeatherTemplate = `
    <h2 class="col-md-12">${city} ${dateDisplayed[0]} <img class="icon"></h2>
    <div class="col-md-12"
        <p>Temp: ${temp}</p>
        <p>Wind: ${wind} mph</p>
        <p>UV Index: ${uvi}</p>
        <p>Humidity: ${humidity}%</p>
    `
    var temp1 = forecast.daily[1].temp.day
    var wind1 = forecast.daily[1].wind_speed
    var hum1 = forecast.daily[1].humidity
    var unixDate1 = forecast.daily[1].dt
    var dateObject1 = new Date(unixDate1 * 1000)
    var dateDisplayed1 = dateObject1.toLocaleString("en-US", {timeZoneName: "short"})
    dateDisplayed1 = dateDisplayed1.split(",")
    var icon1 = forecast.daily[1].weather.icon

    var temp2 = forecast.daily[2].temp.day
    var wind2 = forecast.daily[2].wind_speed
    var hum2 = forecast.daily[2].humidity
    var unixDate2 = forecast.daily[2].dt
    var dateObject2 = new Date(unixDate2 * 1000)
    var dateDisplayed2 = dateObject2.toLocaleString("en-US", {timeZoneName: "short"})
    dateDisplayed2 = dateDisplayed2.split(",")
    var icon2 = forecast.daily[2].weather.icon

    var temp3 = forecast.daily[3].temp.day
    var wind3 = forecast.daily[3].wind_speed
    var hum3 = forecast.daily[3].humidity
    var unixDate3 = forecast.daily[3].dt
    var dateObject3 = new Date(unixDate3 * 1000)
    var dateDisplayed3 = dateObject3.toLocaleString("en-US", {timeZoneName: "short"})
    dateDisplayed3 = dateDisplayed3.split(",")
    var icon3 = forecast.daily[3].weather.icon

    var temp4 = forecast.daily[4].temp.day
    var wind4 = forecast.daily[4].wind_speed
    var hum4 = forecast.daily[4].humidity
    var unixDate4 = forecast.daily[4].dt
    var dateObject4 = new Date(unixDate4 * 1000)
    var dateDisplayed4 = dateObject4.toLocaleString("en-US", {timeZoneName: "short"})
    dateDisplayed4 = dateDisplayed4.split(",")
    var icon4 = forecast.daily[4].weather.icon

    var temp5 = forecast.daily[5].temp.day
    var wind5 = forecast.daily[5].wind_speed
    var hum5 = forecast.daily[5].humidity
    var unixDate5 = forecast.daily[5].dt
    var dateObject5 = new Date(unixDate5 * 1000)
    var dateDisplayed5 = dateObject5.toLocaleString("en-US", {timeZoneName: "short"})
    dateDisplayed5 = dateDisplayed5.split(",")
    var icon5 = forecast.daily[5].weather.icon

    var futureWeatherTemplate = `
    <h2 class="col-md-12">Five-Day Forecast:</h2>
    <div class="card-container col-md-12">
        <div class="forecast card" id="1">
            <div class="date card-title">${dateDisplayed1[0]}</div>
                <img class="icon">
                <p>Temp: ${temp1}</p>
                <p>Wind: ${wind1} mph</p>
                <p>Humidity: ${hum1}%</p>
            </div>
        </div>
        <div class="forecast card" id="2">
            <div class="date card-title">${dateDisplayed2[0]}</div>
                <img class="icon">
                <p>Temp: ${temp2}</p>
                <p>Wind: ${wind2} mph</p>
                <p>Humidity: ${hum2}%</p>
            </div>
        </div>
        <div class="forecast card" id="3">
            <div class="date card-title">${dateDisplayed3[0]}</div>
                <img class="icon">
                <p>Temp: ${temp3}</p>
                <p>Wind: ${wind3} mph</p>
                <p>Humidity: ${hum3}%</p>
            </div>
        </div>
        <div class="forecast card" id="4">
            <div class="date card-title">${dateDisplayed4[0]}</div>
                <img class="icon">
                <p>Temp: ${temp4}</p>
                <p>Wind: ${wind4} mph</p>
                <p>Humidity: ${hum4}%</p>
            </div>
        </div>
        <div class="forecast card" id="5">
            <div class="date card-title">${dateDisplayed5[0]}</div>
                <img class="icon">
                <p>Temp: ${temp5}</p>
                <p>Wind: ${wind5} mph</p>
                <p>Humidity: ${hum5}%</p>
            </div>
        </div>
    <div>`
    var currentWeather = document.querySelector("#currentWeather")
    currentWeather.innerHTML = currentWeatherTemplate

    var futureWeather = document.querySelector("#futureWeather")
    futureWeather.innerHTML = futureWeatherTemplate
}

// // var currentWeather = 
// $(document).ready(function(){
// 
// // 
// // var city = searchInput;
// var city = "portland";
// var queryURL = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${api}`;
// // function to fetch weather API
// var fetchData = function() {
//     fetch(queryURL)
//     .then(function(response){
//         return response.json();
//     })
//     .then(function(data){
//         console.log(data)
//         return fetch(`http://api.openweathermap.org/data/2.5/onecall?lat=${coord.lat}&lon=${coord.lon}&units=imperial&appid=${apiKey}`)
//     })
//     .then(function(){
        
//     })
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(data) {
//         console.log(data);
//     })
//     }
// fetchData();
// // run fetch data 
// //     searchInputSubmit.addEventListener("click", fetchData);
// // })

// // icon can be called in api
// // rest should be json data
// // creating objects for each future forcast
// // var forecastFiveDayArr = 
// // var date = fetch
// // var icon = (if/else ifs from fetched temp data)
// // var temp = fetch
// // var wind = fetch
// // var humidity = fetch
// // can do in one call, just need to specify what data is being fetched in that call and then create objects for each date from it

// // populating weather cards to display 5-day forecast
// // might need to do multiple but there could be a way to use this format only once depending on how I populate the variables

// // returning data to cycle through for loop (can't figure out if this needs to be contained within a function or not)
// // ${forecastFiveDayArr.map(function(weather) {
// //     return weather;
// // }).join('')}
// var populateWeatherCard = function() {
//     for (var i = 0; i < forecastFiveDayArr.length -1; i++) {
// document.getElementById([i]).innerHTML = `<h2>${date}</h2> 
// <p>${icon}</p>
// <p>${temp}</p>
// <p>${wind}</p>
// <p>${humidity}</p>`
// }
// }

// // function to add city to search history (save to local storage)
// $(".submit").on("click", function(){
//     // capture values inside text area and corresponding time
//     var recentCity = $(this).siblings("textarea").val();
//     localStorage.setItem(recentCity)

//     // need to set id for 
//     var recent = $(this).parent().attr("id");
//     console.log(recent);
//     localStorage.setItem(recent, task)
// })
// // grab items from local storage to put into text areas
// // make sure most recent appears first
// $("#1 .recentSearch").val(localStorage.getItem("1"))
// $("#2 .recentSearch").val(localStorage.getItem("2"))
// $("#3 .recentSearch").val(localStorage.getItem("3"))
// $("#4 .recentSearch").val(localStorage.getItem("4"))
// $("#5 .recentSearch").val(localStorage.getItem("5"))
// $("#6 .recentSearch").val(localStorage.getItem("6"))
// $("#7 .recentSearch").val(localStorage.getItem("7"))
// $("#8 .recentSearch").val(localStorage.getItem("8"))
// $("#9 .recentSearch").val(localStorage.getItem("9"))
// $("#10 .recentSearch").val(localStorage.getItem("10"))

// populate the aside #recentSearches <div>
// function to present city name, date, icon of weather, temperature, humidity, windspeed, and uv index

// function to make uv index change colors depending on conditions (favorable, moderate, severe)

// function to display 5-day forecast of future conditions (date, icon of weather, temp, wind speed, humidity)

// function to allow user to click items from search history and display weather