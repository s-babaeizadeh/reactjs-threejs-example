import * as THREE from "three";

// Get the canvas element
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
camera.position.set(0, 1, 5); // Adjusted camera position for better view

// 3. Objects
const geometry = new THREE.DodecahedronGeometry();
const material = new THREE.MeshLambertMaterial({ color: "#468585" });
const dodecahedron = new THREE.Mesh(geometry, material);
scene.add(dodecahedron);

const bxGeometry = new THREE.BoxGeometry(2, 0.1, 2);
const boxMaterial = new THREE.MeshLambertMaterial({ color: "#B4B4B4" });
const box = new THREE.Mesh(bxGeometry, boxMaterial);
box.position.y = -1.5;
scene.add(box);

// 4. Lights
const ambientLight = new THREE.AmbientLight(0x404040); // Soft white light
scene.add(ambientLight);

const spotLight = new THREE.SpotLight(0xffffff, 1); // White light
spotLight.position.set(1, 2, 2); // Position the light
spotLight.target = dodecahedron; // Set the target to the dodecahedron
scene.add(spotLight);
scene.add(spotLight.target); // Add the target to the scene

// 5. Renderer
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);

// Optional: Handle window resize
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.render(scene, camera);
});
