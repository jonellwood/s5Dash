<script lang="ts">
	import Theme from "../+page.svelte";
	let theme = $state<Theme[]>([]);
	let cardStyle = $state();

	$effect(() => {
		const savedTheme = localStorage.getItem("theme");
		savedTheme && (theme = JSON.parse(savedTheme));
		// console.log(savedTheme);
		// const savedDashItems = localStorage.getItem("dashItems");
		// savedDashItems && (dashItems = JSON.parse(savedDashItems));
		// console.log('Saved Dash Items:')
		// console.log(savedDashItems)
	});
	const {
		name = "",
		uuid = "",
		createdBy = "",
		dataSource = "",
		dataSourceUrl = "",
		displayType = ""
	} = $props();
	function loadComponent(component: string) {
		console.log("loading ", component);
		return import(`../../lib/components/customCardElements/${component}.svelte`);
	}
	$effect(() => {
		if (theme && typeof theme[7] === "number") {
			cardStyle = `
	        background-color: ${theme[1]};
            color: ${theme[2]};
            border: ${theme[3]}px solid ${theme[4]};
            box-shadow: ${theme[9]}px ${theme[9]}px ${theme[9]}px 1px ${theme[5]};
            font-size: ${theme[7]}px;
			width: 400px;
			height: 400px;
			overflow: scroll;
			padding: 4px;
            h2 {
                color: ${theme[8]};
				color: blue;
            }
	    `;
			// console.log(cardStyle);
		}
	});
</script>

<div style={cardStyle as string}>
	<h2 style="color: hotpink">{name}</h2>
	<!-- <p>{uuid}</p> 
			<p>{createdBy}</p>
			<p>{dataSource}</p>-->

	{#await loadComponent(displayType) then { default: DynamicComponent }}
		{#if DynamicComponent}
			<svelte:component this={DynamicComponent} {dataSourceUrl} />
		{/if}
	{/await}
	<slot />
</div>
