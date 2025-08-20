import { useEffect, useRef } from 'react';

const use3D = (modelUrl: string) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const context = canvas.getContext('webgl');
        if (!context) return;

        // Initialize 3D scene, camera, and renderer here
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ canvas });

        // Load model
        const loader = new THREE.GLTFLoader();
        loader.load(modelUrl, (gltf) => {
            scene.add(gltf.scene);
        });

        camera.position.z = 5;

        const animate = () => {
            requestAnimationFrame(animate);
            // Update scene and render
            renderer.render(scene, camera);
        };

        animate();

        return () => {
            // Clean up resources
            renderer.dispose();
        };
    }, [modelUrl]);

    return canvasRef;
};

export default use3D;