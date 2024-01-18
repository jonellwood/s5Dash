<script lang="ts">
	var data = [30, 86, 168, 281, 303];
	// let dataSourceUrl: string = $state("");
	export let dataSourceUrl: string = "";
</script>

<p>{dataSourceUrl}</p>
<div class="chart">
	{#each data as d}
		<div style="width: {d}px">{d}</div>
	{/each}
</div>

<style>
	.chart {
		/* display: flex; */
		/* border: 10px solid hotpink; */
		padding-top: 5%;
		padding-left: 20%;
	}
	.chart div {
		font: 10px sans-serif;
		background-color: steelblue;
		text-align: right;
		padding: 3px;
		margin: 1px;
		color: white;
	}
</style>
