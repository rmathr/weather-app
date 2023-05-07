import "./style.css"
import interactDOM from "./interactDOM"

function handleSearch (){
    const cityInputForm = document.querySelector('form')
    const cityInput = document.getElementById('cityInput')
    let city
    cityInputForm.addEventListener('submit', async (e) =>{
        e.preventDefault()
        city = cityInput.value
        const data = await searchWeather(city)
        handleContentShow(data)
    })
}

handleSearch()

function handleContentShow (obj){
    // const currentWeather = interactDOM().createElementWithClassAndId('section', 'current-weather', 'currentWeather')
    const currentWeather = interactDOM().hookDOMelement('currentWeather')
    const mainContent = interactDOM().hookDOMelement('mainContent')
    mainContent.appendChild(currentWeather)
    interactDOM().appendElementAndDefineContent(currentWeather, obj)
}




async function searchWeather(searchCity){
            
    // const currentWeather = await fetch(`https://api.weatherapi.com/v1/current.json?key=005512f4aa2f45aab64154049230405&q=${searchCity}`)
    // const currentData = await currentWeather.json()
    // console.log(currentData)
    
    const forecastWeather = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=005512f4aa2f45aab64154049230405&days=3&q=${searchCity}`)
    const forecastData = await forecastWeather.json()
    console.log(forecastData)
    console.log(forecastData.location.name)
    return forecastData
    }

async function stardardLocation(city) {
    const data = await searchWeather(city)
    handleContentShow(data)
}

stardardLocation('toronto')