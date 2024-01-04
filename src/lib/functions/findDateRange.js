function findDateRange(data) {
	const dateObjects = data.map((item) => item.date);
	// console.log(dateObjects);
	// for (const entry of dateObjects) {
	// 	const dateString = entry.split('T')[0];
	// 	console.log(dateString);
	// }

	const dateStrings = dateObjects.map((entry) => new Date(entry.split('T')[0]));
	// console.log(dateStrings);

	// Find the minimum and maximum dates
	const minDate = new Date(Math.min(...dateStrings));
	const maxDate = new Date(Math.max(...dateStrings));

	// console.log('Lower Limit:', minDate);
	// console.log('Upper Limit:', maxDate);

	return fixDateString(minDate) + ' to ' + fixDateString(maxDate);
}
export default findDateRange;

function fixDateString(inputString) {
	const dateObject = new Date(inputString);

	const month = dateObject.toLocaleString('en-US', { month: 'short' });
	const day = dateObject.getDate();
	const year = dateObject.getFullYear();

	return `${month} ${day} ${year}`;
}
