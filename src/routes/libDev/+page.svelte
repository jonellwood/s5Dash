<script lang="ts">
	import CustomComponent from "./CustomComponent.svelte";
	import data from "../../lib/data/devComponentData.json";
	console.log(data);
	let DynamicComponent: any;
	function loadComponent(component: string) {
		// console.log('loading ', component);
		return import(`../lib/components/customCardComponents/${component}.svelte`);
	}
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
