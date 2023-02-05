"use client";
import React, { FC, useState } from "react";

import ApplicationCard from "./ApplicationCard";
import { ApplicationData } from "../types";
import Filter from "./Filter";
import ApplicationNav from "./ApplicationNav";

const DataExplorer: FC<ApplicationData> = ({ data: applications }) => {
  const [item, setItem] = useState(applications);
  return (
    <div className="w-full flex">
      {/* Sidebar  */}
      <aside className="w-52 md:w-96 md:h-screen p-2 md:p-6 dark:bg-gray-900 dark:text-gray-100">
        <nav className="space-y-8 text-sm">
          <div className="space-y-2">
            <h2 className="text-sm font-semibold tracking-widest uppercase dark:text-gray-400">
              Navigation
            </h2>
            <div>
              <ApplicationNav
                data={applications}
                item={item}
                setItem={setItem}
              />
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="text-sm font-semibold tracking-widest uppercase dark:text-gray-400">
              Filter
            </h2>
            <Filter data={item} item={item} setItem={setItem} />
          </div>
          {/* Clear/Reset data  */}
          <button
            className="w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
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
