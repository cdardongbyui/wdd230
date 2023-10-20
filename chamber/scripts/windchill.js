const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5809844&appid=4e2177ee75d0475bee028ead2270af2d'

const getWeather = async () => {
    const response = await fetch(apiURL);
    jsObject = await response.json();

    let temp = kelvinToFahrenheit(jsObject.main.temp);
    document.querySelector('#temp').textContent = temp;

    const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description.toUpperCase();
    document.querySelector('#weathericon').setAttribute('src', iconsrc);
    document.querySelector('#weathericon').setAttribute('alt', desc);
    document.querySelector('figcaption').textContent = desc;

    let wind = jsObject.wind.speed;
    document.querySelector('#wind').textContent = wind;

    let temp_int = parseInt(temp);
    let wind_int = parseInt(wind);
    windchill(temp_int, wind_int);
};

const kelvinToFahrenheit = (kelvin) => {
    const f = (kelvin - 273.15) * 1.8 + 32;
    return f.toFixed(0);
}

const windchill = (temp, wind) => {
    const windchill = document.querySelector('#windchill');
    const windDegree = document.querySelector('#windDegree');

    windchill.textContent = 'N/A';

    if (temp <= 50 && wind >= 3) {
        let chill = Math.round((35.74 + (0.6215 * temp))-(35.75 * Math.pow(wind,0.16)) + (0.4275*temp*Math.pow(wind,0.16)));
        windchill.textContent = chill.toFixed(0);
        windDegree.innerHTML = '&#8457;';
    }
    
}

getWeather();