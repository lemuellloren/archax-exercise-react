"use client";

import { FC, useState } from "react";
import { ApplicationNavProps } from "../types";

const Filter: FC<ApplicationNavProps> = ({ data, setItem }) => {
  const maxSpend = Math.max(...data.map((item) => item.spend));
  const minSpend = Math.min(...data.map((item) => item.spend));
  const [spend, setSpend] = useState(minSpend);
  // Triggered when the value gets updated while scrolling the slider:
  const handleInput = (e: any) => {
    const { value } = e.target;
    setSpend(value);
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
          min={minSpend}
          max={maxSpend}
        />
      </form>
      <div className="flex justify-between">
        <div className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          ${spend}
        </div>
        {/* <div>$0000</div> */}
      </div>
    </div>
  );
};

export default Filter;
