"use client";
import React, { FC, useState } from "react";

import ApplicationCard from "./ApplicationCard";
import { ApplicationData } from "../types";
import Filter from "./Filter";

const DataExplorer: FC<ApplicationData> = ({ data: applications }) => {
  const [item, setItem] = useState(applications);

  const uniqueBCAs: string[] = [];

  const uniqueBCA = applications.filter((application) => {
    const isDuplicate =
      uniqueBCAs.includes(application.BCAP1) &&
      uniqueBCAs.includes(application.BCAP2) &&
      uniqueBCAs.includes(application.BCAP3);
    if (!isDuplicate) {
      uniqueBCAs.push(application.BCAP1);
      uniqueBCAs.push(application.BCAP2);
      uniqueBCAs.push(application.BCAP3);
      return true;
    }

    return false;
  });

  const handleOnclick = (bcap: string) => {
    console.log(bcap);
    const filterData = applications.filter((application) => {
      const isBCAP =
        application.BCAP1 === bcap ||
        application.BCAP2 === bcap ||
        application.BCAP3 === bcap;
      return isBCAP;
    });
    setItem(filterData);
  };

  return (
    <div className="w-full flex">
      {/* Sidebar  */}
      <aside className="h-screen w-full p-6 sm:w-60 dark:bg-gray-900 dark:text-gray-100">
        <nav className="space-y-8 text-sm">
          <div className="space-y-2">
            <h2 className="text-sm font-semibold tracking-widest uppercase dark:text-gray-400">
              Navigation
            </h2>
            <div className="h-96 overflow-auto">
              {uniqueBCA &&
                uniqueBCA.map((bca, index) => (
                  <div key={index}>
                    <button
                      onClick={(e) => {
                        handleOnclick(bca.BCAP1);
                      }}
                    >
                      {bca.BCAP1}
                    </button>
                    <button
                      onClick={(e) => {
                        handleOnclick(bca.BCAP2);
                      }}
                    >
                      {bca.BCAP2}
                    </button>
                    <button
                      onClick={(e) => {
                        handleOnclick(bca.BCAP3);
                      }}
                    >
                      {bca.BCAP3}
                    </button>
                  </div>
                ))}
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="text-sm font-semibold tracking-widest uppercase dark:text-gray-400">
              Filter
            </h2>
            <Filter />
          </div>
          {/* Clear/Reset data  */}
          <button
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            onClick={() => {
              setItem(applications);
            }}
          >
            Clear
          </button>
        </nav>
      </aside>
      {/* End Sidebar*/}
      <ApplicationCard data={item} />
    </div>
  );
};

export default DataExplorer;
