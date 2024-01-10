<script lang="ts">
import BarChartImage from '../../lib/images/barCHartIcon.svg';
import PieChartImage from '../../lib/images/pieChartIcon.svg';
// import LineChartImage from '../../lib/images/rain.svg';
import DataTableImage from '../../lib/images/dataTableIcon.svg';

let cardStyle = $state();
let bodyStyle = $state();
import Theme from "../+page.svelte";
import {Items} from '../../lib/data/widgetList.js';
import {Websites} from '../../lib/data/websitesList.js'
import DashItem from '../+page.svelte'
import HorizBarChart from '$lib/components/customCardElements/HorizBarChart.svelte';
import VertBarChart from '$lib/components/customCardElements/VertBarChart.svelte';
import PieChart from '../../lib/components/customCardElements/PieChart.svelte';
// import type { Mouse } from 'phosphor-svelte';
let theme = $state<Theme[]>([]);
let dashItems = $state<DashItem[]>([]);
let blockName = $state('');
let uniqueName = $state('');
let dataSource = $state('');
let dataOptions = $state('');
let fuelType = $state('');
let name = $state('');
let component = $state('');
let createdBy = $state('system');
let description = $state('')
	let propValue = $state('');

	$effect(() => {
		const savedTheme = localStorage.getItem('theme');
		savedTheme && (theme = JSON.parse(savedTheme));
		// console.log(savedTheme);
		const savedDashItems = localStorage.getItem('dashItems');
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
        background-color: ${theme[6]};`
    })
    
</script>

<h1>JibJab</h1>
<div class="main">
    <div class="left-pane">
        <label for="component-name">Component Name:
            <input type="text" bind:value={blockName}/>
        </label>
        <div class="separator"></div>
        
        <ul>
            <li>
                <p>
                    <img src={BarChartImage} alt="bar chart" class="rotate-icon"/>
                   Horizontal Bar Chart
                </p>
            </li>
            <li class="separator"></li>
            <li>
                <p>
                    <img src={BarChartImage} alt="bar chart" />
                   Vertical Bar Chart
                </p>
            </li>
            <li class="separator"></li>
            <li>
                <p>
                    <img src={PieChartImage} alt="pie chart" />
                
                    Pie Chart
                </p>
            </li>
            <li class="separator"></li>
            <!-- <li>
                <p>
                    <img src={LineChartImage} alt="line chart" />
                    Line Chart
                </p>
            </li>
            <li class="separator"></li> -->
            <li>
                <p>
                    <img src={DataTableImage} alt="data table" />
                    Data Table
                </p>
            </li>
            <li class="separator"></li>
        </ul>
        
    </div>
    <div class="center-pane">
        <div class="p-4 w-[300px] h-[300px]" style={cardStyle as string}>
            {#if blockName === ""}
            <h1 style="font-size: {Number(theme[9]) * 1.25 ?? 0}px; border-bottom: {theme[3]}px solid {theme[4]}; color: {theme[8]};">Component Name</h1>
            {:else}
            <h2 style="font-size: {Number(theme[9]) * 1.25 ?? 0}px; border-bottom: {theme[3]}px solid {theme[4]}; color: {theme[8]};;">{blockName}</h2> 
            {/if}
            <!-- <p style="font-size: {Number(theme[9])}px;">
			This is a sample card with data from
            {#if dataSource == '' || dataSource == undefined}
                a data source
            {:else}
                <span style="padding:2px; font-weight: bold; background-color: {theme[8]};">{dataSource}</span>
            {/if}
			about
			{#if dataOptions == '' || dataOptions == undefined}
				some data options
			{:else}
				<span style="padding:2px; font-weight: bold; background-color: {theme[8]};">{dataOptions}</span>
			{/if}

            {#if fuelType !== ''}
				for the <span style="padding:2px; font-weight: bold; background-color: {theme[8]};"> {fuelType} </span>
			{/if}
		</p> -->
        <p>
            Drag a component type from the left pane to this area to display your data.
        </p>
        <p>
            <!-- <HorizBarChart /> -->
            <!-- <VertBarChart /> -->
            <PieChart />
        </p>
        </div>

    </div>
    <div class="right-pane">
        <h2>Customize</h2>
        <ul>
            <li>
                <label for="font-size">Data Font Size:
                </label><br />
                    <input type="range" min="10" max="36" bind:value={theme[7]} />
            </li>
            <li class="separator"></li>
            <li>
                <label for="background-color">Background Color:
                </label>
                <br />
                <input type="color" bind:value={theme[1]} />
            </li>
            <li class="separator"></li>
            <li>
                <label for="text-color">Text Color:
                </label>
                <br />
                    <input type="color" bind:value={theme[2]} />
            </li>
            <li class="separator"></li>
        </ul>
    </div>
</div>

<style>
    .separator {
        border-bottom: 1px solid white;
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
    }
    .left-pane img {
        margin-left: auto;
        margin-right: auto;
        width: 75%;
        padding: 15%;
    }
    .left-pane li {
        border: 1px solid white;
        margin: 15px;
    }
    .center-pane {
        padding: 20px;
        background-color: #808080;
        display: flex;
        justify-content: center;

    }
    .center-pane div{
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
</style>