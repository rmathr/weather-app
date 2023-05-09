import searchWeather from "./searchWeather"
import changeCelsiusFahrenheit from "./changeCelsiusFahrenheit"

export default async function standardLocation(city) {
    const data = await searchWeather(city)
    changeCelsiusFahrenheit(data)
}