import createDateObjectFromMonthDay from './createDateObjectFromMonthDay';

function filterBirthdaysWithCurrentWeek(jsonArray) {
	const today = new Date();
	const startOfWeek = new Date(today);
	startOfWeek.setHours(0, 0, 0, 0 - today.getDay());
	// console.log('Start: ', startOfWeek);
	const endOfWeek = new Date(today);
	endOfWeek.setHours(23, 59, 59, 999 + (6 - today.getDay()));
	// console.log('End: ', endOfWeek);
	return jsonArray.filter((entry) => {
		const birthday = new Date(createDateObjectFromMonthDay(entry.date));
		// console.log(birthday);
		return birthday >= startOfWeek && birthday <= endOfWeek;
	});
}
export default filterBirthdaysWithCurrentWeek;