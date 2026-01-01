// import Image from "next/image";
import styles from "./page.module.css";
import Projects from "./components/Projects";

export default async function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>ИИ-помощник для архитектурных проектов</h1>
        <Projects />
      </main>
    </div>
  );
}
