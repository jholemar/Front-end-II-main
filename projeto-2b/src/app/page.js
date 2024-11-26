import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <h1>Meu Titulo</h1>
      <Image className={styles.img} src="/images/dinheiro.webp" alt='paia' width={600} height={470}/>
      
    </div>
  );
}
