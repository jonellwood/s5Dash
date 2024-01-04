<script lang="ts">
	import '../app.pcss';
	import { dev } from "$app/environment"
	let { children } = $props();
	import SiteHeader  from "../lib/components/site-header.svelte";
	import TWIndicator  from '../lib/components/tw-indicator.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	let cardStyle = $state();
    let bodyStyle = $state();
    type Theme = [
		{
			name: string;
			cardBgColor: string;
			mainTextColor: string;
			borderWidth: string;
			borderColor: string;
			shadowColor: string;
			bodyBgColor: string;
			fontSizeBase: string;
			headlineTextColor: string;
			shadowLength: string;
		}
	];
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
</script>
<div class="app" style={bodyStyle}>
<!-- <Navbar /> -->
<SiteHeader />
<slot />


{#if dev}
	<TWIndicator />
{/if}
</div>
