import "./style.css"

async function searchWeather(searchCity){
            
    const currentWeather = await fetch(`https://api.weatherapi.com/v1/current.json?key=005512f4aa2f45aab64154049230405&q=${searchCity}`)
    const currentData = await currentWeather.json()
    console.log(currentData)
    
    const forecastWeather = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=005512f4aa2f45aab64154049230405&days=3&q=${searchCity}`)
    const forecastData = await forecastWeather.json()
    console.log(forecastData)

    
    }

searchWeather('london')
