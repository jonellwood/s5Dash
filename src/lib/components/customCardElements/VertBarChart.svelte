<script lang="ts">
	import { onMount } from "svelte";
	// var data = [30, 86, 168, 181, 223];
	// let dataSourceUrl: string = $state("");
	// export let dataSourceUrl: string = "";
	let { dataSourceUrl = "" } = $props();
	let data = $state([]);
	let di = $derived(countDownItems(data));
	let pm = $derived(countPM(data));
	onMount(async () => {
		console.log("dataURL is: ", dataSourceUrl);
		try {
			const response = await fetch(dataSourceUrl, {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				}
			});
			if (response.ok) {
				data = await response.json();
				console.log("BALLS I did it again!!");
				console.log(data);
			} else {
				console.error(`HTTPS Error: STATUS: ${response.status}`);
			}
		} catch (error) {
			console.log("Fetch Error: ", error);
		}
	});
	// THIS NEEDS MOVED TO A SPECIFIC UTILS FILE MAYBE? JUST NOT HERE THIS IS A GENERIC COMPONENT
	function countDownItems(data: any[]) {
		return data.reduce((count: number, item) => (item.isDown ? count + 1 : count), 0);
	}
	function countPM(data: any[]) {
		return data.reduce((count: number, item) => (item.isPM ? count + 1 : count), 0);
	}
	// console.log("countDownItems: ", countDownItems(data));
</script>

<p>{dataSourceUrl}</p>
<div class="chart">
	<p>Down vehicles: {di}</p>
	<p>PM Vehicles: {pm}</p>
	<!-- {#each data as d}
		<div style="height: {d}px; width: 25px">{d}</div>
	{/each} -->
</div>

<style>
	.chart {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
		align-items: end;
		gap: 1px;
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
