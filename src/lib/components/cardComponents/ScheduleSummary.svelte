<script>
	import data from '../../../routes/api/getScheduleData/scheduleData.json';
	import parseDateTime from '../../functions/parseDate.js';
	// console.log(data);
	// console.log(parseDateTime(data[0].end.dateTime));

	function filterEventsForToday(events) {
		const today = new Date();
		today.setHours(0, 0, 0, 0);

		const filteredEvents = events.filter((event) => {
			const eventStartDate = new Date(event.start.dateTime);
			const eventEndDate = new Date(event.end.dateTime);

			const isEventForToday =
				eventStartDate >= today && eventStartDate < new Date(today.getTime() + 24 * 60 * 60 * 1000);
			const hasEndDate = eventEndDate && eventEndDate > today;

			return isEventForToday && hasEndDate;
		});
		return filteredEvents;
	}

	const eventsForToday = filterEventsForToday(data);
	// console.log(eventsForToday);
</script>

{#each eventsForToday as event (event.id)}
	<fieldset>
		<table>
			<thead>
				<tr>
					<td class="line-one">
						<b>
							<!-- {event.start.dateTime} -->
							{parseDateTime(event.start.dateTime).date}
						</b>
					</td>
				</thead>
				<tbody>
					<tr>
					<td class="line-one">
						<b>
							{parseDateTime(event.start.dateTime).time}
							to
							{parseDateTime(event.end.dateTime).time}
						</b>
					</td>
				</tr>
				<tr>
					<td class="summary-text" colspan="2">
						{event.summary}
					</td>
				</tr>
			</tbody>
		</table>
	</fieldset>
{/each}

<style>
	table {
		width: 100%;
	}
	.line-one {
		text-align: left;
		/* border-bottom: 1px solid darkslateblue; */
	}
	table tr {
		font-size: small;
	}
	/* table tr td:last-child {
		text-align: right;
	} */
	.summary-text {
		text-align: left;
	}
</style>
