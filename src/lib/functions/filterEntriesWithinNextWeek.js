import createDateObjectFromMonthDay from './createDateObjectFromMonthDay';

function filterEntriesWithinNextWeek(jsonArray) {
	const today = new Date();
	const startOfNextWeek = new Date(today);
	startOfNextWeek.setDate(today.getDate() + (7 - today.getDay()));
	startOfNextWeek.setHours(0, 0, 0, 0);

	const endOfNextWeek = new Date(startOfNextWeek);
	endOfNextWeek.setDate(startOfNextWeek.getDate() + 6);
	endOfNextWeek.setHours(23, 59, 59, 999);

	return jsonArray.filter((entry) => {
		// Parse the date string into a Date object
		const entryDate = new Date(createDateObjectFromMonthDay(entry.date));

		// Check if the date is valid
		if (isNaN(entryDate.getTime())) {
			console.error(`Invalid date format: ${entry.date}`);
			return false;
		}

		// Check if the date falls within the next week
		return entryDate >= startOfNextWeek && entryDate <= endOfNextWeek;
	});
}
export default filterEntriesWithinNextWeek;