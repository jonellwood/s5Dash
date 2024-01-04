// This function is for the generator page to take in the value of items in camelCase and return them with a space before each capital letter and the first letter lowercase where needed.

function insertSpaceBeforeCapital(str) {
	let result = '';

	for (let i = 0; i < str.length; i++) {
		if (i > 0 && str[i] === str[i].toUpperCase()) {
			result += ' ' + str[i].toLowerCase();
		} else {
			result += str[i];
		}
	}

	return result;
}
export default insertSpaceBeforeCapital;
