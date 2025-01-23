import{ Scene, 
    Engine, 
    Vector3, 
    FreeCamera, 
    HemisphericLight, 
    MeshBuilder, 
    StandardMaterial,
    Texture

} from "@babylonjs/core";

export class MaterialsB{

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
        camera.speed = 0.15;
        
        const hemiLight = new HemisphericLight("hemiLight", new Vector3(0,1,0), this.scene);
        hemiLight.intensity = 0.8;
        
        const ground = MeshBuilder.CreateGround("ground", {width:10, height:10}, this.scene);

        const ball = MeshBuilder.CreateSphere("ball", {diameter:1}, this.scene);
        ball.position = new Vector3(0,1,0);

        ground.material = this.createGroundMaterial();
        ball.material = this.createMetalMaterial();

        return scene;
    }

    createGroundMaterial(): StandardMaterial{

        const groundMater = new StandardMaterial("groundMat", this.scene);
        const uvScale = 4;
        const texArray: Texture[] = [];

        // load img of diffuse img to texture
        const diffuse = new Texture("./textures/stone/difuse_cobblestone.jpg", this.scene);
        
        // load de texture to ground mesh 
        groundMater.diffuseTexture = diffuse;

        texArray.push(diffuse);

        const normal = new Texture("./textures/stone/normal_cobblestone.jpg", this.scene);
        groundMater.bumpTexture = normal;

        texArray.push(normal);
        
        const ao = new Texture("./textures/stone/ao_coblestone.jpg", this.scene);
        groundMater.ambientTexture = ao;

        texArray.push(ao);


        const spec = new Texture("./textures/stone/spec_cobblestone.jpg", this.scene);
        groundMater.specularTexture = spec;
        texArray.push(spec); 

        // set uScale and vScale scales of image
        // diffuse.uScale = 4;
        // diffuse.vScale = 4;

        texArray.forEach((texture)=>{
            texture.uScale = uvScale
            texture.vScale = uvScale
        })
 

        return groundMater
    }


    createMetalMaterial(): StandardMaterial{ 
        const ballMat = new StandardMaterial("ballMat", this.scene);
        const uvScale = 1;
        const texArray: Texture[] = [];

        // load img of diffuse img to texture
        const diffuse = new Texture("./textures/metal/difuse_metal.jpg", this.scene);
        
        // load de texture to ground mesh 
        ballMat.diffuseTexture = diffuse;

        texArray.push(diffuse);

        const normal = new Texture("./textures/metal/norma_map_metal.jpg", this.scene);
        ballMat.bumpTexture = normal;

        ballMat.invertNormalMapX = true;
        ballMat.invertNormalMapY = true;

        texArray.push(normal);
        
        const ao = new Texture("./textures/metal/metal_ao.jpg", this.scene);
        ballMat.ambientTexture = ao;

        texArray.push(ao);


        const spec = new Texture("./textures/metal/spec_metal.jpg", this.scene);
        ballMat.specularTexture = spec;
        ballMat.specularPower = 1;
        texArray.push(spec); 

        // set uScale and vScale scales of image
        // diffuse.uScale = 4;
        // diffuse.vScale = 4;

        texArray.forEach((texture)=>{
            texture.uScale = uvScale
            texture.vScale = uvScale
        })
 

        return ballMat
    }
}