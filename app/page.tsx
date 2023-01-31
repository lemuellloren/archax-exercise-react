import { Inter } from "@next/font/google";
import ApplicationCard from "./components/ApplicationCard";
import Sidebar from "./components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="w-full flex">
      <Sidebar />
      <ApplicationCard />
    </main>
  );
}
