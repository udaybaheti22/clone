import { ArrowLeft, Home, Share2, Layers } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function AadhaarCard() {
  const navigate = useNavigate();

  const handleDownload = async () => {
    try {
      const res = await fetch("/aadhar.png");
      if (!res.ok) return;
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "aadhaar-card.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch {
      // silent
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center">
      <div className="w-full max-w-md bg-white min-h-screen flex flex-col relative shadow-xl">
        {/* Top bar */}
        <div className="flex items-center justify-between px-4 pt-10 pb-4">
          <button
            onClick={() => navigate("/")}
            className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center text-gray-800 transition-colors -ml-1"
            aria-label="Go back"
          >
            <ArrowLeft className="w-6 h-6" strokeWidth={2.3} />
          </button>
          <div className="text-base font-bold text-gray-900">Aadhaar Card</div>
          <div className="w-10" />
        </div>

        {/* Image area */}
        <div className="flex-1 px-5 py-2 pb-28 overflow-y-auto">
          <div className="w-full rounded-3xl overflow-hidden bg-white shadow-card">
            <img
              src="/aadhar.png"
              alt="Aadhaar Card"
              className="w-full h-auto object-contain bg-white"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = "none";
              }}
            />
          </div>
        </div>

        {/* Bottom Actions - icons only, no text */}
        <nav className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-8 pt-4 pb-7 flex items-center justify-around">
          <button
            onClick={() => navigate("/")}
            className="w-12 h-12 rounded-2xl flex items-center justify-center text-gray-500 hover:bg-gray-50 hover:text-digi-700 transition-colors"
            aria-label="Home"
          >
            <Home className="w-7 h-7" strokeWidth={2} />
          </button>
          <button
            className="w-12 h-12 rounded-2xl flex items-center justify-center text-gray-500 hover:bg-gray-50 hover:text-digi-700 transition-colors"
            aria-label="Share"
          >
            <Share2 className="w-7 h-7" strokeWidth={2} />
          </button>
          <button
            onClick={handleDownload}
            className="w-12 h-12 rounded-2xl flex items-center justify-center text-gray-500 hover:bg-gray-50 hover:text-digi-700 transition-colors"
            aria-label="Download"
          >
            <Layers className="w-7 h-7" strokeWidth={2} />
          </button>
        </nav>
      </div>
    </div>
  );
}
