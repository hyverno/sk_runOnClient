<script lang="ts">
import { onMount } from 'svelte';
import axios from 'axios';
import { login } from '../services/auth';
import * as el from "../services/template";

import AddContent from '../modules/AddContent.svelte';
import {getAllTemplates} from "../services/template";

let items = {title: 'test', description: 'test'};

let password = ""
let identify= ""

//"64a9d8ab57f8330cae157aeb"\\

onMount(async () => {
    await el.getAllTemplates()
        .then((e) => {
            console.log(e)
            items = e[0]
        })
});
</script>



<h1>Eplore Your House</h1>
<h2>A powerful tool that allows you to have <span class="highlight">real time</span> renderings of your home, in an <span class="highlight">immersive</span> way!</h2>

{#each Object.entries(items) as [key, value]}
    <div>
        <p>
            {key}: {value}
        </p>
    </div>
{/each}

<input bind:value={identify} type="text"        placeholder="email or username" >
<input bind:value={password} type="password"    placeholder="password" >
<button on:click={() => login(identify, password)}>login</button>
<button on:click={() => localStorage.setItem('token', '')}>logout</button>

<AddContent />

<style lang="scss">

h1 {
    font-size: 3rem;
    font-weight: 700;
    text-align: center;
    margin-top: 2rem;
}

h2 {
    font-size: 1.5rem;
    font-weight: 400;
    text-align: center;
    margin-top: 1rem;
}

div {
    margin: auto;
}

</style>