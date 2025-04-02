const lat = 16.7666;  // Latitude for Timbuktu, Mali
const lon = -3.0026;  // Longitude for Timbuktu, Mali
const apiKey = "6f169a4312e6d78f79510da9f7ec29e5";

const urlWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;
const urlForecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;

async function apiFetchWeather(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayWeatherResults(data);
        } else {
            throw new Error(await response.text());
        }
    } catch (error) {
        console.error(error);
    }
}

async function apiFetchForecast(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayForecastResults(data);
        } else {
            throw new Error(await response.text());
        }
    } catch (error) {
        console.error(error);
    }
}

apiFetchWeather(urlWeather);
apiFetchForecast(urlForecast);

function displayWeatherResults(data) {
    const location = document.querySelector("#location");
    const tempArea = document.querySelector(".temp-area");
    const captionDesc = document.querySelector("#weather-description");
    const feelsLike = document.querySelector("#feels-like");
    const windSpeed = document.querySelector("#wind-speed");
    const humidity = document.querySelector("#humidity");

    const weatherIcon = document.createElement("img");
    tempArea.appendChild(weatherIcon);

    const currentTemp = document.createElement("div");
    currentTemp.setAttribute("id", "current-temp");
    tempArea.appendChild(currentTemp);

    location.innerHTML = data.name;
    const formattedTemp = data.main.temp.toFixed(0); // Temperature in Celsius
    const formattedWindSpeed = data.wind.speed.toFixed(0); // Wind speed in m/s
    currentTemp.innerHTML = `${formattedTemp}&deg;C`;  // Display in Celsius
    feelsLike.innerHTML = `${data.main.feels_like.toFixed(0)}&deg;C`; // Feels like temperature in Celsius
    windSpeed.innerHTML = `${formattedWindSpeed} m/s`; // Wind speed in meters per second
    humidity.innerHTML = `${data.main.humidity}%`;

    data.weather.forEach((weatherEvent) => {
        const iconsrc = `https://openweathermap.org/img/wn/${weatherEvent.icon}@2x.png`;
        let desc = weatherEvent.description;
        weatherIcon.setAttribute("src", iconsrc);
        weatherIcon.setAttribute("alt", desc);
        weatherIcon.setAttribute("width", "100");
        weatherIcon.setAttribute("height", "100");
        captionDesc.innerHTML = `${desc}`;
    });
    calculateWindChill(formattedTemp, formattedWindSpeed);
}

function displayForecastResults(data) {
    const forecast = document.querySelector("#forecast");
    forecast.innerHTML = '';  // Clear previous forecast

    const threeDayResults = data.list.filter((_, index) => index % 8 === 0).slice(0, 3);

    threeDayResults.forEach((day) => {
        const timestamp = day.dt * 1000;
        const weekday = dayOfTheWeek(timestamp);

        const weatherDay = document.createElement("div");
        weatherDay.setAttribute("class", "weather-day");
        const weekDay = document.createElement("h4");
        const weatherFigure = document.createElement("figure");
        const weatherCaption = document.createElement("figcaption");
        const weatherIcon = document.createElement("img");
        const maxTempDiv = document.createElement("div");
        const minTempDiv = document.createElement("div");
        maxTempDiv.setAttribute("class", "temp-div");
        minTempDiv.setAttribute("class", "temp-div");
        const maxTempT = document.createElement("p");
        const minTempT = document.createElement("p");
        const maxTemp = document.createElement("p");
        const minTemp = document.createElement("p");

        weatherDay.appendChild(weekDay);
        weekDay.textContent = weekday;

        weatherDay.appendChild(weatherFigure);
        weatherFigure.appendChild(weatherIcon);
        weatherFigure.appendChild(weatherCaption);

        const iconsrc = `https://openweathermap.org/img/wn/${day.weather[0].icon}.png`;
        weatherIcon.setAttribute("src", iconsrc);
        weatherIcon.setAttribute("alt", day.weather[0].description);
        weatherIcon.setAttribute("width", "50");
        weatherIcon.setAttribute("height", "50");
        weatherCaption.innerHTML = `${day.weather[0].description}`;

        weatherDay.appendChild(maxTempDiv);
        maxTempDiv.appendChild(maxTempT);
        maxTempT.textContent = `High:`;
        maxTempDiv.appendChild(maxTemp);
        maxTemp.innerHTML = `${day.main.temp_max.toFixed(0)}&deg;C`; // Max temp in Celsius

        weatherDay.appendChild(minTempDiv);
        minTempDiv.appendChild(minTempT);
        minTempT.textContent = `Low:`;
        minTempDiv.appendChild(minTemp);
        minTemp.innerHTML = `${day.main.temp_min.toFixed(0)}&deg;C`; // Min temp in Celsius

        forecast.appendChild(weatherDay);
    });
}

function dayOfTheWeek(timestamp) {
    const options = { weekday: "long" };
    const date = new Date(timestamp);
    return date.toLocaleDateString("en-US", options);
}

function calculateWindChill(temp, windSpeed) {
    const windChill = document.querySelector("#wind-chill");
    if (temp <= 10 && windSpeed > 5) {  // Conditions for wind chill calculation in Celsius
        const windChillValue = (
            13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)
        ).toFixed(1);
        windChill.innerHTML = `${windChillValue}&deg;C`;
    } else {
        windChill.innerHTML = "N/A";
    }
}