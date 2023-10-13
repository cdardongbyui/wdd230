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
   

    
};

const kelvinToFahrenheit = (kelvin) => {
    const f = (kelvin - 273.15) * 1.8 + 32;
    return f.toFixed(0);
}



getWeather();