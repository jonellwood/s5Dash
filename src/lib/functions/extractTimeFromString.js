function extractTimeFromDatestring(dateString) {
	dateString = dateString.replace(' ', '');
	const date = new Date(dateString);
	console.log(date);
	const hours = date.getHours();
	const minutes = date.getMinutes();

	// Convert hours to AM/PM format
	const amPm = hours >= 12 ? 'PM' : 'AM';
	const formattedHours = hours % 12 === 0 ? 12 : hours % 12;

	// Add leading zero for minutes if necessary
	const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

	return `${formattedHours}:${formattedMinutes} ${amPm}`;
}

export default extractTimeFromDatestring;
