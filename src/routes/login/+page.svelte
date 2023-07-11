<script lang="ts">
import { login } from '../../services/auth';
let toggle = false;
let password: string = "";
let identify: string = "";
</script>

<form action="">
    <input bind:value={identify} type="text"        placeholder="email or username" >
    <input bind:value={password} type="password"    placeholder="password" >
    <button on:click={() => login(identify, password)}>login</button>
    <a href="/register">
        je n'ai pas encore de compte
    </a>
</form>


<style lang="scss"></style>