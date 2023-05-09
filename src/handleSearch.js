import interactDOM from "./interactDOM"
import changeCelsiusFahrenheit from "./changeCelsiusFahrenheit"
import standardLocation from "./standardLocation"
import formValidation from "./formValidation"
import searchWeather from "./searchWeather"

export default function handleSearch (){
    const cityInputForm = document.querySelector('form')
    const cityInput = document.getElementById('cityInput')
    const toggleCelsiusFahrenheit = interactDOM().hookDOMelement('toggleCelsiusFahrenheit')
    let city
    let unitStatus
    cityInputForm.addEventListener('submit', async (e) =>{
        toggleCelsiusFahrenheit.textContent == '°C' ? unitStatus = true : unitStatus = false
        if(!cityInput.validity.valid){
            formValidation().showCityError()
            e.preventDefault()
        } else{
            e.preventDefault()
            city = cityInput.value

            try{
                const data = await searchWeather(city)
                changeCelsiusFahrenheit(data, unitStatus)
           } catch(err){
                const error = await err
                formValidation().showCityError('err')
                standardLocation('toronto')
           }finally{
            interactDOM().formReset('searchCity')
           }
        }  
    })
}