import { useEffect, useState } from "react";

const DownloadButtons = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <button
        onClick={() => window.open("https://play.google.com", "_blank")}
        className="flex items-center justify-center bg-green-600 text-white px-8 py-3 rounded-full shadow-md transition-all duration-300 hover:bg-green-700 hover:scale-[1.03] focus:outline-none"
      >
        <img src="/google.png" alt="Google Play" className="w-7 h-7 mr-3" />
        <span className="font-medium">Get it on Google Play</span>
      </button>
      <button
        onClick={() => window.open("https://apple.com/app-store", "_blank")}
        className="flex items-center justify-center bg-black text-white px-8 py-3 rounded-full shadow-md transition-all duration-300 hover:bg-gray-800 hover:scale-[1.03] focus:outline-none"
      >
        <img src="/apple.png" alt="App Store" className="w-6 h-6 mr-2" />
        <span className="font-medium">Available on App Store</span>
      </button>
    </div>
  );
};

export default DownloadButtons;
