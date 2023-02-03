import DataExplorer from "./components/DataExplorer";

import { data } from "./data/config";

const Home = () => {
  return (
    <main>
      <DataExplorer data={data} />
    </main>
  );
};

export default Home;
