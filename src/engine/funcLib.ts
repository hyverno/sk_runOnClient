import * as THREE from 'three';
import { scene } from "./render";

// const pointer = new THREE.Vector2()
// document.addEventListener('mousemove', (e) => {
//     pointer.x = ( e.clientX / window.innerWidth ) * 2 - 1;
//     pointer.y = - ( e.clientY / window.innerHeight ) * 2 + 1;
// })
//
// const raycaster = new THREE.Raycaster();
// let response: THREE.Object3D<THREE.Event>[] = []
//
// document.addEventListener('click', () => {
//     response = []
//     scene.traverse((e: THREE.Object3D) => {
//         if (e instanceof THREE.Mesh && e.userData.componentTags !== undefined || null) {
//             response.push(e)
//         } else if (e instanceof THREE.Mesh && e.parent?.userData.componentTags !== undefined || null) {
//             response.push(e)
//         }
//     })
//
//     raycaster.setFromCamera(pointer, camera)
//     const intersects = raycaster.intersectObjects( response );
//     console.log(intersects)
// })








