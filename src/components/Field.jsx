"use client";

import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const Field = ({modelPath}) => {
  const { scene } = useGLTF(modelPath);

  const fieldRef = useRef();

  useFrame(() => {
    if(fieldRef.current){
      fieldRef.current.rotation.y += 0.01
    }
  })

  return <primitive ref={fieldRef} object={scene} scale={0.5} />;
}

const FieldScene = ({ modelPath }) => {
  return (
    <div style={{ height: '100px', width: '100px'}}>
      <Canvas camera={{ position: [10, 10, 10], fov: 75 }}>
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Suspense fallback={null}>
          <Field modelPath={ modelPath }/>
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

export default FieldScene
