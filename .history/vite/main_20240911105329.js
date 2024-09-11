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
geometry.computeVertexNormals(); // Recalculate vertex normals

const material = new THREE.MeshLambertMaterial({ color: "#468585" });
const dodecahedron = new THREE.Mesh(geometry, material);
dodecahedron.castShadow = true;

const bxGeometry = new THREE.BoxGeometry(2, 0.1, 2);
const boxMaterial = new THREE.MeshLambertMaterial({ color: "#B4B4B4" });
const box = new THREE.Mesh(bxGeometry, boxMaterial);
box.position.y = -1.5;

scene.add(dodecahedron);
scene.add(box);

// 4. Lights
const ambientLight = new THREE.AmbientLight(0x404040);
scene.add(ambientLight);

const spotLight = new THREE.SpotLight(0x006769, 1);
spotLight.position.set(1, 1, 1);
spotLight.castShadow = true;
scene.add(spotLight);

// 5. Renderer
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.render(scene, camera);

// 6. Handle window resize
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.render(scene, camera);
});
