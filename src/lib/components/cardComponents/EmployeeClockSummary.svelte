<script>
	import data from '../../../routes/api/getClockStatusData/clockStatusData.json';
	import calcClockedInStatus from '../../functions/calcClockedInStatus.js';

	const summary = calcClockedInStatus(data);
	// console.log(summary['Admin Services'].clockedIn);
	// console.log(summary);
</script>

<fieldset>
<table>
	<tbody>
		{#each Object.entries(summary) as [department, { clockedIn, notClockedIn }]}
				
				<tr>
						<th>{department}</th>
				</tr>	
					<tr>
						<td>Clocked In: {clockedIn}</td>
					</tr>
					<tr>
						<td>Not Clocked In: {notClockedIn}</td>
					</tr>
				
				{/each}
				<tr />
			</tbody>
		</table>
	</fieldset>

<style>
	table {
		width: 100%;
	}
	table th {
		text-align: left;
		border-bottom: 1px solid darkslateblue;
	}
	table tr {
		font-size: small;
	}
	table tr td:last-child {
		text-align: right;
	}
</style>
