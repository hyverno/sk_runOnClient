<script lang="ts">
    import { register } from '../../services/auth';
    let toggle = false;
    let password: string = "";
    let username: string = "";
    let email: string = "";
</script>
<form action="">
    <input bind:value={email} type="text"        placeholder="email" >
    <input bind:value={username} type="text"        placeholder="username" >
    <input bind:value={password} type="password"    placeholder="password" >
    <button on:click={() => register(username, password, email)}>register</button>
    <a href="/login">
        j'ai deja un compte
    </a>
</form>