function getStatusSummary(data) {
	const summary = {
		pending: { count: 0, balanceSum: 0 },
		approved: { count: 0, balanceSum: 0 },
		ordered: { count: 0, balanceSum: 0 }
	};

	data.forEach((item) => {
		const status = item.status.toLowerCase();
		const balance = parseFloat(item.balance.replace('$', ''));

		if (summary[status]) {
			summary[status].count += item.itemsCount;
			summary[status].balanceSum += balance;
		}
	});

	return summary;
}
export default getStatusSummary;
