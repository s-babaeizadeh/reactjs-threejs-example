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

// 3. Object
const geometry = new THREE.DodecahedronGeometry();
const material = new THREE.MeshLambertMaterial({ color: "#468585" });
const dodecahedron = new THREE.Mesh(geometry, material);
console.log(
  "Dodecahedron material color:",
  material.color.getHex().toString(16)
);

const bxGeometry = new THREE.BoxGeometry(2, 0.1, 2);
const boxMaterial = new THREE.MeshLambertMaterial({ color: "#B4B4B4" });
const box = new THREE.Mesh(bxGeometry, boxMaterial);
box.position.y = -1.5;
console.log("Box material color:", boxMaterial.color.getHex().toString(16));

scene.add(dodecahedron);
scene.add(box);

// 4. Light
const light = new THREE.SpotLight(0xffffff, 1); // Use a white light with higher intensity
light.position.set(1, 1, 1);
scene.add(light);

// 5. Renderer
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);
