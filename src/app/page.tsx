// import Image from "next/image";
import styles from "./page.module.css";
import Chat from "./components/Chat";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>ИИ-помощник для архитектурных проектов</h1>
        <Chat />
      </main>
    </div>
  );
}
