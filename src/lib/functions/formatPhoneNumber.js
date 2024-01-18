function formatPhoneNumber(input) {
	const cleanedNumber = input.replace(/\D/g, '');

	if (cleanedNumber.length >= 10) {
		const formattedNumber = `(${cleanedNumber.slice(-10, -7)}) ${cleanedNumber.slice(
			-7,
			-4
		)}-${cleanedNumber.slice(-4)}`;
		return formattedNumber;
	} else {
		// If the number is not long enough, return the original input
		return input;
	}
}

export default formatPhoneNumber;
