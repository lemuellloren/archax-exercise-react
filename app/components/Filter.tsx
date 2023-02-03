"use client";

const Filter = () => {
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
        />
      </form>
      <div className="flex justify-between">
        <div>min</div>
        <div>max</div>
      </div>
    </div>
  );
};

export default Filter;
