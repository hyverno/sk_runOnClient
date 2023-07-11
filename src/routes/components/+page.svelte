<script>
    // import { onMount } from 'svelte';
    import SettingsPanel from "../../modules/components/bar/SettingsPanel.svelte";
    // onMount(() => {
    //     const darkMode = document.querySelector('#input');
    //     let value = false
    //     document.body.style.transition = 'background-color 0.5s ease-in-out';
    //     darkMode?.addEventListener('click', () => {
    //         console.log(value)
    //
    //         if (value) {
    //             document.body.style.backgroundColor = '#141414';
    //             value = false;
    //         }
    //         else if (!value) {
    //             document.body.style.backgroundColor = '#BEBEBE';
    //             value = true;
    //         }
    //     });
    // })
</script>






<SettingsPanel />










<!--<label class="switch">-->
<!--    <input type="checkbox" id="input">-->
<!--    -->
<!--    <span class="slider"></span>-->
<!--</label>-->


<!--<div>-->
<!--    <div class="color"></div>-->
<!--    <div class="color"></div>-->
<!--    <div class="color"></div>-->
<!--</div> -->
<!--<div>-->
<!--    <div class="color1"></div>-->
<!--    <div class="color1"></div>-->
<!--    <div class="color1"></div>-->
<!--</div> -->




<!--<style lang="scss">-->
<!--    div  {-->
<!--        display: flex;-->
<!--    }-->
<!--    .color {-->
<!--        width: 100px;-->
<!--        height: 100px;-->
<!--        &:nth-child(1) {-->
<!--            background-color: #373737;-->
<!--        }-->
<!--        &:nth-child(2) {-->
<!--            background-color: #98fb56;-->
<!--        }-->
<!--        &:nth-child(3) {-->
<!--            background-color: #95A3A6;-->
<!--        }-->
<!--    }-->
<!--    .color1 {-->
<!--        width: 100px;-->
<!--        height: 100px;-->
<!--        &:nth-child(1) {-->
<!--            background-color: #242424;-->
<!--        }-->
<!--        &:nth-child(2) {-->
<!--            background-color: #90cf3d;-->
<!--        }-->
<!--        &:nth-child(3) {-->
<!--            background-color: #79888b;-->
<!--        }-->
<!--    }-->
<!--    -->
<!--    -->
<!--    -->
<!--    -->
<!--    -->
<!--    -->
<!--    -->
<!--    -->
<!--    -->
<!--    -->
<!--    -->
<!--    -->
<!--    -->
<!--    -->
<!--    /* The switch - the box around the slider */-->
<!--    .switch {-->
<!--        position: relative;-->
<!--        display: inline-block;-->
<!--        width: 60px;-->
<!--        height: 34px;-->
<!--    }-->
<!--    -->
<!--    /* Hide default HTML checkbox */-->
<!--    .switch input {-->
<!--        opacity: 0;-->
<!--        width: 0;-->
<!--        height: 0;-->
<!--    }-->
<!--    -->
<!--    /* The slider */-->
<!--    .slider {-->
<!--        position: absolute;-->
<!--        cursor: pointer;-->
<!--        top: 0;-->
<!--        left: 0;-->
<!--        right: 0;-->
<!--        bottom: 0;-->
<!--        background-color: #ccc;-->
<!--        -webkit-transition: .4s;-->
<!--        transition: .4s;-->
<!--    }-->
<!--    -->
<!--    .slider:before {-->
<!--        position: absolute;-->
<!--        content: "";-->
<!--        height: 26px;-->
<!--        width: 26px;-->
<!--        left: 4px;-->
<!--        bottom: 4px;-->
<!--        background-color: white;-->
<!--        -webkit-transition: .4s;-->
<!--        transition: .4s;-->
<!--    }-->
<!--    -->
<!--    input:checked + .slider {-->
<!--        background-color: #2196F3;-->
<!--    }-->
<!--    -->
<!--    input:focus + .slider {-->
<!--        box-shadow: 0 0 1px #2196F3;-->
<!--    }-->
<!--    -->
<!--    input:checked + .slider:before {-->
<!--        -webkit-transform: translateX(26px);-->
<!--        -ms-transform: translateX(26px);-->
<!--        transform: translateX(26px);-->
<!--    }-->
<!--</style>-->