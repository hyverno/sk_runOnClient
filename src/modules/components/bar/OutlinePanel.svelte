<script lang="ts">

    import {CreateObject, ObjectType} from "../../../engine/createObject";

    let state = {
        panel: false,
        panel_view: e_LastSelected
    }
    state.panel_view = e_LastSelected.none

    enum e_LastSelected{
        none,
        shape,
        gizmo
    }

    let lastSelected: e_LastSelected = e_LastSelected.none

    function toggleSlideBar(e: e_LastSelected){
        if (lastSelected == e) {
            state.panel = !state.panel
        }
        if (state.panel_view == e_LastSelected.none) {
            state.panel_view = e
            if (state.panel === false) {
                state.panel = true
            }
        }
        lastSelected = e
    }

</script>

<div class="outline">
    <div class="panel">
       <h4>outline</h4>

        <div class="hierarchy">
            <p class="parent">parent</p>
            <span>
                <p>first element</p>
                <p>second element</p>
                <p>three element</p>
                <p>for element</p>
            </span>

            <p>other</p>
            <p>other</p>
            <p>other</p>


            <p class="parent">parent</p>
            <span>
                <p>first element</p>
                <p>second element</p>
                <p>three element</p>
                <p class="parent">other parent</p>
                <span>
                    <p>first element</p>
                    <p>second element</p>
                    <p>three element</p>
                    <p>for element</p>
                </span>
            </span>
        </div>


    </div>
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

  .panel .hierarchy {
    border-left: solid 1px rgb(189, 187, 187);
    width: 100%;
    display: flex;
    flex-direction: column;
    p {
      margin-left: 10px;
      position: relative;
      display: flex;
      align-items: center;
      z-index: 5;
      transition: all 0.2s ease-in-out;
      &:hover {
        cursor: pointer;
        color: #242424;
        font-weight: bold;
        &::after {
          transform: scaleX(1);
          transform-origin: bottom left;
        }
      }
      &::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        display: block;
        transform-origin: bottom right;
        transform: scaleX(0);
        transition: transform 0.2s ease-in-out;
        background: linear-gradient(to right, #9DFF8D, #9DFF8D02);
        z-index: -1;
      }
    }

    p.parent {
      margin-left: 25px;
      color: #90cf3d;
      &::before {
        position: absolute;
        content: "v";
        width: 10px;
        left: -15px;
        color: #90cf3d;
      }
      &:hover {
        color: #000000;
      }
    }

    span {
      margin-left: 40px;
      position: relative;
      display: flex;
      flex-direction: column;
      &::before {
        position: absolute;
        content: "";
        width: 10px;
        left: -10px;
        height: 100%;
        border-left: solid 1px rgb(189, 187, 187);
      }
    }
  }

  .outline {
    position: absolute;
    height: calc(100% - 3rem);
    right: 0;
    padding: 20px 10px;
    display: flex;

    .panel {
      background: #242424;
      height: 100%;
      width: 300px;
      border-radius: 5px;
      margin-left: 10px;
      padding: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
    }

    .grid {
      flex-wrap: wrap;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
    }

  }

</style>