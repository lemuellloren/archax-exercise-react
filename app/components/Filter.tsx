"use client";

import { FC, useState } from "react";
import { ApplicationData } from "../types";

const Filter: FC<ApplicationData> = ({ data }) => {
  const [spend, setSpend] = useState(0);
  // Triggered when the value gets updated while scrolling the slider:
  const filterData = data.filter((spending) => {
    return spending.spend;
  });
  const handleInput = (e: any) => {
    setSpend(e.target.value);
  };
  return (
    <div>
      <form className="pb-5">
        <label
          htmlFor="default-range"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Spending
        </label>
        <input
          id="default-range"
          type="range"
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
          onInput={handleInput}
        />
      </form>
      <div className="flex justify-between">
        <div>${spend}</div>
        <div>$0000</div>
      </div>
    </div>
  );
};

export default Filter;
