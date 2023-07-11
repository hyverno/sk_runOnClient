<script lang="ts">
import { createElement } from '../services/template';
let item: {title:string,description:string,content:string} = {title: '', description: '', content: ''};
</script>

<div>
    <input type="text" bind:value={item.title} placeholder="title">
    <textarea bind:value={item.description} placeholder="description" cols="30" rows="10"></textarea>
    <input type="text" bind:value={item.content} placeholder="content">
    <button on:click={() => createElement(item.title, item.description, item.content)}>submit</button>
</div>

<style lang="scss">
div {
    background-color: #706e6d;
}
</style>