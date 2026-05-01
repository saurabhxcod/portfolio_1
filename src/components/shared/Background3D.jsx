import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Background3D() {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x050508, 0.008);
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 20;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    const particleGeo = new THREE.BufferGeometry();
    const particleCount = 3000;
    const posArray = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      const r = 80 * Math.cbrt(Math.random());
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);
      posArray[i] = r * Math.sin(phi) * Math.cos(theta);
      posArray[i + 1] = r * Math.sin(phi) * Math.sin(theta);
      posArray[i + 2] = r * Math.cos(phi);
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particleMat = new THREE.PointsMaterial({ size: 0.08, color: 0x00f5ff, transparent: true, opacity: 0.6, blending: THREE.AdditiveBlending });
    const particlesMesh = new THREE.Points(particleGeo, particleMat);
    scene.add(particlesMesh);

    const grid = new THREE.GridHelper(200, 40, 0x00f5ff, 0x00f5ff);
    grid.position.y = -15;
    grid.material.opacity = 0.08;
    grid.material.transparent = true;
    scene.add(grid);

    const shapes = [];
    const shapeGeos = [new THREE.IcosahedronGeometry(2, 0), new THREE.OctahedronGeometry(2, 0), new THREE.TorusGeometry(1.5, 0.5, 8, 12)];
    const shapeMat = new THREE.MeshBasicMaterial({ color: 0x00f5ff, wireframe: true, transparent: true, opacity: 0.15 });
    for (let i = 0; i < 6; i++) {
      const mesh = new THREE.Mesh(shapeGeos[i % 3], shapeMat);
      mesh.position.set((Math.random() - 0.5) * 40, (Math.random() - 0.5) * 30, -5 - Math.random() * 25);
      mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
      mesh.userData = { rx: 0.003 + Math.random() * 0.005, ry: 0.003 + Math.random() * 0.005, baseY: mesh.position.y };
      shapes.push(mesh);
      scene.add(mesh);
    }

    const ambientLight = new THREE.AmbientLight(0x00f5ff, 0.3);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0xff6b00, 0.5, 100);
    scene.add(pointLight);

    let mouseX = 0, mouseY = 0, targetX = 0, targetY = 0;
    const onDocumentMouseMove = (e) => {
      mouseX = (e.clientX - window.innerWidth / 2) * 0.001;
      mouseY = (e.clientY - window.innerHeight / 2) * 0.001;
    };
    document.addEventListener('mousemove', onDocumentMouseMove);

    const onScroll = () => {
      const sy = window.scrollY;
      shapes.forEach(shape => shape.position.y = shape.userData.baseY + sy * 0.01);
    };
    window.addEventListener('scroll', onScroll);

    let time = 0;
    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      time += 0.01;
      targetX = mouseX * 0.5;
      targetY = mouseY * 0.5;

      particlesMesh.rotation.y += 0.0003;
      particlesMesh.rotation.x += 0.0001;
      particlesMesh.position.x += (targetX - particlesMesh.position.x) * 0.05;
      particlesMesh.position.y += (-targetY - particlesMesh.position.y) * 0.05;

      shapes.forEach(shape => { shape.rotation.x += shape.userData.rx; shape.rotation.y += shape.userData.ry; });

      pointLight.position.x = Math.sin(time * 0.5) * 30;
      pointLight.position.z = Math.cos(time * 0.5) * 30;
      pointLight.position.y = Math.sin(time * 0.3) * 20;

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousemove', onDocumentMouseMove);
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(animationFrameId);
      if (mountRef.current) mountRef.current.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none" />;
}
