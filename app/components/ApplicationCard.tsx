"use client";

import React, { FC } from "react";
import { ApplicationData } from "../types";

const ApplicationCard: FC<ApplicationData> = ({ data }) => {
  return (
    <div className="container p-10 h-screen overflow-auto">
      <div className="grid grid-cols-3 gap-4">
        {data &&
          data.map((data) => (
            <div
              key={data.id}
              className="w-full block p-6 rounded-lg shadow bg-gray-800 hover:bg-gray-900"
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
