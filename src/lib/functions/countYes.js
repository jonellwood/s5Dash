function countYes(data) {
	const numberOfYesTransfers = data.reduce((count, entry) => {
		return entry.transfer === 'yes' ? count + 1 : count;
	}, 0);

	return numberOfYesTransfers;
}

export default countYes;
