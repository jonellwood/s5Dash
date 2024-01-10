<script>
	import data from '../../../routes/api/getFleetTicketData/ticketData.json';
	import countSpecificStatusOccurrences from '../../functions/countStatus.js';
	import calculateAverageAge from '../../functions/calcAverageOfDates.js';
</script>

<table>
	<tbody>

		<tr>
			<td><b>Total Tickets</b></td>
			<td>{data.length}</td>
		</tr>
		
		<tr>
			<td><b>Total Open Tickets</b></td>
			<td>{countSpecificStatusOccurrences(data, 'open')}</td>
		</tr>
		<tr>
			<td><b>Total Tickets Waiting on Parts</b></td>
			<td>{countSpecificStatusOccurrences(data, 'waiting on parts')}</td>
		</tr>
		<tr>
			<td><b>Total Tickets Waiting on Driver</b></td>
			<td>{countSpecificStatusOccurrences(data, 'waiting on driver')}</td>
		</tr>
		<tr>
			<td><b>Total Tickets being Outsourced</b></td>
			<td>{countSpecificStatusOccurrences(data, 'outsourcing')}</td>
		</tr>
		<tr>
			<td><b>Total Vehicles Dead Up</b></td>
			<td>{countSpecificStatusOccurrences(data, 'this thing is effed')}</td>
		</tr>
		<tr>
			<td><b>Average Ticket Age (days)</b></td>
			<td>{calculateAverageAge(data).toFixed(0)}</td>
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
