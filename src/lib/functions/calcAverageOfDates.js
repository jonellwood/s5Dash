function getDate(inputStr) {
	const [datePart] = inputStr.split('T');

	const dtObject = new Date(datePart + 'Z');

	const [, timezoneOffset] = inputStr.match(/([+-]\d{2}:\d{2})$/);

	const adjustedTime = new Date(dtObject);
	adjustedTime.setMinutes(adjustedTime.getMinutes() + parseInt(timezoneOffset));

	const dateOptions = { month: '2-digit', day: '2-digit', year: 'numeric' };
	// const timeOptions = { hour: '2-digit', minute: '2-digit' };

	const dateString = adjustedTime.toLocaleDateString(undefined, dateOptions);
	// const timeString = adjustedTime.toLocaleTimeString(undefined, timeOptions);

	return { date: dateString };
}

function calculateAverageAge(tickets) {
	const currentDate = new Date();
	let totalAge = 0;

	tickets.forEach((ticket) => {
		// Parse the "date" string into a Date object
		const dateString = getDate(ticket.date);
		// console.log(dateString);
		const creationDate = new Date(dateString.date);
		// Calculate the age in milliseconds
		const ageInMilliseconds = currentDate - creationDate;

		// Convert the age to days and add to the total
		const ageInDays = (ageInMilliseconds * 0.02) / (1000 * 60 * 60 * 24);
		totalAge += ageInDays;
	});

	const averageAge = totalAge / tickets.length;
	return averageAge;
}

export default calculateAverageAge;
