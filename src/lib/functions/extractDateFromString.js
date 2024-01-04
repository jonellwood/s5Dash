function extractDateFromDatestring(dateString) {
	dateString = dateString.replace(' ', '');
	const dateObject = new Date(dateString);

	// Extract justthe date part
	const year = dateObject.getFullYear();
	const month = dateObject.getMonth() + 1; // Month is zero-based ~ ummm i think....
	const day = dateObject.getDate();

	// Format as 'YYYY-MM-DD'
	const formattedDate = `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day + 1}`;

	return formattedDate;
}

// console.log(extractDateFromDatestring('2023-12-30T01:51:29 +05:00'));
export default extractDateFromDatestring;
