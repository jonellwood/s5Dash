<script>
	import data from '../../../routes/api/getSiteStatus/siteData.json';
</script>

<fieldset>
	<table>
		<tbody>
			{#each data as { name, status }}
				<tr class={status}>
					<td>{name}</td>
					<td class="site-status">{status}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</fieldset>

<style>
	table {
		width: 100%;
	}
	.site-status {
		text-align: right;
	}
	.up {
		color: darkgreen;
		background-color: lightgreen;
		border: 1px solid darkgreen;
	}
	.up::after {
		content: '\1f44d';
	}
	.down {
		color: darkred;
		background-color: pink;
		border: 1px solid darkred;
	}
	.down::after {
		content: '\1f44e';
	}
	table {
		width: 100%;
	}
	table tr td:last-child {
		text-align: right;
	}
	fieldset {
		padding: 10px;
	}
</style>
