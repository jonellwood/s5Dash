<script>
	import data from '../../routes/api/getFleetTicketData/ticketData.json';
	import parseDateTime from '../functions/parseDate';
	import formatPhoneNumber from '../functions/formatPhoneNumber';
</script>

<div class="body">
	<table>
		<thead>
			<tr>
				<th>Status</th>
				<th>Date Created</th>
				<th>Time Created</th>
				<th>Vehicle#</th>
				<th>Odometer</th>
				<th>PM</th>
				<th>Down</th>
				<th>Driver Name</th>
				<th>Driver Phone</th>
			</tr>
		</thead>
		<tbody>
			{#each data as { odemeter, vehicleNumber, name, phone, date, isDown, isPM, status }, index}
				<tr>
					<td class="bad-grammer">{status}</td>
					<td>{parseDateTime(date).date}</td>
					<td>{parseDateTime(date).time}</td>
					<td>{vehicleNumber}</td>
					<td>{odemeter}</td>
					<td class="bool">{isPM}</td>
					<td class="bool {isDown}">{isDown}</td>
					<td>{name}</td>
					<td>{formatPhoneNumber(phone)}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<style>
	.body {
		margin: 0;
		background: linear-gradient(45deg, #49a09d, #5f2c82);
		font-family: sans-serif;
		font-weight: 100;
	}
	table {
		/* width: 800px; */
		/* border-collapse: collapse; */
		/* overflow: hidden; */
		box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
	}

	th,
	td {
		padding: 15px;
		background-color: rgba(255, 255, 255, 0.2);
		color: #fff;
	}

	/* th {
		text-align: left;
	} */

	thead th {
		background-color: #55608f;
	}

	tbody tr {
		&:hover {
			background-color: rgba(255, 255, 255, 0.3);
		}
	}

	tbody td {
		position: relative;
		&:hover {
			&:before {
				content: '';
				position: absolute;
				left: 0;
				right: 0;
				top: -9999px;
				bottom: -9999px;
				background-color: rgba(255, 255, 255, 0.2);
				z-index: -1;
			}
		}
	}
	.bool {
		text-transform: uppercase;
	}
	.true {
		color: dodgerblue;
		/* background-color: #00000020; */
	}
	.bad-grammer {
		text-transform: capitalize;
	}
</style>
