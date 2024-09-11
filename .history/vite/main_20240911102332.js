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
box.position.y;
