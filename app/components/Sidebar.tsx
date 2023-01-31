"use client";

const Sidebar = () => {
  const capabilities = [
    "Business Capabilities 1",
    "Business Capabilities 2",
    "Business Capabilities 3",
  ];

  return (
    <aside className=" h-screen w-full p-6 sm:w-60 dark:bg-gray-900 dark:text-gray-100">
      <nav className="space-y-8 text-sm">
        <div className="space-y-2">
          <h2 className="text-sm font-semibold tracking-widest uppercase dark:text-gray-400">
            Navigation
          </h2>
          <div className="flex flex-col space-y-1">
            {capabilities &&
              capabilities.map((capability, index) => (
                <a key={index} rel="noopener noreferrer" href="#">
                  {capability}
                </a>
              ))}
          </div>
        </div>
        <div className="space-y-2">
          <h2 className="text-sm font-semibold tracking-widest uppercase dark:text-gray-400">
            Filter
          </h2>
          <form>
            <input type="range" />
          </form>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
