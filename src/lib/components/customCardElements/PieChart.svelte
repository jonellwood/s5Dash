<script lang="ts">
	import Pie from "./Pie.svelte";
	// let dataSourceUrl: string = $state("");
	export let dataSourceUrl: string = "";
</script>

<p>{dataSourceUrl}</p>
<div class="pie">
	<Pie />
</div>

<style>
	.pie {
		display: flex;
		width: 100%;
		justify-content: center;
		margin-top: 4%;
		margin-bottom: 4%;
	}
</style>
