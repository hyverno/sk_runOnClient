<script lang="ts">
import * as dt from '../services/data';
import AlertInfos from '../modules/components/infos/AlertInfos.svelte';
import NavBar from "../modules/components/bar/NavBar.svelte";
let arr: any[]
dt.arr.subscribe((e) => arr = e)
</script>

<NavBar />

<slot></slot>


{#if arr.length > 0} 
    {#each arr as item} 
        <AlertInfos message="{item}" type={"success"} />
    {/each}
{/if}
