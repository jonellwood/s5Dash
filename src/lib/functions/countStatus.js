function countStatus(data, targetStatus) {
	let statusCount = 0;

	data.forEach((entry) => {
		const status = entry.status;

		if (status === targetStatus) {
			statusCount++;
		}
	});

	return statusCount;
}

export default countStatus;

// Count occurrences for each status
// const openCount = countSpecificStatusOccurrences(jsonData, 'open');
// const waitingOnPartsCount = countSpecificStatusOccurrences(jsonData, 'waiting on parts');
// const waitingOnDriverCount = countSpecificStatusOccurrences(jsonData, 'waiting on driver');
// const closedCount = countSpecificStatusOccurrences(jsonData, 'closed');

// console.log('Open count:', openCount);
// console.log('Waiting on Parts count:', waitingOnPartsCount);
// console.log('Waiting on Driver count:', waitingOnDriverCount);
// console.log('Closed count:', closedCount);
