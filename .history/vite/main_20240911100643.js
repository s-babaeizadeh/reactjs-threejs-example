import * as THREE from 'three'

const canvas = document.getElementById(elementId: 'canvas');

// 1. scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(r:"#F0F0F0");

//2. Camera
const camera = new THREE.PerspectiveCamera(fov:75, aspect:window.innerWidth / window.innerHeight, near:0.1, far:1000);
camera.position.z =5 

// 3. Object
const geometry = new THREE.DodecahedronGeometry()
const material  = new THREE.MeshLambertMaterial(parameters:{color: "#468585"});
const dodecahedron = new THREE.Mesh(geometry, material);

const bxGeometry = new THREE.BoxGeometry(width:2, height:0.1, depth:2);
const BoxMaterial  = new THREE.MeshLambertMaterial(parameters:{color: "#B4B4B4"});