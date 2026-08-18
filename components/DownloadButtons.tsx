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
        className="btn-store"
      >
        <img src="/google.png" alt="" className="w-6 h-6" />
        <span>Get it on Google Play</span>
      </button>
      <button
        onClick={() => window.open("https://apple.com/app-store", "_blank")}
        className="btn-store"
      >
        <img src="/apple.png" alt="" className="w-5 h-5" />
        <span>Available on App Store</span>
      </button>
    </div>
  );
};

export default DownloadButtons;