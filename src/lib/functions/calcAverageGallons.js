function averageGallons(data) {
	const gallons = data.map((item) => item.gallons);

	const totalGallons = gallons.reduce((acc, gallons) => acc + gallons, 0);

	const averageDuration = totalGallons / gallons.length;

	return averageDuration;
}

export default averageGallons;
