'use client'

import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export default function ThreeDDeveloper() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const container = containerRef.current;
    const canvas = canvasRef.current;

    // Dimensions
    let width = container.clientWidth || 300;
    let height = container.clientHeight || 300;

    // Scene
    const scene = new THREE.Scene();
    scene.background = null; // transparent background to blend in

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(3.5, 2.5, 4.5);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(typeof window !== 'undefined' ? window.devicePixelRatio : 1, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.minDistance = 3;
    controls.maxDistance = 8;
    controls.maxPolarAngle = Math.PI / 2 - 0.05; // don't go below ground
    controls.target.set(0, 0.7, 0);

    // Lights
    const ambientLight = new THREE.AmbientLight(0x2d1f55, 1.8); // soft dark purple ambient
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0x8b5cf6, 2.5); // violet key light
    mainLight.position.set(4, 5, 2);
    mainLight.castShadow = true;
    mainLight.shadow.mapSize.width = 512;
    mainLight.shadow.mapSize.height = 512;
    mainLight.shadow.bias = -0.001;
    scene.add(mainLight);

    const fillLight = new THREE.DirectionalLight(0x06b6d4, 1.5); // cyan fill light from front-left
    fillLight.position.set(-4, 3, 2);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0xa78bfa, 1.0); // rim lighting from behind
    rimLight.position.set(0, 4, -4);
    scene.add(rimLight);

    // Group for the whole developer workspace diorama
    const workspace = new THREE.Group();
    scene.add(workspace);

    // Materials
    const floorMaterial = new THREE.MeshStandardMaterial({
      color: 0x110e20,
      roughness: 0.8,
      metalness: 0.2,
    });
    
    const deskMaterial = new THREE.MeshStandardMaterial({
      color: 0x1e1b29,
      roughness: 0.5,
      metalness: 0.1,
    });
    
    const metalMaterial = new THREE.MeshStandardMaterial({
      color: 0x3b3654,
      roughness: 0.3,
      metalness: 0.8,
    });
    
    const hoodieMaterial = new THREE.MeshStandardMaterial({
      color: 0x6d28d9, // Violet hoodie
      roughness: 0.8,
    });
    
    const skinMaterial = new THREE.MeshStandardMaterial({
      color: 0xfbcfe8, // Peach-clay skin tone
      roughness: 0.6,
    });
    
    const hairMaterial = new THREE.MeshStandardMaterial({
      color: 0x1f2937, // Dark slate hair/beanie
      roughness: 0.9,
    });
    
    const glowingMaterial = new THREE.MeshBasicMaterial({
      color: 0x22d3ee, // Glowing cyan screen
    });

    // 1. DIORAMA BASE PLATE
    const baseGeo = new THREE.CylinderGeometry(1.8, 1.9, 0.08, 32);
    const baseMesh = new THREE.Mesh(baseGeo, floorMaterial);
    baseMesh.position.y = -0.04;
    baseMesh.receiveShadow = true;
    workspace.add(baseMesh);

    // Glowing rim for base plate
    const rimGeo = new THREE.CylinderGeometry(1.81, 1.81, 0.03, 32, 1, true);
    const rimMat = new THREE.MeshBasicMaterial({ color: 0x8b5cf6, side: THREE.DoubleSide, transparent: true, opacity: 0.6 });
    const rimMesh = new THREE.Mesh(rimGeo, rimMat);
    rimMesh.position.y = -0.02;
    workspace.add(rimMesh);

    // 2. DESK
    // Desktop surface
    const deskTopGeo = new THREE.BoxGeometry(2.0, 0.06, 1.0);
    const deskTop = new THREE.Mesh(deskTopGeo, deskMaterial);
    deskTop.position.set(0, 0.75, 0);
    deskTop.castShadow = true;
    deskTop.receiveShadow = true;
    workspace.add(deskTop);

    // Desk Legs
    const legGeo = new THREE.CylinderGeometry(0.03, 0.03, 0.72, 8);
    const legPositions = [
      [-0.9, 0.36, -0.4],
      [0.9, 0.36, -0.4],
      [-0.9, 0.36, 0.4],
      [0.9, 0.36, 0.4],
    ];

    legPositions.forEach(([x, y, z]) => {
      const leg = new THREE.Mesh(legGeo, metalMaterial);
      leg.position.set(x, y, z);
      leg.castShadow = true;
      workspace.add(leg);
    });

    // 3. CHAIR
    const chairGroup = new THREE.Group();
    chairGroup.position.set(0, 0, 0.75); // positioned behind desk
    workspace.add(chairGroup);

    // Post
    const postGeo = new THREE.CylinderGeometry(0.04, 0.04, 0.38, 8);
    const post = new THREE.Mesh(postGeo, metalMaterial);
    post.position.y = 0.19;
    post.castShadow = true;
    chairGroup.add(post);

    // Star Base legs
    const legBaseGeo = new THREE.BoxGeometry(0.7, 0.03, 0.06);
    const legBase1 = new THREE.Mesh(legBaseGeo, metalMaterial);
    legBase1.position.y = 0.02;
    chairGroup.add(legBase1);

    const legBase2 = legBase1.clone();
    legBase2.rotation.y = Math.PI / 2;
    chairGroup.add(legBase2);

    // Seat
    const seatGeo = new THREE.BoxGeometry(0.55, 0.05, 0.5);
    const seat = new THREE.Mesh(seatGeo, hoodieMaterial);
    seat.position.y = 0.38;
    seat.castShadow = true;
    seat.receiveShadow = true;
    chairGroup.add(seat);

    // Backrest support
    const supportGeo = new THREE.BoxGeometry(0.06, 0.4, 0.05);
    const support = new THREE.Mesh(supportGeo, metalMaterial);
    support.position.set(0, 0.58, 0.22);
    support.rotation.x = -0.08;
    support.castShadow = true;
    chairGroup.add(support);

    // Backrest
    const backrestGeo = new THREE.BoxGeometry(0.48, 0.4, 0.04);
    const backrest = new THREE.Mesh(backrestGeo, hoodieMaterial);
    backrest.position.set(0, 0.76, 0.20);
    backrest.rotation.x = -0.08;
    backrest.castShadow = true;
    chairGroup.add(backrest);

    // 4. LAPTOP
    const laptopGroup = new THREE.Group();
    laptopGroup.position.set(0, 0.785, 0.05);
    workspace.add(laptopGroup);

    // Base
    const lapBaseGeo = new THREE.BoxGeometry(0.5, 0.012, 0.35);
    const lapBase = new THREE.Mesh(lapBaseGeo, metalMaterial);
    lapBase.castShadow = true;
    laptopGroup.add(lapBase);

    // Keyboard (inset)
    const kbGeo = new THREE.BoxGeometry(0.44, 0.005, 0.16);
    const kbMat = new THREE.MeshStandardMaterial({ color: 0x1f2937, roughness: 0.8 });
    const kb = new THREE.Mesh(kbGeo, kbMat);
    kb.position.set(0, 0.007, 0.04);
    laptopGroup.add(kb);

    // Lid & Screen hinge group
    const lidGroup = new THREE.Group();
    lidGroup.position.set(0, 0.006, -0.17); // hinge
    lidGroup.rotation.x = 1.9; // opened angle (~109 deg)
    laptopGroup.add(lidGroup);

    // Lid
    const lidGeo = new THREE.BoxGeometry(0.5, 0.32, 0.012);
    lidGeo.translate(0, 0.16, 0); // pivot at bottom
    const lid = new THREE.Mesh(lidGeo, metalMaterial);
    lid.castShadow = true;
    lidGroup.add(lid);

    // Screen
    const screenGeo = new THREE.BoxGeometry(0.47, 0.29, 0.004);
    screenGeo.translate(0, 0.16, 0.006);
    const screenMesh = new THREE.Mesh(screenGeo, glowingMaterial);
    lidGroup.add(screenMesh);

    // Screen Light (point source glowing outwards)
    const screenLight = new THREE.PointLight(0x22d3ee, 2.0, 2.0);
    screenLight.position.set(0, 0.16, 0.08);
    lidGroup.add(screenLight);

    // 5. DEVELOPER (3D HUMAN)
    const devGroup = new THREE.Group();
    devGroup.position.set(0, 0.38, 0.68); // sit in the chair
    workspace.add(devGroup);

    // Torso (Hoodie)
    const torsoGeo = new THREE.CylinderGeometry(0.2, 0.24, 0.56, 12);
    const torso = new THREE.Mesh(torsoGeo, hoodieMaterial);
    torso.position.y = 0.28;
    torso.castShadow = true;
    torso.receiveShadow = true;
    devGroup.add(torso);

    // Neck
    const neckGeo = new THREE.CylinderGeometry(0.06, 0.06, 0.08, 8);
    const neck = new THREE.Mesh(neckGeo, skinMaterial);
    neck.position.y = 0.58;
    devGroup.add(neck);

    // Head Group (for rotations)
    const headGroup = new THREE.Group();
    headGroup.position.set(0, 0.74, 0.01);
    devGroup.add(headGroup);

    const headGeo = new THREE.BoxGeometry(0.28, 0.28, 0.28);
    const head = new THREE.Mesh(headGeo, skinMaterial);
    head.castShadow = true;
    headGroup.add(head);

    // Beanie/Hair
    const beanieGeo = new THREE.BoxGeometry(0.3, 0.12, 0.3);
    const beanie = new THREE.Mesh(beanieGeo, hairMaterial);
    beanie.position.y = 0.11;
    headGroup.add(beanie);

    const hairBackGeo = new THREE.BoxGeometry(0.3, 0.14, 0.08);
    const hairBack = new THREE.Mesh(hairBackGeo, hairMaterial);
    hairBack.position.set(0, 0.04, -0.11);
    headGroup.add(hairBack);

    // Headphones
    const headphones = new THREE.Group();
    headGroup.add(headphones);

    // Band
    const bandGeo = new THREE.CylinderGeometry(0.17, 0.17, 0.03, 16, 1, true);
    const band = new THREE.Mesh(bandGeo, metalMaterial);
    band.rotation.z = Math.PI / 2;
    band.position.y = 0.12;
    band.scale.set(1, 1.05, 1.05);
    headphones.add(band);

    // Cups
    const cupGeo = new THREE.CylinderGeometry(0.06, 0.06, 0.04, 12);
    const cupL = new THREE.Mesh(cupGeo, glowingMaterial);
    cupL.rotation.z = Math.PI / 2;
    cupL.position.set(-0.15, 0.01, 0);
    headphones.add(cupL);

    const cupR = cupL.clone();
    cupR.position.x = 0.15;
    headphones.add(cupR);

    // Arms
    // Left Shoulder -> Elbow
    const armLeftGroup = new THREE.Group();
    armLeftGroup.position.set(-0.22, 0.5, -0.02);
    devGroup.add(armLeftGroup);

    const upperArmLeftGeo = new THREE.CylinderGeometry(0.06, 0.05, 0.28, 8);
    upperArmLeftGeo.translate(0, -0.14, 0);
    const upperArmLeft = new THREE.Mesh(upperArmLeftGeo, hoodieMaterial);
    upperArmLeft.rotation.z = 0.25;
    upperArmLeft.rotation.x = 0.65;
    upperArmLeft.castShadow = true;
    armLeftGroup.add(upperArmLeft);

    // Elbow -> Wrist
    const forearmLeftGroup = new THREE.Group();
    forearmLeftGroup.position.set(0, -0.28, 0);
    upperArmLeft.add(forearmLeftGroup);

    const forearmLeftGeo = new THREE.CylinderGeometry(0.05, 0.04, 0.26, 8);
    forearmLeftGeo.translate(0, -0.13, 0);
    const forearmLeft = new THREE.Mesh(forearmLeftGeo, hoodieMaterial);
    forearmLeft.rotation.x = -1.55;
    forearmLeft.rotation.y = -0.15;
    forearmLeft.castShadow = true;
    forearmLeftGroup.add(forearmLeft);

    // L Hand
    const handLeftGeo = new THREE.SphereGeometry(0.035, 8, 8);
    const handLeft = new THREE.Mesh(handLeftGeo, skinMaterial);
    handLeft.position.set(0, -0.26, 0);
    forearmLeft.add(handLeft);

    // Right Shoulder -> Elbow
    const armRightGroup = new THREE.Group();
    armRightGroup.position.set(0.22, 0.5, -0.02);
    devGroup.add(armRightGroup);

    const upperArmRightGeo = new THREE.CylinderGeometry(0.06, 0.05, 0.28, 8);
    upperArmRightGeo.translate(0, -0.14, 0);
    const upperArmRight = new THREE.Mesh(upperArmRightGeo, hoodieMaterial);
    upperArmRight.rotation.z = -0.25;
    upperArmRight.rotation.x = 0.70;
    upperArmRight.castShadow = true;
    armRightGroup.add(upperArmRight);

    // Elbow -> Wrist
    const forearmRightGroup = new THREE.Group();
    forearmRightGroup.position.set(0, -0.28, 0);
    upperArmRight.add(forearmRightGroup);

    const forearmRightGeo = new THREE.CylinderGeometry(0.05, 0.04, 0.26, 8);
    forearmRightGeo.translate(0, -0.13, 0);
    const forearmRight = new THREE.Mesh(forearmRightGeo, hoodieMaterial);
    forearmRight.rotation.x = -1.55;
    forearmRight.rotation.y = 0.15;
    forearmRight.castShadow = true;
    forearmRightGroup.add(forearmRight);

    // R Hand
    const handRightGeo = new THREE.SphereGeometry(0.035, 8, 8);
    const handRight = new THREE.Mesh(handRightGeo, skinMaterial);
    handRight.position.set(0, -0.26, 0);
    forearmRight.add(handRight);

    // Legs (Thighs & Calves sitting)
    const thighGeo = new THREE.CylinderGeometry(0.08, 0.075, 0.38, 8);
    thighGeo.translate(0, -0.19, 0);
    const thighL = new THREE.Mesh(thighGeo, hoodieMaterial);
    thighL.position.set(-0.14, 0.05, 0.06);
    thighL.rotation.x = 1.45;
    thighL.castShadow = true;
    devGroup.add(thighL);

    const thighR = thighL.clone();
    thighR.position.x = 0.14;
    devGroup.add(thighR);

    const calfGeo = new THREE.CylinderGeometry(0.07, 0.06, 0.38, 8);
    calfGeo.translate(0, -0.19, 0);
    const calfL = new THREE.Mesh(calfGeo, hoodieMaterial);
    calfL.position.set(-0.14, 0.05, -0.32);
    calfL.castShadow = true;
    devGroup.add(calfL);

    const calfR = calfL.clone();
    calfR.position.x = 0.14;
    devGroup.add(calfR);

    // 6. CODE FLOATING PARTICLES
    const particleCount = 15;
    const particles: THREE.Mesh[] = [];
    const particleData: Array<{
      speedY: number;
      speedX: number;
      speedZ: number;
      maxY: number;
      startX: number;
      startZ: number;
    }> = [];

    const colors = [0x22d3ee, 0x10b981, 0x8b5cf6]; // cyan, green, purple

    for (let i = 0; i < particleCount; i++) {
      let partGeo;
      if (Math.random() > 0.4) {
        // glowing tiny box code character
        partGeo = new THREE.BoxGeometry(0.015 + Math.random() * 0.02, 0.015 + Math.random() * 0.02, 0.005);
      } else {
        partGeo = new THREE.SphereGeometry(0.01 + Math.random() * 0.01, 4, 4);
      }

      const pColor = colors[Math.floor(Math.random() * colors.length)];
      const pMat = new THREE.MeshBasicMaterial({
        color: pColor,
        transparent: true,
        opacity: 0.3 + Math.random() * 0.6,
      });

      const pMesh = new THREE.Mesh(partGeo, pMat);
      
      const startX = -0.18 + Math.random() * 0.36;
      const startY = 0.85 + Math.random() * 0.12;
      const startZ = -0.05 + Math.random() * 0.20;

      pMesh.position.set(startX, startY, startZ);
      workspace.add(pMesh);
      particles.push(pMesh);

      particleData.push({
        speedY: 0.006 + Math.random() * 0.01,
        speedX: -0.0025 + Math.random() * 0.005,
        speedZ: -0.002 - Math.random() * 0.004, // drift to programmer
        maxY: 1.35 + Math.random() * 0.35,
        startX,
        startZ,
      });
    }

    setLoading(false);

    // Animation Loop Variables
    const clock = new THREE.Clock();
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsed = clock.getElapsedTime();

      // Typing animation (jitter + sine wave)
      const typeSpeedL = 26;
      const typeSpeedR = 22;
      
      const waveL = Math.sin(elapsed * typeSpeedL) * 0.012 + Math.cos(elapsed * 11) * 0.004;
      forearmLeft.rotation.x = -1.52 + waveL;
      forearmLeft.rotation.y = -0.15 + Math.sin(elapsed * 8) * 0.025;
      handLeft.rotation.z = Math.sin(elapsed * 30) * 0.06;

      const waveR = Math.cos(elapsed * typeSpeedR) * 0.012 + Math.sin(elapsed * 13) * 0.004;
      forearmRight.rotation.x = -1.52 + waveR;
      forearmRight.rotation.y = 0.15 + Math.cos(elapsed * 7) * 0.025;
      handRight.rotation.z = Math.cos(elapsed * 28) * 0.06;

      // Head movements
      headGroup.rotation.x = 0.12 + Math.sin(elapsed * 1.6) * 0.025;
      headGroup.rotation.y = Math.sin(elapsed * 0.6) * 0.06 + Math.cos(elapsed * 0.9) * 0.02;
      headGroup.rotation.z = Math.cos(elapsed * 0.8) * 0.015;

      // Glowing screen light pulsing
      screenLight.intensity = 1.8 + Math.sin(elapsed * 16) * 0.25;

      // Particles rising
      for (let i = 0; i < particleCount; i++) {
        const p = particles[i];
        const data = particleData[i];

        p.position.y += data.speedY;
        p.position.x += data.speedX;
        p.position.z += data.speedZ;

        p.rotation.x += 0.015;
        p.rotation.y += 0.025;

        // Fade out
        const riseFrac = (p.position.y - 0.85) / (data.maxY - 0.85);
        if (p.material instanceof THREE.MeshBasicMaterial) {
          p.material.opacity = Math.max(0, (1 - riseFrac) * 0.85);
        }

        // Reset
        if (p.position.y > data.maxY) {
          p.position.y = 0.85;
          p.position.x = data.startX;
          p.position.z = data.startZ;
          if (p.material instanceof THREE.MeshBasicMaterial) {
            p.material.opacity = 0.85;
          }
        }
      }

      // Diorama idle animations (magical levitation & slow background rotation)
      workspace.position.y = Math.sin(elapsed * 1.3) * 0.04;
      workspace.rotation.y = elapsed * 0.045; // slow auto rotation!

      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    // Resize handler
    const handleResize = () => {
      if (!containerRef.current) return;
      width = containerRef.current.clientWidth || 300;
      height = containerRef.current.clientHeight || 300;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Clean up on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      
      // Dispose controllers
      controls.dispose();
      renderer.dispose();
      
      // Recursive scene cleanup
      scene.traverse((object) => {
        if (!(object instanceof THREE.Mesh)) return;
        
        if (object.geometry) {
          object.geometry.dispose();
        }
        
        if (object.material) {
          if (Array.isArray(object.material)) {
            object.material.forEach((mat) => mat.dispose());
          } else {
            object.material.dispose();
          }
        }
      });
      scene.clear();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="w-full h-full relative flex items-center justify-center select-none"
      style={{ minHeight: '300px' }}
    >
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-transparent z-10">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-violet-500"></div>
        </div>
      )}
      
      <canvas 
        ref={canvasRef} 
        className="w-full h-full cursor-grab active:cursor-grabbing outline-none block"
      />
      
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-[10px] md:text-xs font-semibold text-gray-400 bg-gray-950/70 backdrop-blur-md px-3 py-1.5 rounded-full pointer-events-none transition-opacity duration-300 opacity-60 hover:opacity-100 flex items-center gap-1.5 border border-white/5 whitespace-nowrap">
        <svg className="w-3.5 h-3.5 text-cyan-400 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
        </svg>
        <span>Drag to rotate · Scroll to zoom</span>
      </div>
    </div>
  );
}
