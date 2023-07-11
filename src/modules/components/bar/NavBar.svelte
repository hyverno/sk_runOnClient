<script lang="ts">

</script>


<!--create nav bar with sveltekit-->

<nav>
    <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">about</a></li>
        <li><a href="/explore">explore</a></li>
        <li><a href="/editor">editor</a></li>
    </ul>
</nav>


<style lang="scss">
    nav {
        ul {
            display: flex;
            justify-content: center;
            align-items: center;
            list-style: none;
            padding: 0 2rem;
            background-color: #f1f1f1;
            height: 3rem;
            li {
              width: 100px;
                a {
                    text-decoration: none;
                    color: #333;
                    font-weight: bold;
                    &:hover {
                        color: #666;
                    }
                }
            }
        }
    }
</style>