import { useEffect, useRef } from 'react';
import * as THREE from 'three';

function App() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current
    });

    const animate = () => {
        cube.rotation.x += 0.0001;
        cube.rotation.y += 0.0001;
        line.rotation.x += 0.001;
        line.rotation.y += 0.001;
      renderer.render(scene, camera);
      window.requestAnimationFrame(animate);
    }

    renderer.setSize(window.innerWidth, window.innerHeight);
    const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
    const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    scene.add(cube);

    const lineMaterial = new THREE.LineBasicMaterial({ color: 0x0000ff });
    const points = [
      new THREE.Vector3(-10, 0, 0),
      new THREE.Vector3(0, 10, 0),
      new THREE.Vector3(10, 0, 0),
    ]
    const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
    const line = new THREE.Line(lineGeometry, lineMaterial);

    scene.add(line);

    camera.position.set(0, 0, 30);
    camera.lookAt(0, 0, 0)
    document.body.appendChild(renderer.domElement);
    renderer.setAnimationLoop(animate);
  }, []);

  return <canvas ref={canvasRef} />;
}

export default App
