import Head from 'next/head';
import styles from '@styles/Home.module.css';
import Field from '@components/Field.jsx';

export default function Home() {
  return (
    <div>
      <Field modelPath='/san_cau.gltf'/>
    </div>
  );
}