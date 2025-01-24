import{ Scene, Engine, Vector3, FreeCamera, HemisphericLight, 
    MeshBuilder, CubeTexture, PBRMaterial, 
    Texture, SceneLoader } from "@babylonjs/core";
import "@babylonjs/loaders";

export class ImportModels
{

 scene: Scene;
 engine: Engine;

 constructor(private canvas: HTMLCanvasElement){
     
     this.engine = new Engine(this.canvas, true);
     this.scene = this.createScene()
     this.engine.runRenderLoop(()=>{
     this.scene.render();
     this.createBarrel();
     })

     
 }

 createScene():Scene{
     const scene = new Scene(this.engine);
     const camera = new FreeCamera("camera1", new Vector3(0, 5, -10), this.scene);
     camera.attachControl();
     camera.speed = 0.15;
     const hemiLight = new HemisphericLight("hemiLight", new Vector3(0,1,0), this.scene);
     hemiLight.intensity = 0.8;

     const envText = CubeTexture.CreateFromPrefilteredData("./environment/sky.env", scene);
     scene.environmentTexture = envText;

     scene.createDefaultSkybox(envText, true);
     
     const ground = MeshBuilder.CreateGround("ground", {width:10, height:10}, this.scene);
    // const ball = MeshBuilder.CreateSphere("ball", {diameter:1}, this.scene);
    // ball.position = new Vector3(0,1,0);

     ground.material = this.createAsphaltMaterial();
     // ball.material = this.createMgicMaterial();

     return scene;
 }

 createAsphaltMaterial():PBRMaterial{

     const pbr = new PBRMaterial("pbr", this.scene);
     pbr.roughness = 1;
     pbr.albedoTexture = new Texture("./textures/asphalt/asphalt_ao.jpg");
     pbr.bumpTexture = new Texture("./textures/asphalt/asphalt_nor.jpg");

     pbr.useAmbientOcclusionFromMetallicTextureRed = true;
     pbr.useRoughnessFromMetallicTextureGreen = true;
     pbr.useMetallnessFromMetallicTextureBlue = true;
     pbr.bumpTexture = new Texture("./textures/asphalt/asphalt_ao_rouge_metal.jpg");
     pbr.invertNormalMapX = true
     pbr.invertNormalMapY = true
     return pbr;
 }

async createBarrel():Promise<void>{

    const models = await SceneLoader.ImportMeshAsync("","./models/","barrel.glb");
    
}
}