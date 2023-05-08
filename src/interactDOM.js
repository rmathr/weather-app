import { format } from 'date-fns'

const interactDOM = function(){

    const createElementWithClassAndId = function(type, className, idName){
        const element = document.createElement(type)
        element.classList.add(`${className}`)
        element.id = `${idName}`
        return element
    }

    const hookDOMelement = function (idName){
        const elem = document.getElementById(`${idName}`)
        return elem
    }

    const getInputValue = function(idName){
        return interactDOM().hookDOMelement(idName).value
    }

    const toggleElementDisplay = function(element, displayValue){
        if(arguments.length > 1){
            element.style.display == displayValue ? element.style.display = 'none' : element.style.display = displayValue
        } else if (arguments.length == 1){
            element.style.display == 'flex' ? element.style.display = 'none' : element.style.display = 'flex'
        }
    }

   

    const hide = function(element){
        element.style.display = 'none'
    }

    const show = function(element){
        element.style.display = 'flex'
    }

    const appendElementAndDefineContentCurrent = function (container, obj) {
        while (container.hasChildNodes()){
        container.removeChild(container.firstChild)
        }
        let currentCondition = interactDOM().createElementWithClassAndId('p', 'current-condition', 'currentCondition')
        let currentImage = interactDOM().createElementWithClassAndId('img', 'current-image', 'currentImage')
        let locationElem = interactDOM().createElementWithClassAndId('p', 'location-name', 'locationName')
        let currentTemp = interactDOM().createElementWithClassAndId('p', 'current-temperature', 'currentTemperature')
        let currentFeelsLike = interactDOM().createElementWithClassAndId('p', 'current-feels-like', 'currentFellsLike')
        let currentWind = interactDOM().createElementWithClassAndId('p', 'current-wind', 'currentWind')
        let currentHumidity = interactDOM().createElementWithClassAndId('p', 'current-humidity', 'currentHumidity')
        container.appendChild(currentCondition)
        container.appendChild(currentImage)
        container.appendChild(locationElem)
        container.appendChild(currentTemp)
        container.appendChild(currentFeelsLike)
        container.appendChild(currentWind)
        container.appendChild(currentHumidity)
        currentCondition.textContent = `${obj.current.condition.text}`
        currentImage.src = `${obj.current.condition.icon.replaceAll('//', 'https://')}`
        locationElem.textContent = `${obj.location.name}, ${obj.location.country}`
        currentTemp.textContent = `${obj.current.temp_c}°C`
        currentFeelsLike.textContent = `feels like: ${obj.current.feelslike_c}°C`
        currentWind.textContent = `wind: ${obj.current.wind_kph} kph`
        currentHumidity.textContent = `humidity: ${obj.current.humidity}%`
    }

    const appendElementAndDefineContentForecast = function (container, obj, day) {
        while (container.hasChildNodes()){
        container.removeChild(container.firstChild)
        }
        let dayDate = interactDOM().createElementWithClassAndId('p', 'day-date', `dayDate#${obj.forecast.forecastday[day].date}`)
        let maxTemp = interactDOM().createElementWithClassAndId('p', 'max-temperature', `maxTemperature#${obj.forecast.forecastday[day].date}`)
        let minTemp = interactDOM().createElementWithClassAndId('p', 'min-temperature', `minTemperature#${obj.forecast.forecastday[day].date}`)
        let conditionText = interactDOM().createElementWithClassAndId('p', 'forecast-condition', `forecastCondition#${obj.forecast.forecastday[day].date}`)
        let chanceOfRain = interactDOM().createElementWithClassAndId('p', 'chance-rain', `chanceRain#${obj.forecast.forecastday[day].date}`)
        let forecastImage = interactDOM().createElementWithClassAndId('img', 'forecast-image', `forecastImage#${obj.forecast.forecastday[day].date}`)
        container.appendChild(dayDate)
        container.appendChild(maxTemp)
        container.appendChild(minTemp)
        container.appendChild(conditionText)
        container.appendChild(chanceOfRain)
        container.appendChild(forecastImage)
        dayDate.textContent = `${format(new Date(obj.forecast.forecastday[day].date.replaceAll('-', '/')), "EEEE',' dd MMM")}`
        conditionText.textContent = `${obj.forecast.forecastday[day].day.condition.text}`
        maxTemp.textContent = `${obj.forecast.forecastday[day].day.maxtemp_c}°C`
        minTemp.textContent = `${obj.forecast.forecastday[day].day.mintemp_c}°C`
        chanceOfRain.textContent = `chance of rain: ${obj.forecast.forecastday[day].day.daily_chance_of_rain}%`
        forecastImage.src = `${obj.forecast.forecastday[day].day.condition.icon.replaceAll('//', 'https://')}`
    }

    const formReset = function(formId){
    const form = interactDOM().hookDOMelement(`${formId}`)
    form.reset()    
    }
    
    return { 
        createElementWithClassAndId, 
        hookDOMelement, 
        getInputValue, 
        appendElementAndDefineContentCurrent,
        appendElementAndDefineContentForecast,
        toggleElementDisplay,
        hide,
        show,
        formReset,
    }
}

export default interactDOM