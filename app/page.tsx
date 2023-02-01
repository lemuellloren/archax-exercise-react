import ApplicationCard from "./components/ApplicationCard";
import Sidebar from "./components/Sidebar";

import { data } from "./data/config";

const Home = () => {
  return (
    <main className="w-full flex">
      <Sidebar />
      <ApplicationCard data={data} />
    </main>
  );
};

export default Home;
