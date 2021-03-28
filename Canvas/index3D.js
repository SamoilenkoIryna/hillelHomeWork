const scene = new THREE.Scene();
const fov = 70;
const aspectRatio = window.innerWidth/window.innerHeight;
const near = 0.1;
const far =1000;
const camera = new THREE.PerspectiveCamera(fov, aspectRatio, near, far);
const renderer = new THREE.WebGLRenderer({
    antialias: true
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor('#ccc');
document.body.prepend(renderer.domElement);
const controls = new THREE.OrbitControls(camera, renderer.domElement)


const geometry = new THREE.TorusKnotGeometry( 10, 3, 100, 16 );
const material = new THREE.MeshPhysicalMaterial({
    color: '#00FF00'
});
const knot = new THREE.Mesh(geometry, material);
scene.add(knot);
camera.position.z = 20;
knot.rotation.y = 15;
const light = new THREE.DirectionalLight('#fff', 0.7)
scene.add(light);
light.position.set(-1, 2, 4);

function animate () {
    renderer.render(scene, camera);
    requestAnimationFrame(animate)
    knot.rotation.z += 0.01;
    knot.rotation.y += 0.01;
    controls.update();
}
animate();