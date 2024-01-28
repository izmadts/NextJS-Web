import Image from "next/image";
import styles from "./page.module.css";
import BootstrapClient from "@/components/bootstrapclient.js";

export default function Home() {
  return (
    <main className={styles.main}>
     <h1 className="text-danger">bootstrap</h1>
   
     <BootstrapClient/>
    </main>
  );
}
