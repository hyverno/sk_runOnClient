<script lang="ts">
import { onMount } from 'svelte';
import SettingsPanel from "../../modules/components/bar/SettingsPanel.svelte";
import OutlinePanel from "../../modules/components/bar/OutlinePanel.svelte";
// import { init } from "../../engine/render";
import {browser} from "$app/environment";

onMount(async () => {
    const target = document.getElementById('viewport') as HTMLCanvasElement;
    if (target && browser) {
        const rend = await import("../../engine/render")
        rend.init(target)
        console.log('init')
    } else {
        console.error('no target find')
    }
})
</script>

<SettingsPanel />
<canvas id="viewport"></canvas>
<OutlinePanel />

<style lang="scss">


#viewport {
    width: 100vw;
    height: 100vh;
    background: rgb(0, 0, 0);
    display: block;
    margin: 0;
    padding: 0;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
}

</style>
