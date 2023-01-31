import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="h-screen flex justify-center items-center">
      <h1>Hello</h1>
    </main>
  );
}
