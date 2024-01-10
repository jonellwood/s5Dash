<script>
	import data from '../../../routes/api/getCallData/callData.json';
	import averageDuration from '../../functions/extractDurationAvg.js';
	import convertMS from '../../functions/convertMS.js';
	import findDateRange from '../../functions/findDateRange.js';
	import parseDateTime from '../../functions/parseDate';
	import countYes from '../../functions/countYes.js';
</script>

<table>
	<tbody>
		<tr>
			<td><b>Total Calls</b></td>
			<td>{data.length}</td>
		</tr>
		
		<tr>
			<td><b>Average Call Duration</b></td>
			<td>{convertMS(averageDuration(data))}</td>
		</tr>
		<tr>
			<td><b>Number of Transfers</b></td>
			<td>{countYes(data)}</td>
		</tr>
		<tr>
			<td><b>Data Date Range</b></td>
			<td>{findDateRange(data)}</td>
		</tr>
	</tbody>
</table>

<style>
	table {
		width: 100%;
	}
	table tr td:last-child {
		text-align: right;
	}
</style>
