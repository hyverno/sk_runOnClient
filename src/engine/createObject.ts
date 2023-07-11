import * as THREE from 'three'
import { scene } from './render'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';


export enum ObjectType {
    Cube,
    Sphere,
    Plane,
    Cylinder,
    Cone,
    Torus,
}

export enum SupportFormatType {
    "GLTF"
}

export class CreateObject {
    type: ObjectType
    amount: number

    constructor(name: string, type: ObjectType, amount?: number) {
        console.log(name, type, amount)
        this.type = type
        this.amount = amount || 1

        if (this.amount > 2) {
            for (let i = 0; i < this.amount; i++) {
                for (let j = 0; j < this.amount; j++) {
                    this.createElement(new THREE.Vector3(i, 0, j))
                }
                
            }
        } else {
            this.createElement()
        }

    }

    private createElement(position?: THREE.Vector3) {
        if (this.type == ObjectType.Cube) {
            const geometry = new THREE.BoxGeometry( 1, 1, 1 )
            const material = new THREE.MeshPhongMaterial( { color: 0xff00ff, wireframe: false } );
            const mesh = new THREE.Mesh( geometry, material );

            mesh.castShadow = true;
            mesh.receiveShadow = true;

            scene.add( mesh );

        }
        if (this.type == ObjectType.Sphere) {
            const geometry = new THREE.SphereGeometry( 1, 32, 32 );
            const material = new THREE.MeshPhongMaterial( {color: 0xff00ff, wireframe: true} );
            const sphere = new THREE.Mesh( geometry, material );

            sphere.castShadow = true;
            sphere.receiveShadow = true;

            scene.add( sphere );
        }
        if (this.type == ObjectType.Plane) {
            const geometry = new THREE.PlaneGeometry( 1, 1, 32, 32 );
            const material = new THREE.MeshBasicMaterial( {color: 0xf77f00, wireframe: true} );
            const plane = new THREE.Mesh( geometry, material );

            plane.castShadow = true;
            plane.receiveShadow = true;

            scene.add( plane );
        }
    }

}

export class ImportObject {
    type: SupportFormatType;
    URL;
    constructor(type: SupportFormatType, URL: string) {
        this.type = type
        this.URL = URL

        switch (this.type) {
            case SupportFormatType.GLTF:
                this.loadGLTF()
        }
    }

    private loadGLTF() {
        const loader = new GLTFLoader()
        console.log('<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<')
        console.log(this.URL)
        console.log('<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<')
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        loader.load( this.URL,
            function (gltf) {
                gltf.scene.traverse(function (child) {
                    if ((child as THREE.Mesh).isMesh) {
                        const m = child as THREE.Mesh
                        m.receiveShadow = true
                        m.castShadow = true
                    }
                    if ((child as THREE.Light).isLight) {
                        const l = child as THREE.SpotLight
                        l.castShadow = true
                        l.shadow.bias = -0.003
                        l.shadow.mapSize.width = 2048
                        l.shadow.mapSize.height = 2048
                    }
                })
                scene.add(gltf.scene)
            },
            (xhr) => {
                console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
            },
            (error) => {
                console.log(error)
            }
        )

    }
}

