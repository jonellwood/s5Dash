<script>
	import data from '../../../routes/api/geteCatsData/ecatsSummaryData.json';
	// console.log(data[0][911].Answer);

	function extractDateFromDatestring(dateString) {
		// Remove the space before the timezone offset
		// dateString = dateString.replace(' ', '');
		const dateObject = new Date(dateString);

		// Extract justthe date part
		const year = dateObject.getFullYear();
		const month = dateObject.getMonth() + 1; // Month is zero-based ~ ummm i think....
		const day = dateObject.getDate();

		// Format as 'YYYY-MM-DD'
		const formattedDate = `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}`;

		return formattedDate;
	}

	function getYesterday() {
		const today = new Date();
		const yesterday = new Date(today);
		yesterday.setDate(today.getDate() - 1);

		return yesterday;
	}
</script>

<table>
	<thead />
	<tbody>
		
			
				<tr>
					<td><b>Call stats for {extractDateFromDatestring(getYesterday())}</b></td>
					<td />
				</tr>
			
				<tr>
					<td><b>Total 911 Calls</b></td>
					<td>{data[0][911].Total}</td>
				</tr>
				<tr>
					<td><b>911 Calls Answered</b></td>
					<td>{data[0][911].Answered}</td>
				</tr>
				<tr>
					<td><b>911 Calls Abandoned</b></td>
					<td>({data[0][911].AbandonedPercentage}) {data[0][911].Abandoned}</td>
				</tr>
			
				<tr>
					<td><b>{['Calls answered < 10 sec']}</b></td>
					<td>{data[0][911].Answer['Answered≤10']}</td>
				</tr>
				<tr>
					<td><b>{['Calls answered < 15 sec']}</b></td>
					<td>{data[0][911].Answer['Answered≤15']}</td>
				</tr>
				<tr>
					<td><b>{['Calls answered < 20 sec']}</b></td>
					<td>{data[0][911].Answer['Answered≤20']}</td>
				</tr>
				<tr>
					<td><b>{['Calls answered < 40 sec']}</b></td>
					<td>{data[0][911].Answer['Answered≤40']}</td>
				</tr>
		
	</tbody>
</table>

<style>
	table {
		width: 100%;
	}
	table tr td {
		font-size: small;
	}
	table tr td:last-child {
		text-align: right;
	}
</style>
