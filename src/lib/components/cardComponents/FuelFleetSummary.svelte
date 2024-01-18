<script>
	import data from '../../../routes/api/getFleetFuelData/fuelData.json';
	import getTotalGallonsByType from '../../functions/calcTotalGallons.js';
	import findDateRange from '../../functions/findDateRange';
</script>


	<table>
		<tbody>

			<tr>
				<td><b>Total Transactions</b></td>
				<td>{data.length}</td>
			</tr>
			
			<tr>
				<td><b>Total Diesel (gallons)</b></td>
				<td>{getTotalGallonsByType(data, 'diesel').toFixed(2)}</td>
			</tr>
			<tr>
				<td><b>Total Unleaded (gallons)</b></td>
				<td>{getTotalGallonsByType(data, 'unleaded').toFixed(2)}</td>
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
