<script lang="ts">
	import type { Frame } from './state.svelte';
    import type { HTMLAttributes } from 'svelte/elements';
    import Theme from '../theme/+page.svelte'
	// import { Item } from '$lib/components/ui/accordion';
	

    type Props = HTMLAttributes<HTMLDivElement> & {
        frame: Frame
        item: Item
    }

    let {frame, ...props}: Props = $props<Props>();

    const card = frame.createCard(props.item);

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


    let cardStyle = $state();
    let bodyStyle = $state();
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
    function closeCard(e: MouseEvent) {
    let thisButton = e.currentTarget as HTMLElement;
    if (thisButton && thisButton.parentElement && thisButton.parentElement.parentElement && thisButton.parentElement.parentElement.parentElement){
        let thisParent = thisButton.parentElement.parentElement.parentElement.parentElement;
        if (thisParent){
            thisParent.removeAttribute('open');
        }
    }
}
</script>

<div {...props} class="absolute" bind:this={card.el} onpointerdown={card.onPointerDown} style="z-index: 1;">
    <div class="p-4 w-[350px] h-[350px]" style={cardStyle as string}>
            <h1 style="font-size: {Number(theme[9]) * 1.25 ?? 0}px; border-bottom: {theme[3]}px solid {theme[4]}; color: {theme[8]};" >{card.item.blockName} <button onclick={closeCard}>&#127335;</button> </h1>
        
            {#await loadComponent(card.item.component) then { default: DynamicComponent }}
                {#if DynamicComponent}
                    <svelte:component this={DynamicComponent} />
                {/if}
            {/await}
            <slot />
        </div>
        <button>Promote</button>
</div>  
<style>
    button {
        float: right;
        border: none;
        background-color: transparent;
        color: red;
    }
</style>

