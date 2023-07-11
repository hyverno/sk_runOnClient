<script lang="js">

import {onMount} from "svelte";
import * as el from "../../services/template";

let items = []

onMount(async () => {
    await el.getAllTemplates()
        .then((e) => {
            console.log(e)
            items = e
        })
});


</script>

<section>
    {#each items as item}
        <div class="card">
            <div class="img">
                <span on:click={() => alert('est')}>{item.author_id}</span>
                <span>{new Date(item.edit_date).getDate() + '/' + new Date(item.edit_date).getMonth() + '/' + new Date(item.edit_date).getFullYear()}</span>
            </div>
            <div class="body">
                <div class="_pp"></div>
                <div class="txt">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                </div>
            </div>
        </div>
    {/each}
</section>


<style lang="scss">

    section {
        width: 100%;
        padding: 1rem 5%;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 20px;
    }

    .img {
        width: 100%;
        height: 200px;
        background-color: #696767;
        position: relative;
        border-radius: 20px 20px 0 20px;

        span {
            background-color: #ededed;
            position: absolute;
            bottom: 0;
            padding: 0.5rem 1rem;
            border-radius: 50px;
            margin: 1rem;

            &:last-child {
                right: 0;
            }
        }
    }

    .card {
      width: 500px;
      color: #242424;

      .body {
        padding: 1rem;
        background-color: #ededed;
        width: 90%;
        margin-left: auto;
        position: relative;
        min-height: 100px;
        .txt {
          margin-left: 40px;
          p {
            overflow: hidden;
            font-size: 0.9rem;
            line-height: 1rem;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }
          h4 {
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
          }
        }
      }
      ._pp {
        position: absolute;
        width: 80px;
        height: 80px;
        background-color: #696767;
        border-radius: 20px;
        margin: -7px calc(-1rem + -40px);
      }
    }

</style>