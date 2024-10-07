"use client";

// components/BadmintonField.js
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function Field() {
  const { scene } = useGLTF('/san_cau.gltf');

  return <primitive object={scene} scale={1} />;
}

export default function FieldScene() {
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <Canvas camera={{ position: [10, 10, 10], fov: 75 }}>
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Suspense fallback={null}>
          <Field />
        </Suspense>
        <OrbitControls
          enableDamping={true}
          dampingFactor={0.1}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
}

