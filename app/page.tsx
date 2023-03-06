import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <ul>
        <li>
          <a href="./about">About</a>
        </li>
        <li>
          <a href="./posts/1">post 1</a>
        </li>
      </ul>
    </main>
  );
}
