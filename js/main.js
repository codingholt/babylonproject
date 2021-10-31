/// <reference path='./vendor/babylon.d.ts' />

//get canvas

const canvas = document.getElementById('renderCanvas');

//create babylonjs engine

const engine = new BABYLON.Engine(canvas, true)

function createScene(){
    //create scene
    const scene = new BABYLON.Scene(engine);

    //create camara
    const camera = new BABYLON.FreeCamera('camera', new BABYLON.Vector3(0,0, -5));
    camera.attachControl(canvas,true)
    //create light
    const light = new BABYLON.HemisphericLight('light', new BABYLON.Vector3(0,1,0), scene)

    //create box
    const box = BABYLON.MeshBuilder.CreateBox('box', {
        size: 1
    }, scene)

    //create sphere
    const sphere = BABYLON.MeshBuilder.CreateSphere('sphere', {
        segments: 32,
        diameter: 2,
    }, scene)
    sphere.position = new BABYLON.Vector3(3,0,0)

    //create plane
    const plane =  BABYLON.MeshBuilder.CreatePlane('plane',{
        //options
    },scene)
    plane.position = new BABYLON.Vector3(-3,0,0)

    return scene

}

const scene = createScene();

engine.runRenderLoop(() => {
    scene.render()
}
)




