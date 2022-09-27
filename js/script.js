//escenario
const scene = new THREE.Scene();
 

var loader = new THREE.TextureLoader();
loader.load('../public/fondo.png', function(texture){
    scene.background = texture;
});
 
 
//camera
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
 
//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
 
 
 
camera.position.z = 7;
camera.position.y = 3;
camera.position.x = 0;
 
 
 
//elemento
const GLTFLoader = new THREE.GLTFLoader();
 GLTFLoader.load("../public/evita3.gltf",
(gltf) =>{
    var loaderObjeto = gltf.scene
    loaderObjeto.scale.set(0.040,0.040,0.040);
    loaderObjeto.position.x = 3;
    loaderObjeto.position.z = 1;
    loaderObjeto.position.y= 0.1;
    const dcontrols = new THREE.DragControls([loaderObjeto], camera, renderer.domElement );
    console.log('carga completa');
    scene.add(loaderObjeto);
}, () =>{
    console.log('cargando');
}, () => {
    console.log('error');
});  

const GLTFLoader2 = new THREE.GLTFLoader();
GLTFLoader2.load("../public/villano.gltf",
(gltf) =>{
    var loaderObjeto2 = gltf.scene
    loaderObjeto2.scale.set(0.02,0.02,0.02);
    loaderObjeto2.position.x = -1;
    loaderObjeto2.position.z = 0;
    loaderObjeto2.position.y = 2;
    const dcontrols = new THREE.DragControls([loaderObjeto2], camera, renderer.domElement );  
    console.log('carga completa');
    scene.add(loaderObjeto2);
}, () =>{
    console.log('cargando');
}, () => {
    console.log('error');
});  

const GLTFLoader3 = new THREE.GLTFLoader();
 GLTFLoader3.load("../public/evito2.gltf",
(gltf) =>{
    var loaderObjeto3 = gltf.scene
    loaderObjeto3.scale.set(0.027,0.027,0.027);
    loaderObjeto3.position.x = -5;
    loaderObjeto3.position.z = 1;
    const dcontrols = new THREE.DragControls([loaderObjeto3], camera, renderer.domElement );
    /* const light2 = new THREE.PointLight( 0xffffff, 1, 100 );
    light2.position.set( 50, 50, 50 );
    scene.add( light2 ); */
    console.log('carga completa');
    scene.add(loaderObjeto3);
}, () =>{
    console.log('cargando');
}, () => {
    console.log('error');
});  
       
//animacion
function animate(){
requestAnimationFrame(animate) 
         
renderer.render(scene, camera);
 
}
animate();
 
//light
 const light = new THREE.AmbientLight(0xfffffff, 3)
scene.add(light)
 


