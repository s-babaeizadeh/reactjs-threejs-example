import * as THREE from 'three'

const canvas = document.getElementById(elementId: 'canvas');

// 1. scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(r:"#F0F0F0");

//2. Camera
const camera = new THREE.PerspectiveCamera(fov:75, aspect:window.innerWidth / window.innerHeight, near:0.1, far:1000)