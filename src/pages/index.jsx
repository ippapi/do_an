import Head from 'next/head';
import styles from '@styles/Home.module.css';
import Static_model from '@components/Static_model.jsx';

export default function Home() {
  return (
    <div style={{display:'flex', justifyContent: 'center'}}>
      <Static_model modelPath='/san_cau.gltf' scale={0.5} />
    </div>
  );
}