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
const material = new THREE.MeshStandardMaterial({ color: "#468585" }); // Use MeshStandardMaterial for better lighting
const dodecahedron = new THREE.Mesh(geometry, material);

const bxGeometry = new THREE.BoxGeometry(2, 0.1, 2);
const boxMaterial = new THREE.MeshStandardMaterial({ color: "#B4B4B4" }); // Use MeshStandardMaterial for better lighting
const box = new THREE.Mesh(bxGeometry, boxMaterial);
box.position.y = -1.5;

scene.add(dodecahedron);
scene.add(box);

// 4. Light
const light = new THREE.SpotLight(0x006769, 1); // Adjusted intensity
light.position.set(5, 5, 5); // Adjusted position for better illumination
light.castShadow = true; // Enable shadows
scene.add(light);

// Optional: Add a light helper to visualize the light
const lightHelper = new THREE.SpotLightHelper(light);
scene.add(lightHelper);

// 5. Ambient Light
const ambientLight = new THREE.AmbientLight(0x404040); // Soft white light
scene.add(ambientLight);

// 6. Renderer
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);

// Animation loop
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
