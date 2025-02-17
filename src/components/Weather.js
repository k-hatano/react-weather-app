import React from "react";

function showCelsiusTemperature() {
	document.getElementsByClassName("temperature_celsius")[0].className = "temperature_celsius";
	document.getElementsByClassName("temperature_fahrenheit")[0].className = "temperature_fahrenheit hidden";
}

function showFahrenheitTemperature() {
	document.getElementsByClassName("temperature_celsius")[0].className = "temperature_celsius hidden";
	document.getElementsByClassName("temperature_fahrenheit")[0].className = "temperature_fahrenheit";
}

const Weather = props => (
	<div className="weather__info">
	 {	
	 	props.city && props.country && <p className="weather__key"> Location: 
	 		<span className="weather__value"> <a href={"https://maps.google.com?q=" + props.latitude + "," + props.longitude} target="_blank">{ props.city }, { props.country }</a></span>
	 	</p> 
	 }
	 { 	
	 	props.temperature && <p className="weather__key"> Temperature: 
 			<span className="temperature_celsius">
 				<span className="weather__value"> <a href="javascript:void(0);" onClick={showFahrenheitTemperature}> { props.temperature }</a> </span>
 				<span className="weather__unit temperature_celsius">℃</span>
	 			
	 		</span>
	 		<span className="temperature_fahrenheit hidden">
 				<span className="weather__value"> <a href="javascript:void(0);" onClick={showCelsiusTemperature}>{ ( props.temperature ) * (9 / 5) + 32 }</a> </span>
 				<span className="weather__unit">°F</span>
	 		</span>
	 	</p> 
	 }
	 { 	
	 	props.humidity && <p className="weather__key"> Humidity: 
	 		<span className="weather__value"> { props.humidity } </span><span className="weather__unit">%</span>
	 	</p> 
	 }
	 { 	
	 	props.pressure && <p className="weather__key"> Pressure: 
	 		<span className="weather__value"> { props.pressure } </span><span className="weather__unit">hPa</span>
	 	</p> 
	 }
	 { 	
	 	props.description && <p className="weather__key"> Conditions: 
	 		<span className="weather__value"> <a href={"https://openweathermap.org/find?q=" + props.city + "," + props.country} target="_blank">{ props.description }</a> </span>
	 	</p> 
	 }
	 { 
	 	props.error && <p className="weather__error">{ props.error }</p>  
	 }
	</div>
);

export default Weather;