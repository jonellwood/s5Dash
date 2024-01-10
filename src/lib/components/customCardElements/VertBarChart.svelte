<script lang="ts">
    var data = [30, 86, 168, 181, 223];
</script>
<div class="chart">
	{#each data as d}
		<div style="height: {d}px; width: 25px">{d}</div>
	{/each}
</div>
<style>
    .chart{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        align-items: end;
        gap:1px;
        width: 15%;
        margin-left: 30%;
    }
	.chart div {
		font: 10px sans-serif;
		background-color: steelblue;
		text-align: center;
		padding: 3px;
		margin: 1px;
		color: white;
	}
	</style>