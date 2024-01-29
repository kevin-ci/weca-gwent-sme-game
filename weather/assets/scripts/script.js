const cityInputElement = document.getElementById("city-input");
const resultElement = document.getElementById("result-element");
const cityNotFoundText = "We couldn't find a city by that name.";

let weather = {
    dublin: [4, 95],
    cardiff: [11, 92],
    london: [11, 91],
    edinburgh: [3, 92],
    belfast: [5, 90],
    getForecast(city) {
        return this[city];
    }
};

function formatWeatherString(city) {
    let forecastData = weather.getForecast(city.toLowerCase());
    return `The temperature in ${city} is ${forecastData[0]}°C and the humidity is ${forecastData[1]}%.`;
}

function handleButtonClick(event) {
    let city = cityInputElement.value;
    let output = city.toLowerCase() in weather ? formatWeatherString(city) : cityNotFoundText;
    resultElement.innerText = output;
}

const forecastButton = document.getElementById("forecast-button");
forecastButton.addEventListener('click', handleButtonClick);
