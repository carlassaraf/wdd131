/**
 * Converts temperature from Celsius to Fahrenheit
 * @param {Number} temperature 
 * @returns temperature in Fahrenheit
 */
const toFahrenheit = (temperature) => {
  return temperature * 9 / 5 + 32;
}

/**
 * Converts temperature from Fahrenheit to Celsius
 * @param {Number} temperature 
 * @returns temperature in Celsius
 */
const toCelsius = (temperature) => {
  return (temperature - 32) * 5 / 9
}

/**
 * Converts miles to kilometers
 * @param {Number} km Kilometers to convert 
 * @returns miles
 */
const toMiles = (km) => {
  return km / 1.609;
}

/**
 * Convert miles to kilometers
 * @param {Number} miles Miles to convert
 * @returns kilometers
 */
const toKms = (miles) => {
  return miles * 1.609;
}

/**
 * Gets temperature from span
 * @returns temperature in Celsius
 */
const getTemperature = () => {
  return parseFloat(document.querySelector("#temperature").innerText);
}

/**
 * Gets wind speed from span
 * @returns wind speed in km/h
 */
const getWindSpeed = () => {
  return parseFloat(document.querySelector("#wind-speed").innerText);
}

/**
 * Sets temperature value in span
 */
const setTemperature = () => {
  document.querySelector("#temperature").innerText = 8;
}

/**
 * Sets weather in span
 */
const setWeather = () => {
  document.querySelector("#weather").innerText = "Cloudy";
}

/**
 * Sets wind speed value in span
 */
const setWindSpeed = () => {
  document.querySelector("#wind-speed").innerText = 8;
}

/**
 * Sets wind chill value in span
 * @param {Number} temperature in Celsius
 * @param {Number} windSpeed in km/h
 */
const setWindChill = (temperature, windSpeed) => {
  // Check if conditions are met
  if(temperature <= 10 && windSpeed > 4.8) {
    // Calculate wind chill
    const windChill = 35.74 + 0.6215 * toFahrenheit(temperature) + (0.4275 * toFahrenheit(temperature) - 35.75) * Math.pow(toMiles(windSpeed), 0.16);
    document.querySelector("#wind-chill").innerText = toCelsius(windChill).toFixed(1);
  }
  else {
    document.querySelector("#wind-chill").innerText = "N/A";
  }
}

// Run all functions
setTemperature();
setWeather();
setWindSpeed();
setWindChill(getTemperature(), getWindSpeed());