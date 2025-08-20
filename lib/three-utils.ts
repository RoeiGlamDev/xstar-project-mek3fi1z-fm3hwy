import * as THREE from 'three'; // Importing Three.js library

export const createScene = (): THREE.Scene => { // Function to create a scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff); // Set background color to white
    return scene;
};

export const createCamera = (width: number, height: number): THREE.PerspectiveCamera => { // Function to create a camera
    const aspectRatio = width / height;
    const camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 1000);
    camera.position.z = 5; // Set camera position
    return camera;
};

export const createRenderer = (width: number, height: number): THREE.WebGLRenderer => { // Function to create a renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    return renderer;
};

export const createLight = (): THREE.DirectionalLight => { // Function to create a light
    const light = new THREE.DirectionalLight(0xffffff, 1); // White light
    light.position.set(5, 5, 5); // Set light position
    return light;
};

export const createCube = (color: number): THREE.Mesh => { // Function to create a cube
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshStandardMaterial({ color }); // Set cube color
    return new THREE.Mesh(geometry, material);
}; 

export const animate = (renderer: THREE.WebGLRenderer, scene: THREE.Scene, camera: THREE.PerspectiveCamera): void => { // Animation loop
    requestAnimationFrame(() => animate(renderer, scene, camera));
    renderer.render(scene, camera); // Render the scene
}; 

export default {
    createScene,
    createCamera,
    createRenderer,
    createLight,
    createCube,
    animate,
};