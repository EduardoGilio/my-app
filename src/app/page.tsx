import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Hello, Next.js</h1>
      <h2>Belligooooooooooool</h2>
      <h3>Titulo 3</h3>
      <Link href={"/sobre"}>Sobre</Link>
    </main>
  );
}
