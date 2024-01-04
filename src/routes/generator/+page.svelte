<script lang="ts">
    let cardStyle = $state();
    let bodyStyle = $state();
    import Theme from "../+page.svelte";
    import {Items} from '../../lib/data/widgetList.js';
    import {Websites} from '../../lib/data/websitesList.js'
    let theme = $state<Theme[]>([]);
    let blockName = $state('');
    let uniqueName = $state('');
    let dataSource = $state('');
    let dataOptions = $state('');
    let fuelType = $state('');


	$effect(() => {
		const savedTheme = localStorage.getItem('theme');
		savedTheme && (theme = JSON.parse(savedTheme));
		// console.log(savedTheme);
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
    function createUUID(){
        var dt = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
          var r = (dt + Math.random()*16)%16 | 0;
          dt = Math.floor(dt/16);
          return (c=='x' ? r :(r&0x3|0x8)).toString(16);
        });
        return uuid;
    }
    function updateUniqueName(){
        uniqueName = blockName + '-' + createUUID();
    }
</script>
<div class="p-4 m-4 grid grid-cols-2 justify-items-center">
    <div class="left">
        <div class="p-4 w-[300px] h-[300px]" style={cardStyle as string}>
            {#if blockName === ""}
            <h1 style="font-size: {Number(theme[9]) * 1.25 ?? 0}px; border-bottom: {theme[3]}px solid {theme[4]}; color: {theme[8]};">Component Name</h1>
            {:else}
            <h2 style="font-size: {Number(theme[9]) * 1.25 ?? 0}px; border-bottom: {theme[3]}px solid {theme[4]}; color: {theme[8]};;">{blockName}</h2> 
            {/if}
            <p style="font-size: {Number(theme[9])}px;">
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
		</p>
        </div>
        <p>Unique ID: {uniqueName}</p>
    </div>
    
    <div class="w-[45%] p-5 form-holder">
    <form method="POST">
        <label for="name">Component Name</label>
        <input 
            type="text" 
            name="name" 
            id="name" 
            placeholder="Component Name" 
            bind:value={blockName}
            onchange={updateUniqueName}
            required>
            <br>
        <label for="dataSource">Data Source</label>
        <select id="dataSource" name="dataSource" bind:value={dataSource} onchange={() => ({ dataOptions } = '')}>
            {#each Items as item}
                <option value={item.blockName}>{item.blockName}</option>
            {/each}
        </select>
        <br>
        <label for="dataOptions">Data Options</label>
        {#if dataSource === '3CX Calls'}
			<select id="dataOptions" name="dataOptions" bind:value={dataOptions}>
				<!-- <option value="" selected disabled>Select Option</option> -->
				<option value="todaysCalls">Today's Calls</option>
				<option value="yesterdaysCalls">Yesterday's Calls</option>
				<option value="weekCalls">This Week's Calls</option>
				<option value="monthCalls">This Month's Calls</option>
			</select>
		{:else if dataSource === 'Fleet Tickets'}
			<select id="dataOptions" name="dataOptions" bind:value={dataOptions}>
				<!-- <option value="" selected disabled>Select Option</option> -->
				<option value="todaysTickets">Today's Tickets</option>
				<option value="yesterdaysTickets">Yesterday's Tickets</option>
				<option value="weekTickets">This Week's Tickets</option>
				<option value="monthTickets">This Month's Tickets</option>
			</select>
		{:else if dataSource === 'Fleet Fuel'}
			<select id="dataOptions" name="dataOptions" bind:value={dataOptions}>
				<!-- <option value="" selected disabled>Select Option</option> -->
				<option value="todaysFuel">Today's Fuel</option>
				<option value="yesterdaysFuel">Yesterday's Fuel</option>
				<option value="weekFuel">This Week's Fuel</option>
				<option value="monthFuel">This Month's Fuel</option>
			</select>

			<p>
				<label for="fuelType">Select Fuel Types</label>
				<input id="all" type="radio" name="fuelType" value="all" bind:group={fuelType} checked />All
				<input
					id="Diesel"
					type="radio"
					name="fuelType"
					value="Diesel"
					bind:group={fuelType}
				/>Diesel
				<input
					id="Unleaded"
					type="radio"
					name="fuelType"
					value="Unleaded"
					bind:group={fuelType}
				/>Unleaded
			</p>
		{:else if dataSource === 'Website Status'}
			<select id="dataOptions" name="dataOptions" bind:value={dataOptions}>
				<!-- <option value="" selected disabled>Select Option</option> -->
				<option value="allWebsites">All Websites</option>
				{#each Websites as website}
					<option value={website.name}>{website.name}</option>
				{/each}
			</select>
		{:else if dataSource === 'Weather Component'}
			<select id="dataOptions" name="dataOptions" bind:value={dataOptions}>
				<!-- <option value="" selected disabled>Select Option</option> -->
				<option value="currentWeather">Current Weather</option>
				<option value="forecastWeather">Weekly Forecast</option>
			</select>
		{:else if dataSource === 'eCats'}
			<select id="dataOptions" name="dataOptions" bind:value={dataOptions}>
				<!-- <option value="" selected disabled>Select Option</option> -->
				<option value="yesterday">Yesterdays Report</option>
				<option value="weekToDate">Week to Date Report</option>
				<option value="lastWeek">Last Weeks Report</option>
			</select>
		{:else if dataSource === 'County Store'}
			<select id="dataOptions" name="dataOptions" bind:value={dataOptions}>
				<!-- <option value="" selected disabled>Select Option</option> -->
				<option value="pendingRequests">Pending Requests</option>
				<option value="YTDSpending">YTD Spending</option>
				<option value="lastWeeksReport">Last Weeks Report</option>
			</select>
		{/if}
    </form>
    
    </div>

</div>

<style>
    .form-holder{
        background-color: #00000030;
        
    }
</style>