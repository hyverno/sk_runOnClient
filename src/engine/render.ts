import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import Stats from 'three/examples/jsm/libs/stats.module'


console.log(document)

export const scene = new THREE.Scene()

// export let camera: THREE.PerspectiveCamera
export function init(target: HTMLCanvasElement) {
    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )
    const renderer = new THREE.WebGLRenderer({ canvas: target })

    renderer.setSize( window.innerWidth, window.innerHeight )
    camera.position.z = 5

    const controls = new OrbitControls(camera, renderer.domElement)

    const stats = new Stats()
    document.body.appendChild(stats.dom)

    const light = new THREE.AmbientLight( 0xffaaff );
    light.position.set(10,10,10)
    scene.add( light );

    camera.position.set(0, 0, 5);

    renderer.setClearColor('#E5E5E5');

    function animate() {
        requestAnimationFrame( animate )

        stats.update()
        controls.update()
        renderer.render( scene, camera )
    }

    animate()
}

