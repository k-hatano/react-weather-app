import React from "react";

const Form = props => (
	<form onSubmit={props.getWeather}>
		<input type="text" name="city" value={props.city} onChange={props.cityChanged} placeholder="City..."/>
		<input type="text" name="country" value={props.country} onChange={props.countryChanged} placeholder="Country..."/>
		<button>Get Weather</button>
	</form>
);

export default Form;