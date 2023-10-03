console.log("hello")
const apiKey = "219f016f259cf13229d8c297101f3b20"

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const searchInput = document.querySelector("#search_input")
const searchBtn = document.querySelector("#search_btn") 
const weatherIcon = document.querySelector(".weather-icon") 
console.log(searchInput, searchBtn, weatherIcon)

//  function for checking weather 
async function checkWeather(city){
    var response = await fetch(apiUrl + city + `&appid=${apiKey}`)
    var data = await response.json()
    console.log(data)
    document.querySelector(".city").innerHTML = data.name
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C"
    document.querySelector(".wind").innerHTML = data.wind.speed  + "km/h"
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%"
    if(data.weather[0].main ==="Clouds"){
        weatherIcon.src= "imgs/clouds.png"
    }else if(data.weather[0].main ==="Clear"){
        weatherIcon.src= "imgs/clear.png"
    }else if(data.weather[0].main ==="Rain"){
        weatherIcon.src= "imgs/rain.png"
    }else if(data.weather[0].main ==="Drizzle"){
        weatherIcon.src= "imgs/drizzle.png"
    }else if(data.weather[0].main ==="Mist"){
        weatherIcon.src= "imgs/mist.png"
        }
}
searchBtn.addEventListener("click",()=>{
    checkWeather(searchInput.value)
})
