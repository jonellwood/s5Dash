<script lang="ts">
	// import { onMount } from "svelte";
	let data = [
		{ id: 1, name: "Cassian Andor", affiliation: "Rebel Alliance" },
		{ id: 2, name: "Ezra Bridger", affiliation: "Jedi Order" },
		{ id: 3, name: "Mon Mothma", affiliation: "New Republic" },
		{ id: 4, name: "Jyn Erso", affiliation: "Rebel Alliance" },
		{ id: 5, name: "Poe Dameron", affiliation: "New Republic" }
	];
	// let dataSourceUrl: string = $state("");
	// let { dataSourceUrl = "" } = $props();
	// let data = $state([]);
	// let dataSourceUrl: string = "";
	// onMount(async () => {
	// 	console.log("dataURL is: ", dataSourceUrl);
	// 	try {
	// 		const response = await fetch(dataSourceUrl, {
	// 			method: "POST",
	// 			headers: {
	// 				"Content-Type": "application/json"
	// 			}
	// 		});
	// 		if (response.ok) {
	// 			data = await response.json();
	// 			console.log("holy shit I did it");
	// 			console.log(data);
	// 		} else {
	// 			console.log(`HTTP Error: STATUS: ${response.status}`);
	// 		}
	// 	} catch (error) {
	// 		console.log("Fetch Error: ", error);
	// 	}
	// });
</script>

<!-- <p>{dataSourceUrl}</p> -->
<div>
	<table>
		<thead>
			<tr>
				<th>Employee #</th>
				<th>Name</th>
				<th>Department</th>
			</tr>
		</thead>
		<tbody>
			{#each data as row}
				<tr>
					<td>{row.id}</td>
					<td>{row.name}</td>
					<td>{row.affiliation}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<style>
	table {
		width: 100%;
		border-collapse: collapse;
		margin-top: 20px;
	}

	th,
	td {
		border: 1px solid #ddd;
		padding: 8px;
		text-align: left;
	}

	th {
		background-color: #f2f2f2;
	}
</style>
