var locationOptions = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};

var temperatureKelvin = null;
var temperatureFahrenheit = null;
var roundedTempFahrenheit = null;
var humidity = null;
var windSpeed = null;
var weatherImgId = null;
var forecast = null;

let configureWeatherDisplay = () => {
    // (!)disabling location services so we can reload quicker in UI implementation(!)
    navigator.geolocation.getCurrentPosition(getWeatherInformation, error, locationOptions);
}

window.addEventListener('load', configureWeatherDisplay);

let getWeatherInformation = async (location) => {
    let userLatitude = location.coords.latitude;
    let userLongitude = location.coords.longitude; 
    
    let apiHeaders = new Headers();
    let apiBody = null;

    apiHeaders.append('Content-Type', 'application/json');

    let apiRequest = {
        method: 'GET',
        headers: apiHeaders,
        redirect: 'follow'
    };

    await fetch(`https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?lat=${userLatitude}&lon=${userLongitude}&appid=7f176f6884d67252c457f739915660e4`, apiRequest)
        .then(apiResponse => apiResponse.text())
        .then(apiResult => {
            weatherResults = JSON.parse(apiResult);
            temperatureKelvin = weatherResults.main.temp;
            temperatureFahrenheit = (temperatureKelvin - 273.15) * 9/5 + 32;
            roundedTempFahrenheit = Math.round(temperatureFahrenheit);
            humidity = weatherResults.main.humidity;
            windSpeed = weatherResults.wind.speed;
            weatherImgId = weatherResults.weather[0].icon;
            forecast = weatherResults.weather[0].main;
        })
        .catch(error => console.log(error));
}

let populateWeatherInformation = () => {
    let weatherDropDown = document.querySelector('#weatherDrop');
    weatherDropDown.innerHTML = '';

    let temperaturePara = document.createElement('p');
    temperaturePara.innerHTML = 'Temperature: ' + roundedTempFahrenheit + ' &#176 F';
    temperaturePara.style.cssText = 'color: white; padding-top: 3%';

    let humidityPara = document.createElement('p');
    humidityPara.innerHTML = 'Humidity: ' + humidity + ' %';
    humidityPara.style.cssText = 'color: white; padding-top: 3%';

    let windPara = document.createElement('p');
    windPara.innerHTML = 'Wind: ' + windSpeed + ' mph';
    windPara.style.cssText = 'color: white; padding-top: 3%';

    let weatherImg = document.createElement('img');
    weatherImg.setAttribute('src', 'http://openweathermap.org/img/wn/' + weatherImgId + '@2x.png');
    weatherImg.style.cssText = 'display: block; margin-left: auto; margin-right: auto';

    let forecastPara = document.createElement('p');
    forecastPara.innerHTML = forecast;
    forecastPara.style.cssText = 'text-align: center; color: white';

    weatherDropDown.appendChild(temperaturePara);
    weatherDropDown.appendChild(humidityPara);
    weatherDropDown.appendChild(windPara);
    weatherDropDown.appendChild(weatherImg);
    weatherDropDown.appendChild(forecastPara);
}

let error = (error) =>  {
    console.log(error);
}