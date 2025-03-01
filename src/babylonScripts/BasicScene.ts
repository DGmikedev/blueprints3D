import{ Scene, Engine, Vector3, FreeCamera, HemisphericLight, MeshBuilder } from "@babylonjs/core";

export class BasicScene{

    scene: Scene;
    engine: Engine;

    constructor(private canvas: HTMLCanvasElement){
        
        this.engine = new Engine(this.canvas, true);
        this.scene = this.createScene()
        this.engine.runRenderLoop(()=>{
            this.scene.render();
        })

        
    }

    createScene():Scene{
        const scene = new Scene(this.engine);
        const camera = new FreeCamera("camera1", new Vector3(0, 5, -10), this.scene);
        camera.attachControl();
        
        const hemiLight = new HemisphericLight("hemiLight", new Vector3(0,1,0), this.scene);
        hemiLight.intensity = 0.8;
        
        const ground = MeshBuilder.CreateGround("ground", {width:10, height:10}, this.scene);
        const ball = MeshBuilder.CreateSphere("ball", {diameter:1}, this.scene);
        ball.position = new Vector3(0,1,0);

        return scene;
    }
}