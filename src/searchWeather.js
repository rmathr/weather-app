

export default async function searchWeather(searchCity){
    try{
        const forecastWeather = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=005512f4aa2f45aab64154049230405&days=6&q=${searchCity}`)
        const forecastData = await forecastWeather.json()
        return forecastData
    } catch(err){
        return err
    } 
}