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

    const appendElementAndDefineContent = function (container, obj) {
        while (container.hasChildNodes()){
        container.removeChild(container.firstChild)
        }
        let locationElem = interactDOM().createElementWithClassAndId('p', 'location-name', 'locationName')
        let currentTemp = interactDOM().createElementWithClassAndId('p', 'current-temperature', 'currentTemperature')
        let currentFeelsLike = interactDOM().createElementWithClassAndId('p', 'current-feels-like', 'currentFellsLike')
        let currentWind = interactDOM().createElementWithClassAndId('p', 'current-wind', 'currentWind')
        let currentHumidity = interactDOM().createElementWithClassAndId('p', 'current-humidity', 'currentHumidity')
        container.appendChild(locationElem)
        container.appendChild(currentTemp)
        container.appendChild(currentFeelsLike)
        container.appendChild(currentWind)
        container.appendChild(currentHumidity)
        locationElem.textContent = `${obj.location.name}, ${obj.location.country}`
        currentTemp.textContent = `${obj.current.temp_c}`
        currentFeelsLike.textContent = `${obj.current.feelslike_c}`
        currentWind.textContent = `${obj.current.wind_kph}`
        currentHumidity.textContent = `${obj.current.humidity}`
    }


    const formReset = function(formId){
    const form = interactDOM().hookDOMelement(`${formId}`)
    form.reset()    
    }
    
    return { 
        createElementWithClassAndId, 
        hookDOMelement, 
        getInputValue, 
        appendElementAndDefineContent,
        toggleElementDisplay,
        hide,
        show,
        formReset,
    }
}

export default interactDOM