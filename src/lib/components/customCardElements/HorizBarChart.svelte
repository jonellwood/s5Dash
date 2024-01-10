<script lang="ts">
    var data = [30, 86, 168, 281, 303];
</script>
<div class="chart">
	{#each data as d}
		<div style="width: {d}px">{d}</div>
	{/each}
</div>
<style>
	.chart div {
		font: 10px sans-serif;
		background-color: steelblue;
		text-align: right;
		padding: 3px;
		margin: 1px;
		color: white;
	}
	</style>