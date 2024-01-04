function createDateObjectFromMonthDay(monthDay) {
	// Split the month and day values
	const [month, day] = monthDay.split('-').map(Number);

	// Get the current year
	const currentYear = new Date().getFullYear();

	// Create a new Date object with the current year, month (months are 0-based in JavaScript Date objects), and day
	const dateObject = new Date(currentYear, month - 1, day);

	return dateObject;
}

export default createDateObjectFromMonthDay;