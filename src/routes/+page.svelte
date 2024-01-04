<script lang="ts">
	// import * as Card from '$lib/components/ui/card/';
    import * as Collapsible from '$lib/components/ui/collapsible/';
    import * as Checkbox from '$lib/components/ui/checkbox/';
    import * as Label from '$lib/components/ui/label/';
    import { Items } from '$lib/data/cards.js';
    let collapsibleOpen = $state(false);
    let cardStyle = $state();
    let bodyStyle = $state();
    let component: any;
    import Theme from '../routes/theme/+page.svelte'
  
    let theme = $state<Theme[]>([]);

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
		console.log(cardStyle);
	});

    $effect(() => {
        bodyStyle = `
        background-color: ${theme[6]};`
    })

    function loadComponent(component: string) {
		console.log('loading ', component);
		return import(`../lib/components/cardComponents/${component}.svelte`);
	}
</script>

<Collapsible.Root bind:open={collapsibleOpen} class="absolute right-10 top-20">
    <button onclick={() => collapsibleOpen = !collapsibleOpen}>Toggle Available Data Modules</button>
    <Collapsible.Content>
        <ul>
            {#each Items as item}
            <li>
                <Label.Root>
                    <Checkbox.Root />
                        {item.blockName}
                    </Label.Root>
            </li>
            {/each}
        </ul>
    </Collapsible.Content>
</Collapsible.Root>

<div class="grid grid-cols-3 w-[75%] gap-4 p-4 m-4" style={bodyStyle as string}>
    {#each Items as item}
        <div class="p-4 w-[300px] h-[300px]" style={cardStyle as string}>
            <h1 style="font-size: {Number(theme[9]) * 1.25 ?? 0}px; border-bottom: {theme[3]}px solid {theme[4]}; color: {theme[8]};">{item.blockName}</h1>
            <p style="font-size: {Number(theme[7])}px;">
                {item.data.description}
            </p>
            {#await loadComponent(item.component) then { default: DynamicComponent }}
                {#if DynamicComponent}
                    <svelte:component this={DynamicComponent} />
                {/if}
            {/await}
            <slot />
        </div>
    {/each}
</div>
<style>
    .wtf{
        color: red;
    }
</style>