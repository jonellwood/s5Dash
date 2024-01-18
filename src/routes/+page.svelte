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
    import { handleCheckboxChange } from '$lib/utils';
    import Theme from '../routes/theme/+page.svelte'
    let checked = $state(false);
    
    
    type DashItem = [
        {
            propValue: string,
            blockName: string,
            component: string,
            id: number,
            x: number,
            y: number,
            w: number,
            h: number,
            data: {
                text: string
                description: string,
            },
            uniqueName: string,
            dataSource: string,
            dataOptions: string,
            createdBy: string
        }
    ]
    let dashItems = $state<DashItem[]>([]);
    
    // save for now
    // $effect(() => {
    //     const savedDashItems = localStorage.getItem('dashItems');
    //     savedDashItems && (dashItems = JSON.parse(savedDashItems));
    //     console.log(savedDashItems);
    // })
    $effect(() => {
        const savedDashItems = localStorage.getItem('dashItems');
        if(!savedDashItems){
            import('$lib/data/cards.js').then((data) => {
                let dashItems: DashItem[] = data.Items;
                localStorage.setItem('dashItems', JSON.stringify(data.Items));
            });

        } else {
            dashItems = JSON.parse(savedDashItems);
        }
        // console.log(savedDashItems);
    })



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
		// console.log(cardStyle);
	});

    $effect(() => {
        bodyStyle = `
        background-color: ${theme[6]};`
    })

    function loadComponent(component: string) {
		// console.log('loading ', component);
		return import(`../lib/components/cardComponents/${component}.svelte`);
	}
</script>

<!-- <Collapsible.Root bind:open={collapsibleOpen} class="absolute right-10 top-20">
    <button onclick={() => collapsibleOpen = !collapsibleOpen}>Toggle Available Data Modules</button>
    <Collapsible.Content class="item-check-list">
        <ul> -->
            <!-- This (below) is using the import from cards.js.  -->
             <!-- {#each Items as item} -->
             <!-- This (below) is loading from localStorage if it exists, otherwise it creates it from cards.js -->
            <!-- {#each dashItems as item, i} -->
            <!-- {console.log(item.blockName)}  -->
            <!-- <li>
                <label for="{item.id}">
                <input type="checkbox" checked name="{item.blockName}" />
                {item.blockName} - {checked}
                {#if !checked}
                    🚫
                {:else}
                    💡
                {/if}
                </label>
            </li> -->
            <!-- LEAVE COMMENTED OUT <li>
                <Label.Root>
                    <Checkbox.Root bind:checked/>
                        {item.blockName} - {checked}
                    </Label.Root>
            </li>  -->
            <!-- {/each} -->
        <!-- </ul> -->
    <!-- </Collapsible.Content> -->
<!-- </Collapsible.Root> -->

<div class="grid grid-cols-3 w-[75%] gap-4 p-4 m-4" style={bodyStyle as string}>
    <!-- {#each Items as item} -->
    {#each dashItems as item}
        <div class="p-4 w-[350px] h-[350px]" style={cardStyle as string}>
            <h1 style="font-size: {Number(theme[9]) * 1.25 ?? 0}px; border-bottom: {theme[3]}px solid {theme[4]}; color: {theme[8]};">{item.blockName}</h1>
            <!-- <p style="font-size: {Number(theme[7])}px;">
                {item.data.description}
            </p> -->
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
    .item-check-list ul li{
        /* background-color: hotpink !important; */
        background-color: #808080;
        /* border: 1px solid #000; */
        padding: 1px;
        /* margin: 10px; */
        /* width: 200px; */
        /* height: 200px; */
        /* overflow: scroll; */
    }
</style>