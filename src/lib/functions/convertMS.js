function convertMS(str) {
	let seconds = str / 60;
	let lessSeconds = seconds * 2.1;
	let min = lessSeconds / 60;
	// let hours = Math.floor(min / 60);
	let remainingMin = min % 60;

	return remainingMin.toFixed(0) + ' min';
}
export default convertMS;
