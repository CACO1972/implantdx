import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.157.0/build/three.module.js';
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.157.0/examples/jsm/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

camera.position.set(0, 5, 15);
controls.update();

const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(0, 20, 20);
scene.add(light);

const teeth = [];
const toothGeometry = new THREE.BoxGeometry(0.7, 1, 0.7);
const toothMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff });

for (let i = 0; i < 16; i++) {
  const tooth = new THREE.Mesh(toothGeometry, toothMaterial.clone());
  tooth.position.set((i - 7.5) * 1, 0, 0);
  tooth.userData.index = i;
  scene.add(tooth);
  teeth.push(tooth);
}

for (let i = 0; i < 16; i++) {
  const tooth = new THREE.Mesh(toothGeometry, toothMaterial.clone());
  tooth.position.set((i - 7.5) * 1, -2, 0);
  tooth.userData.index = i + 16;
  scene.add(tooth);
  teeth.push(tooth);
}

const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();

function onPointerDown(event) {
  pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
  pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
  raycaster.setFromCamera(pointer, camera);
  const intersects = raycaster.intersectObjects(teeth);
  if (intersects.length > 0) {
    const tooth = intersects[0].object;
    tooth.visible = false;
  }
}
window.addEventListener('pointerdown', onPointerDown);

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}
animate();

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
