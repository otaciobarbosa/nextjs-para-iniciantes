"use client"

import Image from "next/image";
import styles from "../../page.module.css";

import { useParams} from 'next/navigation';

export default function Products() {

  const params = useParams();

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>Detalhes do Produto #{params.id}</h1>
      </div>
    </main>
  );
}
