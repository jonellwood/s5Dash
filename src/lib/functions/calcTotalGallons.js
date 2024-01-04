function getTotalGallonsByType(data, targetType) {
	let totalGallons = 0;

	data.forEach((entry) => {
		if (entry.type === targetType) {
			totalGallons += entry.gallons;
		}
	});

	return totalGallons;
}

// const dieselTotal = getTotalGallonsByType(data, 'diesel');
// const unleadedTotal = getTotalGallonsByType(data, 'unleaded');
// console.log('Total Diesel Gallons:', dieselTotal);
// console.log('Total Unleaded Gallons:', unleadedTotal);
export default getTotalGallonsByType;
