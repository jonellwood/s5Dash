<script lang="ts">
	import CustomComponent from "./CustomComponent.svelte";
	import data from "../../lib/data/devComponentData.json";
	console.log(data);
	let DynamicComponent: any;
	function loadComponent(component: string) {
		// console.log('loading ', component);
		return import(`../lib/components/customCardComponents/${component}.svelte`);
	}
	import Theme from "../+page.svelte";
	let theme = $state<Theme[]>([]);
	let cardStyle = $state();
	let bodyStyle = $state();
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

{#each data as component}
	<div class="asshat">
		<CustomComponent
			name={component.name}
			uuid={component.uuid}
			createdBy={component.createdBy}
			dataSource={component.dataSource}
			dataSourceUrl={component.dataSourceUrl}
			displayType={component.displayType}
		/>
		<!-- <slot /> -->
	</div>
{/each}

<style>
	.asshat {
		margin: 1rem;
		padding: 1rem;
		border: 1px solid #ccc;
	}
</style>
