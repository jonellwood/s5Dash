<script>
	import data from '../../../routes/api/getTimeKeeperData/timekeeperData.json';
	import calculateTotalHoursByDepartment from '../../functions/extractDepartmentHoursTotal.js';
	const summaryData = calculateTotalHoursByDepartment(data);
	// console.log(summaryData);
</script>

<fieldset>
<table>
	{#each Object.entries(summaryData) as [department, { totalHours, employeeCount }]}
	<thead>
		<tr><th>{department}</th></tr>
	</thead>				
				<tbody>
					<tr>
						<td>Employees: {employeeCount}</td>
					</tr>
					<tr>
						<td>Total Hours: {totalHours}</td>
					</tr>
				</tbody>
				{/each}
		</table>
	</fieldset>

<style>
	table {
		width: 100%;
	}
	table th {
		text-align: left;
		border-bottom: 1px solid darkslateblue;
		/* font-size: small; */
	}
	table tr {
		font-size: small;
	}
	table tr td:last-child {
		text-align: right;
	}
</style>
