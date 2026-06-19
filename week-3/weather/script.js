
const apiKey = "23f639df3775087f8176a2ed58a05b3c";

const searchBtn = document.getElementById("searchBtn");
const city = document.getElementById("city");

const cityName = document.getElementById("cityName");
const temp = document.getElementById("temp");
const description = document.getElementById("description");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const weatherIcon = document.getElementById("weatherIcon");

async function getWeather(cityValue) {

    if(cityValue === ""){
        alert("Please enter a city name");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&units=metric`;

    try {

        const response = await fetch(url);
        const data = await response.json();

        if(data.cod == "404"){
            alert("City not found!");
            return;
        }

        cityName.innerText = data.name;
        temp.innerText = data.main.temp + "°C";
        description.innerText = data.weather[0].description;
        humidity.innerText = "💧 Humidity : " + data.main.humidity + "%";
        wind.innerText = "🌬 Wind : " + data.wind.speed + " km/h";

        const icon = data.weather[0].icon;

        weatherIcon.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
        weatherIcon.style.display = "block";

    }
    catch(error){

        alert("Something went wrong!");
        console.log(error);

    }

}

searchBtn.addEventListener("click", function(){

    getWeather(city.value);

});

city.addEventListener("keypress", function(event){

    if(event.key === "Enter"){

        getWeather(city.value);

    }

});

