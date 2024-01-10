function filterEntriesWithinCurrentWeek(jsonArray) {
	const today = new Date();
	const startOfWeek = new Date(today);
	startOfWeek.setHours(0, 0, 0, 0 - today.getDay());
	console.log('Start: ', startOfWeek);
	const endOfWeek = new Date(today);
	endOfWeek.setHours(23, 59, 59, 999 + (6 - today.getDay()));
	console.log('End: ', endOfWeek);
	return jsonArray.filter((entry) => {
		const registeredDate = new Date(entry.registered);

		return registeredDate >= startOfWeek && registeredDate <= endOfWeek;
		// return registeredDate;
	});
}

export default filterEntriesWithinCurrentWeek;
