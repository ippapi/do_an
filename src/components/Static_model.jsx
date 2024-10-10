"use client";

import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

const Model = ({modelPath, scale}) => {
  const { scene } = useGLTF(modelPath);
  const [mousePos, setMousePos] = useState({x:0, y:0})
  const meshRef = useRef()

  useEffect(() => {
    const handleMouseMove = (event) => {
      const normalizedX = (event.clientX / window.innerWidth)
      const normalizedY = (event.clientY / window.innerWidth)

      setMousePos({x: normalizedX, y: normalizedY})
    }

  window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useFrame(() => {
    meshRef.current.rotation.y += (mousePos.x * Math.PI * 0.25 - meshRef.current.rotation.y) * 0.1
    meshRef.current.rotation.x += (mousePos.y * Math.PI * 0.1 - meshRef.current.rotation.x) * 0.1
  })

  return <primitive ref={meshRef} object={scene} scale={scale} />;
}

const Static_model = ({ modelPath, scale }) => {
  return (
    <div style={{ height: '500px', width: '500px'}}>
      <Canvas camera={{ position: [10, 10, 10], fov: 75 }}>
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Model modelPath={ modelPath } scale={scale}/>
      </Canvas>
    </div>
  );
}

export default Static_model
