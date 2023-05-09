import interactDOM from "./interactDOM"
import handleContentShow from "./handleContentShow"


export default function changeCelsiusFahrenheit(obj, status){
    let toggleCelsiusFahrenheit = interactDOM().hookDOMelement('toggleCelsiusFahrenheit')
    
    let unitStatus
    if(arguments.length == 1){
        unitStatus = true
        toggleCelsiusFahrenheit.textContent = '°C'
        handleContentShow(obj, unitStatus)
    } else {
        unitStatus = status
        handleContentShow(obj, unitStatus)
    }
    
    toggleCelsiusFahrenheit.addEventListener('mousedown', e => {
        unitStatus == true ? unitStatus = false : unitStatus = true
        handleContentShow(obj, unitStatus)
        let temperatureUnit = interactDOM().hookDOMelement('currentTemperature').textContent
        temperatureUnit = temperatureUnit[temperatureUnit.length - 2] + temperatureUnit[temperatureUnit.length - 1]
        toggleCelsiusFahrenheit.textContent = temperatureUnit   
    })
}