<script lang="ts">
	import BarChartImage from "../../lib/images/barCHartIcon.svg";
	import PieChartImage from "../../lib/images/pieChartIcon.svg";
	import DataTableImage from "../../lib/images/dataTableIcon.svg";
	import DataSourceIcon from "../../lib/images/dataSourceIcon.svg";
	import DashItem from "../+page.svelte";
	import HorizBarChart from "$lib/components/sampleCardElements/HorizBarChart.svelte";
	import VertBarChart from "$lib/components/sampleCardElements/VertBarChart.svelte";
	import PieChart from "../../lib/components/sampleCardElements/PieChart.svelte";
	import DataTable from "$lib/components/sampleCardElements/DataTable.svelte";
	import Theme from "../+page.svelte";
	import DataSources from "../../lib/data/datasources.json";

	let cardStyle = $state();
	let bodyStyle = $state();
	let theme = $state<Theme[]>([]);
	let dashItems = $state<DashItem[]>([]);
	let blockName = $state("");
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
	let selectedEntry = $derived(DataSources.find((entry) => entry.name === dataSource));
	let fields = $derived(
		selectedEntry ? Object.entries(selectedEntry.viewTypes.DataTable.dataPoints) : []
	);
	let currentViewTypes = $derived(selectedEntry ? Object.entries(selectedEntry.viewTypes) : []);

	let selectedFields = $state([]);
	// let isFieldSelected = $state(false);
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

	function handleFieldClick(e: Event) {
		e.preventDefault();
		const clickedField = e.currentTarget.value as string;
		const element = e.currentTarget as HTMLElement;
		if (clickedField) {
			const index = selectedFields.indexOf(clickedField);

			if (index === -1) {
				selectedFields = [...selectedFields, clickedField];
				element.style.backgroundColor = "white";
				element.style.color = "black";
				element.style.border = "1px solid black";
				element.style.borderRadius = "5px";
				element.style.padding = "2px";
				// console.log(selectedFields);
				element.style.backgroundColor = `{theme[4]}`;
			} else {
				selectedFields = selectedFields.filter((field) => field !== clickedField);
				element.style.backgroundColor = "";
				element.style.color = "";
				element.style.border = "";
				element.style.borderRadius = "";
				element.style.padding = "";
			}
		}
	}

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
	function resetDataOptionsFormatting() {
		const fieldButtons = document.querySelectorAll(
			".data-options button"
		) as NodeListOf<HTMLElement>;
		// console.log("fieldButtons");
		// console.log(fieldButtons);
		fieldButtons.forEach((button) => {
			button.style.backgroundColor = "";
			button.style.color = "";
			button.style.border = "";
			button.style.borderRadius = "";
			button.style.padding = "";
		});
	}

	let showModalOne = $state(false);
	let showModalTwo = $state(false);
	let showModalThree = $state(false);
	let showModalFour = $state(false);

	function createPreflightChecks(e: Event) {
		const button = document.getElementById("create-button");
		console.log(button);
		e.preventDefault;
		if (dataSource == "") {
			showModalOne = true;
			// alert("You have to select a data Source");
		} else if (selectedFields.length < 2) {
			showModalTwo = true;
			// alert("You have to select at least two fields");
		} else if (selectedComponent == "") {
			// alert("You have to select a view type");
			showModalThree = true;
		} else {
			showModalFour = true;
			// alert("Hampsters are just hippy mice");
		}
	}
</script>

{#if showModalOne}
	<div class="modal-one">
		<h2>
			You have to select a data Source to continue
			<button
				style="color:red;"
				onclick={() => {
					showModalOne = false;
				}}>X</button
			>
		</h2>
	</div>
{/if}
{#if showModalTwo}
	<div class="modal-two">
		<h2>
			You have to select at least two fields to continue
			<button
				style="color:red;"
				onclick={() => {
					showModalTwo = false;
				}}>X</button
			>
		</h2>
	</div>
{/if}
{#if showModalThree}
	<div class="modal-three">
		<h2>
			You have to select a view type to continue
			<button
				style="color:red;"
				onclick={() => {
					showModalThree = false;
				}}>X</button
			>
		</h2>
	</div>
{/if}
{#if showModalFour}
	<div class="modal-four">
		<h2>
			Hampsters are just hippy mice!! ☮️ 🐭
			<button
				style="color:red;"
				onclick={() => {
					showModalFour = false;
				}}>X</button
			>
		</h2>
	</div>
{/if}
<!-- <h1>JibJab</h1> -->
<div class="main">
	<div class="left-pane">
		<label for="component-name"
			>Component Name:
			<input type="text" bind:value={blockName} />
		</label>
		<div class="separator"></div>
		<p>Data Sources:</p>
		<img src={DataSourceIcon} alt="Data Source" />
		<ul>
			{#each DataSources as source}
				<li>
					<button
						on:click={() => {
							dataSource = source.name;
							dataSourceUrl = source.baseUrl;
							selectedFields = [];
							resetDataOptionsFormatting();
							selectedComponent = "";
						}}
					>
						{source.name}
					</button>
				</li>
			{/each}
		</ul>
		<div class="separator"></div>
		{#if dataSource === ""}
			<p>Select Data Source to see options:</p>
		{:else}
			{#each currentViewTypes as [viewTypeName, viewType]}
				<li>
					<button
						on:click={() => {
							handleChartClick(viewTypeName);
							if (selectedEntry) {
								dataSourceUrl = selectedEntry.baseUrl + viewType.viewUrl;
							}
						}}
					>
						{viewTypeName}
					</button>
				</li>
			{/each}
		{/if}

		<button class="create-button" id="create-button" onclick={createPreflightChecks}
			>Create Component</button
		>
	</div>
	<div class="center-pane">
		<div
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

			<div class="data-options">
				{#if dataSource == ""}
					<p>⬅️ Select a Data Source from list on the left</p>
				{:else}
					<p>Data Source: {dataSource}</p>
					{#if selectedEntry}
						<p>Available Data Fields:</p>
						<ul>
							<li class="separator-light-border"></li>
							{#each fields as [fieldName, fieldLabel]}
								<li>
									<button
										onclick={handleFieldClick}
										onkeydown={handleFieldClick}
										value={fieldLabel}
									>
										{fieldLabel}
									</button>
								</li>
							{/each}
						</ul>
					{/if}
				{/if}
			</div>
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
				<li>
					Selected Fields:
					<ul>
						{#each selectedFields as field}
							<li>{field}</li>
						{/each}
					</ul>
				</li>
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
		grid-template-columns: 15% 55% 30%;
	}
	.left-pane {
		padding: 5px;
		background-color: #808080;
		text-align: center;
		justify-content: center;
		align-items: center;
		border-right: 2px double lightgray;
		overflow-y: scroll;
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
		/* max-height: 550px; */
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
		display: flex;
		flex-wrap: wrap;
		padding-left: 2px;
		position: absolute;
		bottom: 10px;
		font-family: monospace;
		text-align: left;
		max-width: 300px;
		/* text-wrap: wrap; */
	}
	.data-options {
		margin-top: 5%;
		font-family: monospace;
		/* display: flex; */
	}
	.data-options ul {
		list-style-type: none;
		display: flex;
		flex-direction: column;
	}
	/* .blue {
		color: hotpink !important;
		background-color: blueviolet !important;
	} */
	button {
		padding: 2px;
		border: 1px solid transparent;
	}
	#card-div {
		padding: 1em;
		height: fit-content;
	}
	.create-button {
		border: 1px solid black;
		background-color: #fff;
		padding: 5px;
		border-radius: 7px;
		position: absolute;
		bottom: 0;
		left: 0;
		margin-left: 3%;
		margin-bottom: 2%;
		box-shadow: 10px 10px 10px 1px #000b29;
	}
	.create-button:disabled {
		color: lightgray;
	}
	.create-button:hover {
		box-shadow: 5px 5px 5px 1px #000b29;
		transform: scale(0.99);
	}
	.modal-one,
	.modal-two,
	.modal-three,
	.modal-four {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		margin-top: 15%;
		margin-right: 25%;
		margin-bottom: 15%;
		margin-left: 25%;
		background-color: limegreen;
		z-index: 5;
		text-align: center;
		font-size: xx-large;
		border: 4px solid darkgreen;
		border-radius: 7px;
		box-shadow: 5px 5px 5px 1px #000b29;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
