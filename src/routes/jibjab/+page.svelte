<script lang="ts">
	import BarChartImage from "../../lib/images/barCHartIcon.svg";
	import PieChartImage from "../../lib/images/pieChartIcon.svg";
	import DataTableImage from "../../lib/images/dataTableIcon.svg";
	import DataSourceIcon from "../../lib/images/dataSourceIcon.svg";
	import DashItem from "../+page.svelte";
	import HorizBarChart from "$lib/components/customCardElements/HorizBarChart.svelte";
	import VertBarChart from "$lib/components/customCardElements/VertBarChart.svelte";
	import PieChart from "../../lib/components/customCardElements/PieChart.svelte";
	import DataTable from "$lib/components/customCardElements/DataTable.svelte";
	import Theme from "../+page.svelte";
	import DataSources from "../../lib/data/datasources.json";
	console.log(DataSources);

	let cardStyle = $state();
	let bodyStyle = $state();
	let theme = $state<Theme[]>([]);
	let dashItems = $state<DashItem[]>([]);
	let blockName = $state("");
	// let uniqueName = $state(updateUniqueName());
	let uniqueName = $state(createUUID());
	let dataSource = $state("");
	let dataSourceUrl = $state("");
	let dataOptions = $state("");
	let fuelType = $state("");
	let name = $state("");
	let component = $state("");
	let createdBy = $state("system");
	let description = $state("");
	let propValue = $state("");
	let selectedComponent = $state("");
	let elemWidth = $state(0);
	let elemHeight = $state(0);
	// import {Items} from '../../lib/data/widgetList.js';
	// import {Websites} from '../../lib/data/websitesList.js'

	const handleChartClick = (chartType: string) => {
		console.log(chartType);
		switch (chartType) {
			case "HorizBarChart":
				selectedComponent = "HorizBarChart";
				break;
			case "VertBarChart":
				selectedComponent = "VertBarChart";
				break;
			case "PieChart":
				selectedComponent = "PieChart";
				break;
			case "DataTable":
				selectedComponent = "DataTable";
				break;
			default:
				selectedComponent = "HorizBarChart";
		}
	};
	function loadComponent(component: string) {
		// console.log('loading ', component);
		return import(`../lib/components/cardComponents/${component}.svelte`);
	}

	function createUUID() {
		var dt = new Date().getTime();
		var uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
			var r = (dt + Math.random() * 16) % 16 | 0;
			dt = Math.floor(dt / 16);
			return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
		});
		return uuid;
	}

	// $effect(() => {
	//     const elem = document.getElementById('card-div');
	//     if (elem) {
	//         elemWidth = elem.offsetWidth;
	//         elemHeight = elem.offsetHeight;
	//     }
	// })

	function updateSize() {
		const elem = document.getElementById("card-div");
		if (elem) {
			elemWidth = elem.offsetWidth;
			elemHeight = elem.offsetHeight;
		}
	}

	$effect(() => {
		const savedTheme = localStorage.getItem("theme");
		savedTheme && (theme = JSON.parse(savedTheme));
		// console.log(savedTheme);
		const savedDashItems = localStorage.getItem("dashItems");
		savedDashItems && (dashItems = JSON.parse(savedDashItems));
		// console.log('Saved Dash Items:')
		// console.log(savedDashItems)
	});

	$effect(() => {
		cardStyle = `
	        background-color: ${theme[1]};
            color: ${theme[2]};
            border: ${theme[3]}px solid ${theme[4]};
            box-shadow: ${theme[9]}px ${theme[9]}px ${theme[9]}px 1px ${theme[5]};
            font-size: ${theme[7]}px;
            h2 {
                color: ${theme[8]};
            }
	    `;
		// console.log(cardStyle);
	});

	$effect(() => {
		bodyStyle = `
        background-color: ${theme[6]};`;
	});
</script>

<!-- <h1>JibJab</h1> -->
<div class="main">
	<div class="left-pane">
		<label for="component-name"
			>Component Name:
			<input type="text" bind:value={blockName} />
		</label>
		<div class="separator"></div>
		<p>Available Options:</p>
		<ul>
			<li>
				<p id="horizBarChart">
					<button
						onclick={() => handleChartClick("HorizBarChart")}
						onkeydown={() => handleChartClick("HorizBarChart")}
					>
						<img src={BarChartImage} alt="bar chart" class="rotate-icon" />
						Horizontal Bar Chart
					</button>
				</p>
			</li>
			<li class="separator-light-border"></li>
			<li>
				<p id="verticalBarChart">
					<button
						onclick={() => handleChartClick("VertBarChart")}
						onkeydown={() => handleChartClick("VertBarChart")}
					>
						<img src={BarChartImage} alt="bar chart" />
						Vertical Bar Chart
					</button>
				</p>
			</li>
			<li class="separator-light-border"></li>
			<li>
				<p id="pieChart">
					<button
						onclick={() => handleChartClick("PieChart")}
						onkeydown={() => handleChartClick("PieChart")}
					>
						<img src={PieChartImage} alt="pie chart" />
						Pie Chart
					</button>
				</p>
			</li>
			<li class="separator-light-border"></li>
			<li>
				<p id="dataTable">
					<button
						onclick={() => handleChartClick("DataTable")}
						onkeydown={() => handleChartClick("DataTable")}
					>
						<img src={DataTableImage} alt="data table" width="83 px" />
						Data Table
					</button>
				</p>
			</li>
			<li class="separator"></li>
		</ul>
		<p>Data Sources:</p>
		<img src={DataSourceIcon} alt="Data Source" />
		<ul>
			{#each DataSources as source}
				<li>
					<button
						on:click={() => {
							dataSource = source.name;
							dataSourceUrl = source.url;
						}}
					>
						{source.name}
					</button>
				</li>
			{/each}
		</ul>
	</div>
	<div class="center-pane">
		<div
			class="h-[300px] w-[300px] p-4"
			style={cardStyle as string}
			id="card-div"
			bind:offsetWidth={elemWidth}
			bind:offsetHeight={elemHeight}
		>
			{#if blockName === ""}
				<h1
					style="font-size: {Number(theme[9]) * 1.25 ??
						0}px; border-bottom: {theme[3]}px solid {theme[4]}; color: {theme[8]};"
				>
					Component Name
				</h1>
			{:else}
				<h2
					style="font-size: {Number(theme[9]) * 1.25 ??
						0}px; border-bottom: {theme[3]}px solid {theme[4]}; color: {theme[8]};;"
				>
					{blockName}
				</h2>
			{/if}
			<p>Click component type from the left pane to this area to display your data.</p>
			{#if dataSource == ""}
				<p>Select a Data Source from list below</p>
			{:else}
				<p>Data Source: {dataSource}</p>
			{/if}
			<p id="center-pane-data-area">
				{#if selectedComponent === "HorizBarChart"}
					<HorizBarChart />
				{:else if selectedComponent === "VertBarChart"}
					<VertBarChart />
				{:else if selectedComponent === "PieChart"}
					<PieChart />
				{:else if selectedComponent === "DataTable"}
					<DataTable />
				{/if}
			</p>
		</div>
	</div>
	<div class="right-pane">
		<h2>Customize</h2>
		<ul>
			<li>
				<label for="font-size">Data Font Size: </label><br />
				<input type="range" min="10" max="36" bind:value={theme[7]} />
			</li>
			<li class="separator"></li>
			<li>
				<label for="background-color">Background Color: </label>
				<br />
				<input type="color" bind:value={theme[1]} />
			</li>
			<li class="separator"></li>
			<li>
				<label for="text-color">Text Color: </label>
				<br />
				<input type="color" bind:value={theme[2]} />
			</li>
			<li class="separator"></li>
		</ul>
		<div class="component-info">
			<ul>
				<li>Name: {blockName}</li>
				<li>Created By: {createdBy}</li>
				<li>Unique ID: {uniqueName}</li>
				<li>Data Source: {dataSource}</li>
				<li>Display Type: {selectedComponent}</li>
				<li>Background Color: {theme[1]}</li>
				<li>Text Color: {theme[2]}</li>
				<li>Font Size: {theme[7]}px</li>
				<li>Height: {elemHeight}</li>
				<li>Width: {elemWidth}</li>
				<li>Data Source URL: {dataSourceUrl}</li>
			</ul>
		</div>
	</div>
</div>

<style>
	.separator {
		border-bottom: 2px solid white;
		margin: 10px 0;
	}
	.separator-light-border {
		border-bottom: 1px solid lightgray;
		margin: 10px 0;
	}
	.main {
		width: 97dvw;
		height: 97dvh;
		display: grid;
		grid-template-columns: 15% 65% 20%;
	}
	.left-pane {
		padding: 5px;
		background-color: #808080;
		text-align: center;
		justify-content: center;
		align-items: center;
		border-right: 2px double lightgray;
		/* overflow-y: scroll; */
	}
	.left-pane img {
		margin-left: auto;
		margin-right: auto;
		width: 125px;
		padding: 15%;
	}
	.left-pane li {
		/* border: 1px solid white; */
		margin: 15px;
	}
	.center-pane {
		padding: 20px;
		background-color: #808080;
		display: flex;
		justify-content: center;
	}
	.center-pane div {
		width: fit-content;
		height: fit-content;
		min-width: 300px;
		max-width: 650px;
		min-height: 300px;
		max-height: 550px;
		position: relative;
		/* left: 10%; */
		top: 20%;
	}
	.right-pane {
		padding: 5px;
		background-color: #808080;
		text-align: center;
		justify-content: center;
		align-items: center;
		border-left: 2px double lightgray;
	}
	.rotate-icon {
		transform: rotate(90deg);
	}
	input {
		padding: 1%;
	}
	.icon {
		height: 60px !important;
	}
	.component-info {
		padding-left: 2px;
		position: absolute;
		bottom: 10px;
		font-family: monospace;
		text-align: left;
	}
</style>
