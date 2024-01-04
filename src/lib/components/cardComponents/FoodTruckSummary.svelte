<script>
	import data from '../../../routes/api/getFoodTruckData/foodTruckData.json';
	import extractDateFromDatestring from '../../functions/extractDateFromString.js';

	function parseDateString(dateString) {
		dateString = dateString.replace(' ', '');

		const dateObject = new Date(dateString);
		// console.log('dateObject', dateObject);
		return dateObject;
	}

	function filterEntriesWithinCurrentWeek(jsonArray) {
		const today = new Date();
		const startOfWeek = new Date(today);
		startOfWeek.setHours(0, 0, 0, 0 - today.getDay());
		// console.log('Start: ', startOfWeek);
		const endOfWeek = new Date(today);
		endOfWeek.setHours(23, 59, 59, 999 + (6 - today.getDay()));
		// console.log('End: ', endOfWeek);
		return jsonArray.filter((entry) => {
			const registeredDate = new Date(parseDateString(entry.registered));

			return registeredDate >= startOfWeek && registeredDate <= endOfWeek;
			// return registeredDate;
		});
	}

	let weeksTrucks = filterEntriesWithinCurrentWeek(data);
</script>

<fieldset>
	<table>
		<thead>

		</thead>
		<tbody>
			{#each weeksTrucks as { truckName, registered }, index}
			<tr>
				<td><b>{truckName}</b></td>
				<td>{extractDateFromDatestring(registered)}</td>
			</tr>
			{/each}
		</tbody>
	</table>
</fieldset>

<style>
	table {
		width: 100%;
	}
	/* table tr td {
		border-top: 1px solid wheat;
	} */
	table tr td:last-child {
		text-align: right;
	}
</style>
