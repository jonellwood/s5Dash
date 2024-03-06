<script>
	// import Arc from "../../lib/components/chartComponents/Arc.svelte";
	// import { Svg, Axis, Bars, Highlight, Tooltip, TooltipItem } from "layerchart";
	// import Chart from "../../lib/components/chartComponents/Chart.svelte";
	// import Group from "../../lib/components/chartComponents/Group.svelte";
	// import TooltipContext from "../../lib/components/chartComponents/TooltipContext.svelte";
	// import { SpringValue, cls } from "svelte-ux";
	// let value = 75;
	// let segments = 60;
</script>

<h1>Charts</h1>
<!-- 
<div class="h-[240px] rounded border bg-neutral-900 p-4">
	<Chart>
		<Svg>
			<Group center>
				{#each { length: segments } as _, segmentIndex}
					{@const segmentAngle = (2 * Math.PI) / segments}
					{@const startAngle = segmentIndex * segmentAngle}
					{@const endAngle = (segmentIndex + 1) * segmentAngle}
					<SpringValue {value} let:value>
						<Arc
							{startAngle}
							{endAngle}
							innerRadius={-20}
							cornerRadius={4}
							padAngle={0.02}
							class={cls(
								(segmentIndex / segments) * 100 < value ? "fill-emerald-300" : "fill-gray-700"
							)}
						>
							<Text
								value={Math.round(value)}
								textAnchor="middle"
								verticalAnchor="middle"
								dy={16}
								class="fill-white text-6xl tabular-nums"
							/>
						</Arc>
					</SpringValue>
				{/each}
			</Group>
		</Svg>
	</Chart>
</div> -->
