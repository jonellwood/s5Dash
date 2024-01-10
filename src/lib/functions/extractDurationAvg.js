function averageDuration(data) {
	const durations = data.map((item) => item.duration);

	const totalDuration = durations.reduce((acc, duration) => acc + duration, 0);

	const averageDuration = totalDuration / durations.length;

	return averageDuration;
}

export default averageDuration;
