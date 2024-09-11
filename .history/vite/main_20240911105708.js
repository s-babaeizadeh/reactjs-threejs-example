import * as THREE from "three";

const canvas = document.getElementById("canvas");

// 1. Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color("#F0F0F0");

// 2. Camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 5;

// 3. Objects
const geometry = new THREE.DodecahedronGeometry();
const material = new THREE.MeshStandardMaterial({ color: "#468585" }); // Changed to MeshStandardMaterial
const dodecahedron = new THREE.Mesh(geometry, material);

const bxGeometry = new THREE.BoxGeometry(2, 0.1, 2);
const boxMaterial = new THREE.MeshStandardMaterial({ color: "#B4B4B4" }); // Changed to MeshStandardMaterial
const box = new THREE.Mesh(bxGeometry, boxMaterial);
box.position.y = -1.5;

scene.add(dodecahedron);
scene.add(box);

// 4. Light
const light = new THREE.SpotLight(0x006769, 100);
light.position.set(1, 1, 1);
light.castShadow = true; // Enable shadows if desired
scene.add(light);

// Optional: Add a light helper to visualize the light
const lightHelper = new THREE.SpotLightHelper(light);
scene.add(lightHelper);

// 5. Renderer
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);

// Animation loop (optional)
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
