<script lang="ts">
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
</script>

<div>
	<h1>{name}</h1>
	<p>{uuid}</p>
	<p>{createdBy}</p>
	<p>{dataSource}</p>

	{#await loadComponent(displayType) then { default: DynamicComponent }}
		{#if DynamicComponent}
			<svelte:component this={DynamicComponent} {dataSourceUrl} />
		{/if}
	{/await}
	<slot />
</div>
