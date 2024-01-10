<script lang="ts">
    import type {HTMLAttributes} from 'svelte/elements';
    import {Frame} from './state.svelte';
    import Card from './Card.svelte';
    let { } = $props<HTMLAttributes<HTMLDivElement>>();
    
    const frame = new Frame()
    

    let cardStyle = $state();
    let bodyStyle = $state();
    import Theme from '../theme/+page.svelte'
	import * as Accordion from '$lib/components/ui/accordion';

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
		return import(`../../lib/components/cardComponents/${component}.svelte`);
	}

    function autoSort(){
        console.log('autoSort');
        var absItems = Array.from(document.getElementsByClassName('absolute'));
        console.log('abs Length: ' , absItems.length);
        for (var i = 0; i < absItems.length; i++) {
            console.log('abs i ' , i);
            if (absItems[i]){
                (absItems[i] as Element).classList.remove('absolute');
                (absItems[i] as Element).classList.add('phooey');
            }
        }
    }
    function makeAbsolute(){
        console.log('makeAbsolute');
        var phooeyItems = Array.from(document.getElementsByClassName('phooey'));
        console.log(phooeyItems.length);
        for (var i = 0; i < phooeyItems.length; i++) {
            if (phooeyItems[i]){
                (phooeyItems[i] as Element).classList.remove('phooey');
                (phooeyItems[i] as Element).classList.add('absolute');
            }
        }
    }

//     function autoSort() {
//     var absItems = Array.from(document.getElementsByClassName('absolute'));

//     // Store initial positions
//     var initialPositions = [];
//     for (var i = 0; i < absItems.length; i++) {
//         initialPositions.push({
//             element: absItems[i],
//             top: absItems[i].style.top,
//             left: absItems[i].style.left
//         });
//     }

//     // Remove 'absolute' class
//     for (var i = 0; i < absItems.length; i++) {
//         absItems[i].classList.remove('absolute');
//     }

//     // Restore initial positions and add 'absolute' class
//     for (var i = 0; i < initialPositions.length; i++) {
//         var item = initialPositions[i];
//         if (item){
//             (item.element as Element).style.top = item.top;
//             (item.element as Element).style.left = item.left;
//             (item.element as Element).classList.add('absolute');
//         }
//     }
// }

let counter = $state(0);

</script>
<div class="sort-buttons">
    <button on:click={autoSort}>Sort</button>
    <button on:click={makeAbsolute}>Un Sort</button>
</div>
<!-- <div class="grid grid-cols-3 w-[75%] h-dvh gap-4 p-4 m-4" style={bodyStyle as string} bind:this={frame.frameEl} onpointerup={frame.onPointerUp} onpointermove={frame.onPointerMove}>
    {#each dashItems as item}
    <Card {frame} {item}/>
    {/each}
</div> -->


<div>
    <div class="grid grid-cols-5 w-[95%] h-dvh gap-4 p-4 m-4" style={bodyStyle as string} bind:this={frame.frameEl} onpointerup={frame.onPointerUp} onpointermove={frame.onPointerMove}>
        {#each dashItems as item}
            <details>
                    <summary>{item.blockName}</summary>
                    <Card {frame} {item} />   
            </details>
        {/each}
        </div>
        <hr>
</div>
  


<!-- <div class="grid grid-cols-3 w-[75%] gap-4 p-4 m-4" style={bodyStyle as string}>
    {#each dashItems as item}
        <div class="p-4 w-[350px] h-[350px]" style={cardStyle as string}>
            <h1 style="font-size: {Number(theme[9]) * 1.25 ?? 0}px; border-bottom: {theme[3]}px solid {theme[4]}; color: {theme[8]};">{item.blockName}</h1>
        
            {#await loadComponent(item.component) then { default: DynamicComponent }}
                {#if DynamicComponent}
                    <svelte:component this={DynamicComponent} />
                {/if}
            {/await}
            <slot />
        </div>
    {/each}
</div> -->


<style>
    .wtf{
        color: red;
    }
    .item-check-list ul li{
        background-color: #808080;
        padding: 1px;
    }
    .sort-buttons{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin-right: 5%;
        gap: 5px;
        margin-top: 5px;
    }
    button{
        border: 1px solid black;
        padding: 2px;
        position: relative;
        z-index: 3;
        background-color: #80808050;
    }
    .grid{
        height: 100dvh;
        height: fit-content;
    }
    details {
    border: 1px solid #aaa;
    border-radius: 4px;
    padding: 0.5em 0.5em 0;
    }

    summary {
    font-weight: bold;
    margin: -0.5em -0.5em 0;
    padding: 0.5em;
    }

    /* details[open] {
    padding: 0.5em;
    } */

    details[open] summary {
    background-color: #80808050;
    }
</style>