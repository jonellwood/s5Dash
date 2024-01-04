<script>
	// import data from '../../routes/api/getWeatherData/getWeatherData.js';
	import data from '../../../routes/api/getWeatherData/getWeatherData.json';
	// let backgroundImage = url('../images/${data.daily.weather_code}.svg');
	//$: backgroundImage = `url('../images/${data.daily.weather_code}.svg')`;
	// import img from '$lib/images/60.svg';

	let dc = data.current.weather_code;
	let imgpre = '/src/lib/images/';
	let imgpost = '.svg';
	// import img from '$lib/images/60.svg';
</script>

<table>
	<tbody>
		
		
				<tr>
					<td>Total Precip:</td>
					<td>
						{data.current.precipitation}
						{data.current_units.precipitation}
					</td>
				</tr>
				<tr>
					<td>Current Temp:</td>
					<td>
						{data.current.apparent_temperature}
						{data.current_units.apparent_temperature}
					</td>
				</tr>
				<tr>
					<td>Humidty:</td>
					<td>
						{data.current.relative_humidity_2m}
						{data.current_units.relative_humidity_2m}
					</td>
				</tr>
				<tr>
					<td>Wind Gusts:</td>
					<td>
						{data.current.wind_gusts_10m}
						{data.current_units.wind_gusts_10m}
					</td>
				</tr>
			
		
</table>
<img src="{imgpre}{dc}{imgpost}" alt="weather Icon" />

<style>
	table {
		width: 100%;
	}
	table tr td:last-child {
		text-align: right;
	}
	img {
		background-color: black;
		/* background-image: url('../images/60.svg'); */
		margin-top: 5px;
		height: 75px;
		border-bottom-left-radius: 15px;
		border-top-right-radius: 15px;
		margin-left: 70%;
		/* margin-right: auto; */
	}
</style>
