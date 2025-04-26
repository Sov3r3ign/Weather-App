const apiKey ="716450a0b98bb51aba6c6e9399fbed5a";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=germany"

async function checkWeather(){
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    var data = await response.json();
    
    console.log(data);
}

checkWeather();