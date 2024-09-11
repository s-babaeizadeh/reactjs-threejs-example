import * as THREE from "three";

const canvas = document.getElementById("canvas");

// 1. Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color("#F0F0F0"); // Corrected syntax

// 2. Camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
); // Corrected syntax
camera.position.z = 5;

// 3. Objects
const geometry = new THREE.DodecahedronGeometry();
const material = new THREE.MeshLambertMaterial({ color: "#468585" }); // Corrected syntax
const dodecahedron = new THREE.Mesh(geometry, material);

const bxGeometry = new THREE.BoxGeometry(2, 0.1, 2); // Corrected syntax
const boxMaterial = new THREE.MeshLambertMaterial({ color: "#B4B4B4" }); // Corrected syntax
const box = new THREE.Mesh(bxGeometry, boxMaterial); // Corrected syntax
box.position.y = -1.5;

scene.add(dodecahedron);
scene.add(box);

// 4. Light
const light = new THREE.SpotLight(0x006769, 100); // Corrected syntax
light.position.set(1, 1, 1);
scene.add(light);

// 5. Renderer
const renderer = new THREE.WebGLRenderer({ canvas }); // Corrected syntax
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);
