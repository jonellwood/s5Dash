<script lang="ts">
	import { cn } from "$lib/utils";
	import { buttonVariants } from "./ui/button";
	// import GitHubIcon from "./icons/github.svelte";
	import GitHubIcon from "../components/icons/github.svelte";
	import BcLogo from "../../lib/images/BCLogo.png";
</script>

<header
	class="top-0 z-50 w-full border-b shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/60"
>
	<div class="container flex h-14 items-center">
		<div class="flex">
			<a
				href="/"
				class="mr-6 flex w-full items-center justify-between space-x-2 transition-colors ease-linear hover:text-primary/90"
			>
				<div>
					<img src={BcLogo} alt="bc logo" class="h-10 w-full object-contain" />
				</div>
				<div>
					<span class="text-[15px] font-semibold sm:inline-block lg:text-base"> Dashboard </span>
				</div>
			</a>
		</div>
		<div class="flex flex-1 items-center justify-center space-x-2 pr-4 sm:space-x-4">
			<nav class="flex items-center">
				<a href="/charts">Charts</a>
				<a href="/libDev">libDev</a>
				<a href="/jibjab">JibJab</a>
				<a href="/dnd">D&D</a>
				<a href="/generator">Generator</a>
				<a href="/gui">GUI</a>
				<a href="/theme">Theme</a>
				<a href="https://github.com/Berkeley-County" target="_blank">
					<div
						class={cn(
							buttonVariants({
								size: "sm",
								variant: "ghost"
							}),
							"w-9 px-0"
						)}
					>
						<GitHubIcon class="h-4 w-4" />
						<span class="sr-only">GitHub</span>
					</div>
				</a>
			</nav>
		</div>
	</div>
</header>

<style>
	a {
		padding-right: 10%;
		text-transform: uppercase;
	}
</style>
