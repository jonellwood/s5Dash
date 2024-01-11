<script lang="ts">
   
import Pie from './Pie.svelte';
let percent = $state(40);
let size = $state(200);
</script>

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
