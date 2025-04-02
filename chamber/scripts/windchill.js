function calculateWindChill(temperature, windSpeed) {
    let windChill;

    // Check if the temperature is greater than 10°C or the wind speed is less than 5 km/h
    if (temperature > 10 || windSpeed < 5) {
        // If either condition is not met, set wind chill to "N/A"
        windChill = "N/A";
    } else {
        // Calculate wind chill factor using Celsius units
        var windChillFactor = 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
        windChill = windChillFactor.toFixed(1) + `&deg;C`;
    }

    // Update the wind chill element in the DOM with the result
    document.getElementById("wind-chill").innerHTML = windChill;
}
