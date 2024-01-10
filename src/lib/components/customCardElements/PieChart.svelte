<script lang="ts">
   
import Pie from './Pie.svelte';
let percent = $state(40);
let size = $state(200);
</script>


<!-- <Pie size={size} percent={percent} /> -->
<Pie />

