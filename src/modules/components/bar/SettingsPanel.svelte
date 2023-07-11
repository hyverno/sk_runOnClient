<script lang="ts">

    import {CreateObject, ImportObject, ObjectType, SupportFormatType} from "../../../engine/createObject";

    let pathFile = ""
    const fileImport = async(e) => {
        // get element called fileImport
        const result = e.target.files?.item(0) as File
        const readable = await result.text()
        const blob = new Blob([readable], {type: 'application/json'});
        const url = URL.createObjectURL(blob)
        console.log(url)
        pathFile = url
    }

    let state = {
        panel: false,
        panel_view: e_LastSelected
    }
    state.panel_view = e_LastSelected.none

    enum e_LastSelected{
        none,
        shape,
        gizmo,
        import
    }

    let lastSelected: e_LastSelected = e_LastSelected.none

    function toggleSlideBar(e: e_LastSelected){
        if(lastSelected === e){
            state.panel = !state.panel
        }else{
            state.panel = true
            state.panel_view = e
        }
        lastSelected = e
    }

</script>

<div class="settings">
    <div class="slide_bar">
        <button on:click={()=>toggleSlideBar(e_LastSelected.shape)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bounding-box-circles" viewBox="0 0 16 16">
                <path d="M2 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM0 2a2 2 0 0 1 3.937-.5h8.126A2 2 0 1 1 14.5 3.937v8.126a2 2 0 1 1-2.437 2.437H3.937A2 2 0 1 1 1.5 12.063V3.937A2 2 0 0 1 0 2zm2.5 1.937v8.126c.703.18 1.256.734 1.437 1.437h8.126a2.004 2.004 0 0 1 1.437-1.437V3.937A2.004 2.004 0 0 1 12.063 2.5H3.937A2.004 2.004 0 0 1 2.5 3.937zM14 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM2 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm12 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
            </svg>
        </button>
        <button on:click={()=>toggleSlideBar(e_LastSelected.import)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-folder-symlink" viewBox="0 0 16 16">
                <path d="m11.798 8.271-3.182 1.97c-.27.166-.616-.036-.616-.372V9.1s-2.571-.3-4 2.4c.571-4.8 3.143-4.8 4-4.8v-.769c0-.336.346-.538.616-.371l3.182 1.969c.27.166.27.576 0 .742z"/>
                <path d="m.5 3 .04.87a1.99 1.99 0 0 0-.342 1.311l.637 7A2 2 0 0 0 2.826 14h10.348a2 2 0 0 0 1.991-1.819l.637-7A2 2 0 0 0 13.81 3H9.828a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 6.172 1H2.5a2 2 0 0 0-2 2zm.694 2.09A1 1 0 0 1 2.19 4h11.62a1 1 0 0 1 .996 1.09l-.636 7a1 1 0 0 1-.996.91H2.826a1 1 0 0 1-.995-.91l-.637-7zM6.172 2a1 1 0 0 1 .707.293L7.586 3H2.19c-.24 0-.47.042-.683.12L1.5 2.98a1 1 0 0 1 1-.98h3.672z"/>
            </svg>
        </button>
        <button>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-in-up" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 3.5a.5.5 0 0 1 .5.5v8.793l2.146-2.147a.5.5 0 1 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 12.293V4a.5.5 0 0 1 .5-.5z"/>
                <path fill-rule="evenodd" d="M2.5 2a.5.5 0 0 1 .5.5v9.793l3-3a.5.5 0 0 1 .708.708L3.707 13.5a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L2 12.793V2.5a.5.5 0 0 1 .5-.5z"/>
            </svg>
        </button>
    </div>
    {#if state.panel}
        <div class="panel">
            {#if state.panel_view === e_LastSelected.shape}
                <h4>Select Geometry</h4>
                <div class="grid">
                    <button class="icon" on:click={() => new CreateObject("new sphere", ObjectType.Sphere, 1)}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path class="stroke" d="M1 10C1 11.657 5.03 13 10 13C14.97 13 19 11.657 19 10" stroke="#F8F8F8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path class="stroke" d="M1 10C1 11.1819 1.23279 12.3522 1.68508 13.4442C2.13738 14.5361 2.80031 15.5282 3.63604 16.364C4.47177 17.1997 5.46392 17.8626 6.55585 18.3149C7.64778 18.7672 8.8181 19 10 19C11.1819 19 12.3522 18.7672 13.4442 18.3149C14.5361 17.8626 15.5282 17.1997 16.364 16.364C17.1997 15.5282 17.8626 14.5361 18.3149 13.4442C18.7672 12.3522 19 11.1819 19 10C19 8.8181 18.7672 7.64778 18.3149 6.55585C17.8626 5.46392 17.1997 4.47177 16.364 3.63604C15.5282 2.80031 14.5361 2.13738 13.4442 1.68508C12.3522 1.23279 11.1819 1 10 1C8.8181 1 7.64778 1.23279 6.55585 1.68508C5.46392 2.13738 4.47177 2.80031 3.63604 3.63604C2.80031 4.47177 2.13738 5.46392 1.68508 6.55585C1.23279 7.64778 1 8.8181 1 10Z" stroke="#F8F8F8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                    <button class="icon" on:click={() => new CreateObject("new cube", ObjectType.Cube, 1)}>
                        <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path class="fill" d="M18 14.5C18 14.88 17.79 15.21 17.47 15.38L9.57 19.82C9.41 19.94 9.21 20 9 20C8.79 20 8.59 19.94 8.43 19.82L0.530004 15.38C0.369683 15.2958 0.235516 15.1692 0.142077 15.014C0.048638 14.8589 -0.00049917 14.6811 3.82324e-06 14.5V5.5C3.82324e-06 5.12 0.210004 4.79 0.530004 4.62L8.43 0.18C8.59 0.0600001 8.79 0 9 0C9.21 0 9.41 0.0600001 9.57 0.18L17.47 4.62C17.79 4.79 18 5.12 18 5.5V14.5ZM9 2.15L3.04 5.5L9 8.85L14.96 5.5L9 2.15ZM2 13.91L8 17.29V10.58L2 7.21V13.91ZM16 13.91V7.21L10 10.58V17.29L16 13.91Z" fill="#F8F8F8"/>
                        </svg>
                    </button>
                    <button class="icon" >
                        <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path class="fill" d="M9 20C14.131 20 18 18.065 18 15.5V5H17.947C17.98 4.836 18 4.67 18 4.5C18 1.935 14.131 0 9 0C4.209 0 0.52 1.688 0.053 4H0V15.5C0 18.065 3.869 20 9 20ZM9 18C4.727 18 2 16.52 2 15.5V7.394C3.623 8.387 6.111 9 9 9C11.889 9 14.377 8.387 16 7.394V15.5C16 16.52 13.273 18 9 18ZM9 2C13.273 2 16 3.48 16 4.5C16 5.52 13.273 7 9 7C4.727 7 2 5.52 2 4.5C2 3.48 4.727 2 9 2Z" fill="#F8F8F8"/>
                        </svg>
                    </button>
                    <button class="icon" on:click={() => new CreateObject("new cube", ObjectType.Plane, 1)}>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path class="fill" d="M0 0H18V18H0V0ZM2 2V16H16V2H2Z" fill="#F8F8F8"/>
                        </svg>
                    </button>
                    <button class="icon" on:click={() => console.log('click')}>
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path class="stroke" d="M10.9995 20.9999C10.6889 20.9999 10.3826 20.9274 10.105 20.788L2.01301 16.734C1.88625 16.6702 1.77445 16.5802 1.68498 16.47C1.59552 16.3598 1.53041 16.2319 1.49394 16.0947C1.45747 15.9575 1.45048 15.8142 1.47341 15.6741C1.49635 15.534 1.5487 15.4004 1.62701 15.282L10.167 1.44603C10.2582 1.30886 10.3818 1.19636 10.527 1.11854C10.6722 1.04072 10.8343 1 10.999 1C11.1637 1 11.3259 1.04072 11.471 1.11854C11.6162 1.19636 11.7398 1.30886 11.831 1.44603L20.371 15.282C20.704 15.783 20.524 16.464 19.986 16.734L11.894 20.788C11.6164 20.9274 11.3101 20.9999 10.9995 20.9999ZM10.9995 20.9999L11 1.00003" stroke="#F8F8F8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                </div>
            {/if}

            {#if state.panel_view === e_LastSelected.import}
                <h4>Import 3D models</h4>

                <input type="text" placeholder="Enter Your URL" bind:value={pathFile}>
                {pathFile}
                <p>OR</p>
                <input type="file" placeholder="Select Your File" on:change={e =>fileImport(e)}>

                <button class="icon" on:click={() => new ImportObject(SupportFormatType.GLTF, pathFile)}>
                    Import
                </button>
                <div class="note">
                    <p>
                        Import 3D models from your computer or from link.
                        Please note that only the GLTF format is fully supported (gltf, glb). Check with your 3D creation
                        software to obtain a compatible file, or use a tool that can convert it, such as
                        <a target="_blank" href="https://www.blender.org/download/">Blender (free).<a/>
                    </p>
                </div>
            {/if}
        </div>
    {/if}
</div>


<style lang="scss">


  button {
    background: rgb(39, 38, 38);
    color: rgb(255, 255, 255);
    border: 1px solid rgb(189, 187, 187);
    padding: 8px 10px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    transition: all 0.2s ease-in-out;
    height: fit-content;
    &.icon svg {
        width: 40px;
        height: 40px;
    }
    &:hover {
      background: rgb(248, 247, 247);
      color: rgb(0, 0, 0);
    }
    &.icon:hover {
      background: rgb(39, 38, 38);
      svg {
        .stroke {
          stroke: #9DFF8D;
        }
        .fill {
            fill: #9DFF8D;
        }
      }
    }
  }


  .settings {
    position: absolute;
    height: calc(100% - 3rem);
    left: 0;
    padding: 20px 10px;
    display: flex;

    .slide_bar {
      background: #242424;
      height: 100%;
      width: 60px;
      border-radius: 5px;
      margin-bottom: 10px;
      display: flex;
      align-items: center;
      padding: 10px;
      gap: 10px;
      flex-direction: column;
    }

    .panel {
      background: #242424;
      height: 100%;
      width: 300px;
      position: relative;
      border-radius: 5px;
      margin-left: 10px;
      padding: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      overflow: hidden;
    }

    .grid {
        flex-wrap: wrap;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }

    .panel .note {
        position: absolute;
        width: 100%;
        bottom: 0;
        color: #ededed;
        background: rgb(69 83 152);
        padding: 10px;
        font-size: 14px;
        line-height: 1.5;
    }

  }

</style>