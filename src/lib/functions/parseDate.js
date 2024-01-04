function parseDateTime(inputStr) {
	// console.log(inputStr);

	// const [, timezoneOffset] = inputStr.match(/([+-]\d{2}:\d{2})$/);

	// Parse the input string without timezone information
	const dtObject = new Date(inputStr.slice(0, -6) + 'Z');

	// Adjust the time based on the timezone offset
	const adjustedTime = new Date(dtObject);
	// adjustedTime.setMinutes(adjustedTime.getMinutes() + parseInt(timezoneOffset));
	adjustedTime.setMinutes(adjustedTime.getMinutes());

	const dateOptions = { year: 'numeric', month: '2-digit', day: '2-digit' };
	const timeOptions = { hour: '2-digit', minute: '2-digit' };

	const dateString = adjustedTime.toLocaleDateString(undefined, dateOptions);
	const timeString = adjustedTime.toLocaleTimeString(undefined, timeOptions);

	return { date: dateString, time: timeString };
}
export default parseDateTime;
