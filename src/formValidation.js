export default function formValidation(){
    
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