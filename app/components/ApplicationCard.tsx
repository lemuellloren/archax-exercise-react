"use client";

import React from "react";

type Applications = {
  id: string;
  name: string;
  spend: number;
  BCAP1: string;
  BCAP2: string;
  BCAP3: string;
};

interface ApplicationData {
  data: Applications[];
}

const ApplicationCard: React.FC<ApplicationData> = ({ data }) => {
  return (
    <div className="container p-10 h-screen overflow-auto">
      <div className="grid grid-cols-5 gap-4">
        {data &&
          data.map((data) => (
            <div
              key={data.id}
              className="w-full block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
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
