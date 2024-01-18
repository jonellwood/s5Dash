<script lang="ts">
	import CustomComponent from "./CustomComponent.svelte";
	import data from "../../lib/data/devComponentData.json";
	// console.log(data);
	let DynamicComponent: any;
	function loadComponent(component: string) {
		// console.log('loading ', component);
		return import(`../lib/components/customCardComponents/${component}.svelte`);
	}
	import Theme from "../+page.svelte";
	let theme = $state<Theme[]>([]);
	// let cardStyle = $state();
	let bodyStyle = $state();
	$effect(() => {
		const savedTheme = localStorage.getItem("theme");
		savedTheme && (theme = JSON.parse(savedTheme));
		// console.log(savedTheme);
		// const savedDashItems = localStorage.getItem("dashItems");
		// savedDashItems && (dashItems = JSON.parse(savedDashItems));
		// console.log('Saved Dash Items:')
		// console.log(savedDashItems)
	});

	// $effect(() => {
	// 	cardStyle = `
	//         background-color: ${theme[1]};
	//         color: ${theme[2]};
	//         border: ${theme[3]}px solid ${theme[4]};
	//         box-shadow: ${theme[9]}px ${theme[9]}px ${theme[9]}px 1px ${theme[5]};
	//         font-size: ${theme[7]}px;
	//         h2 {
	//             color: ${theme[8]};
	//         }
	//     `;
	// 	console.log(cardStyle);
	// });

	$effect(() => {
		bodyStyle = `
        background-color: ${theme[6]};
		background-position: center center;
		background-size: cover;
		background-attachment: fixed;
		height: 100dvh;
		padding: 20px;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
		gap: 20px;
		`;
	});
</script>

<!-- This the div that holds all the cards. Lets call him Johnny Cash -->
<div style={bodyStyle as string}>
	<!-- This is the card. Lets call him Johnny Cash Jr. (JCJ) He has his own div element and styling in the component file -->
	{#each data as component}
		<CustomComponent
			name={component.name}
			uuid={component.uuid}
			createdBy={component.createdBy}
			dataSource={component.dataSource}
			dataSourceUrl={component.dataSourceUrl}
			displayType={component.displayType}
		/>
		<!-- <slot /> -->
	{/each}
</div>
