"use client";

const ApplicationCard = () => {
  const data = [
    {
      id: "app-1",
      name: "Application 1",
      spend: 29822,
      BCAP1: "Business Capability 1",
      BCAP2: "Business Capability 1.2",
      BCAP3: "Business Capability 1.2.3",
    },
    {
      id: "app-2",
      name: "Application 2",
      spend: 29822,
      BCAP1: "Business Capability 1",
      BCAP2: "Business Capability 1.2",
      BCAP3: "Business Capability 1.2.3",
    },
    {
      id: "app-3",
      name: "Application 3",
      spend: 29822,
      BCAP1: "Business Capability 1",
      BCAP2: "Business Capability 1.2",
      BCAP3: "Business Capability 1.2.3",
    },
    {
      id: "app-4",
      name: "Application 4",
      spend: 29822,
      BCAP1: "Business Capability 1",
      BCAP2: "Business Capability 1.2",
      BCAP3: "Business Capability 1.2.3",
    },
  ];
  return (
    <div className="container p-10">
      <div className="grid grid-cols-3 gap-4">
        {data &&
          data.map((data) => (
            <div className="w-full block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <a href="#">
                <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {data.name}
                </p>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Total Spend: {data.spend}
                </p>
              </a>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ApplicationCard;
