import "./style.css"
import interactDOM from "./interactDOM"
import { format } from 'date-fns'

function handleSearch (){
    const cityInputForm = document.querySelector('form')
    const cityInput = document.getElementById('cityInput')
    let city
    cityInputForm.addEventListener('submit', async (e) =>{
        
        if(!cityInput.validity.valid){
            formValidation().showCityError()
            e.preventDefault()
        } else{
            e.preventDefault()
            city = cityInput.value

            try{
                const data = await searchWeather(city)
                handleContentShow(data)
           } catch(err){
                const error = await err
                formValidation().showCityError('err')
                stardardLocation('toronto')
           }finally{
            interactDOM().formReset('searchCity')
           }
        }  
    })
}

handleSearch()

function handleContentShow (obj, boolean){
    const currentWeather = interactDOM().hookDOMelement('currentWeather')
    const forecastWeather = interactDOM().hookDOMelement('forecastWeather')
    const forecastOne = interactDOM().hookDOMelement('forecastOne')
    const forecastTwo = interactDOM().hookDOMelement('forecastTwo')
    const forecastThree = interactDOM().hookDOMelement('forecastThree')
    const forecastFour = interactDOM().hookDOMelement('forecastFour')
    const forecastFive = interactDOM().hookDOMelement('forecastFive')
    forecastWeather.appendChild(forecastOne)
    forecastWeather.appendChild(forecastTwo)
    forecastWeather.appendChild(forecastThree)
    forecastWeather.appendChild(forecastFour)
    forecastWeather.appendChild(forecastFive)
    interactDOM().appendElementAndDefineContentCurrent(currentWeather, obj, boolean)
    interactDOM().appendElementAndDefineContentForecast(forecastOne, obj, 1, boolean)
    interactDOM().appendElementAndDefineContentForecast(forecastTwo, obj, 2, boolean)
    interactDOM().appendElementAndDefineContentForecast(forecastThree, obj, 3, boolean)
    interactDOM().appendElementAndDefineContentForecast(forecastFour, obj, 4, boolean)
    interactDOM().appendElementAndDefineContentForecast(forecastFive, obj, 5, boolean)
}




async function searchWeather(searchCity){
            
    // const currentWeather = await fetch(`https://api.weatherapi.com/v1/current.json?key=005512f4aa2f45aab64154049230405&q=${searchCity}`)
    // const currentData = await currentWeather.json()
    // console.log(currentData)
    
        try{
            const forecastWeather = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=005512f4aa2f45aab64154049230405&days=6&q=${searchCity}`)
            const forecastData = await forecastWeather.json()
            console.log(forecastData)
            console.log(forecastData.current.condition.icon.replaceAll('/', ''))
            console.log(format(new Date(forecastData.forecast.forecastday[1].date.replaceAll('-', '/')), "EEEE',' dd MMM"))
            return forecastData
        } catch(err){
            return err
        }


        
    }

async function stardardLocation(city) {
    const data = await searchWeather(city)
    changeCelsiusFahrenheit(data)
    // handleContentShow(data)
}

stardardLocation('toronto')


function changeCelsiusFahrenheit(obj){
    const toggleCelsiusFahrenheit = interactDOM().hookDOMelement('toggleCelsiusFahrenheit')
    let unitStatus = true
    handleContentShow(obj, unitStatus)
    toggleCelsiusFahrenheit.addEventListener('mousedown', e => {
        unitStatus ? false : true
        handleContentShow(obj, unitStatus)
    })
}









function formValidation(){
    
    const cityForm = document.getElementById('searchCity')
    const cityInput = document.getElementById('cityInput')
    const cityError = document.querySelector("#cityInput + span.city-error")

    cityInput.addEventListener('input', e =>{
        if(cityInput.validity.valid){
            cityError.textContent = ""
            cityError.className = "city-error"
        } else {
            showCityError()
        }
    })

    function showCityError(err){
        if(arguments.length > 0){
            cityError.textContent = "No matching location found."
        } else {
            if(cityInput.validity.valueMissing){
                cityError.textContent = "You need to enter a location."
            } 
        }
        cityError.className = "city-error active"
    }

    return { showCityError }
}
formValidation()