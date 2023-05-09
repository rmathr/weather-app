import interactDOM from "./interactDOM"


export default function handleContentShow (obj, boolean){
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