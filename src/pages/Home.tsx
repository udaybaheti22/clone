import {
  Home as HomeIcon,
  Search,
  Award,
  User,
  ChevronRight,
  ShieldCheck,
  Folder,
  IdCard,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center">
      <div className="w-full max-w-md bg-white min-h-screen flex flex-col relative shadow-xl">
        {/* Header */}
        <div className="bg-gradient-to-br from-digi-700 via-digi-800 to-digi-900 text-white px-5 pt-10 pb-8 rounded-b-[32px] relative overflow-hidden">
          {/* Decorative blobs */}
          <div className="absolute -top-20 -right-16 w-48 h-48 bg-white/5 rounded-full" />
          <div className="absolute top-10 -left-10 w-32 h-32 bg-white/5 rounded-full" />

          {/* Top bar: logo + avatar */}
          <div className="flex items-center justify-between relative z-10">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5">
                <div className="w-8 h-8 rounded-md bg-white/15 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="currentColor">
                    <path d="M3 5C3 3.89543 3.89543 3 5 3H14L21 10V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5Z" />
                    <path d="M14 3V10H21" stroke="#4f46e5" strokeWidth="2" fill="none" />
                    <circle cx="8.5" cy="13.5" r="2.8" fill="#4f46e5" />
                    <rect x="6" y="16.2" width="5" height="1.2" rx="0.4" fill="#4f46e5" />
                  </svg>
                </div>
                <span className="text-xl font-bold tracking-tight">DigiLocker</span>
              </div>
            </div>
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-amber-300 to-amber-500 ring-2 ring-white/30 flex items-center justify-center text-white font-semibold text-sm">
              UB
            </div>
          </div>

          {/* Welcome */}
          <div className="mt-8 relative z-10">
            <h1 className="text-2xl font-bold leading-tight">Welcome, Uday Baheti!</h1>
            <p className="mt-2 text-sm text-white/80 leading-relaxed max-w-[22rem]">
              DigiLocker 'Issued Documents' are at par with original documents as per IT ACT,
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="px-5 pt-6 flex-1 pb-28">
          {/* Issued Documents */}
          <div className="flex items-end justify-between mb-3">
            <h2 className="text-lg font-bold text-gray-900">Issued Documents</h2>
            <button className="bg-digi-50 text-digi-700 text-sm font-semibold px-4 py-1.5 rounded-full">
              See All
            </button>
          </div>

          {/* Aadhaar Card */}
          <button
            onClick={() => navigate("/aadhaar")}
            className="w-full bg-white rounded-2xl p-5 shadow-card flex items-start gap-4 text-left hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.99]"
          >
            <div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 48 48" className="w-10 h-10">
                <defs>
                  <radialGradient id="sun" cx="50%" cy="32%" r="55%">
                    <stop offset="0%" stopColor="#F59E0B" />
                    <stop offset="100%" stopColor="#DC2626" />
                  </radialGradient>
                </defs>
                <circle cx="24" cy="15" r="9" fill="url(#sun)" />
                {[...Array(12)].map((_, i) => {
                  const angle = (i * 30 * Math.PI) / 180;
                  const x1 = 24 + Math.cos(angle) * 11;
                  const y1 = 15 + Math.sin(angle) * 11;
                  const x2 = 24 + Math.cos(angle) * 15;
                  const y2 = 15 + Math.sin(angle) * 15;
                  return (
                    <line
                      key={i}
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke="#DC2626"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  );
                })}
                <g transform="translate(8,24)" stroke="#7C2D12" strokeWidth="1.2" fill="none" strokeLinecap="round">
                  <path d="M8 2 Q16 -6 24 2 T32 2" />
                  <path d="M8 6 Q16 -2 24 6 T32 6" />
                  <path d="M8 10 Q16 2 24 10 T32 10" />
                  <path d="M8 14 Q16 6 24 14 T32 14" />
                  <path d="M8 18 Q16 10 24 18 T32 18" />
                </g>
                <text
                  x="24"
                  y="44"
                  textAnchor="middle"
                  fontSize="6.5"
                  fontWeight="800"
                  fill="#B91C1C"
                  fontFamily="sans-serif"
                >
                  AADHAAR
                </text>
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Aadhaar Card</h3>
                  <p className="mt-1 text-base font-mono text-gray-500 tracking-wide">
                    xxxxxxxx8722
                  </p>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
              </div>
              <p className="mt-2 text-sm text-gray-500">
                Unique Identification Authority of India (UIDAI)
              </p>
            </div>
          </button>

          {/* Credentials Wallet Banner */}
          <div className="mt-5 rounded-2xl bg-gradient-to-r from-digi-50 to-indigo-50 border border-digi-100 p-5 flex items-center justify-between overflow-hidden relative">
            <div className="relative z-10">
              <h3 className="text-base font-bold text-digi-800">Your Credentials Wallet</h3>
              <p className="mt-1 text-sm text-gray-600">All Your Identity cards in one place</p>
              <button className="mt-4 bg-digi-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-digi-800 transition-colors">
                View All Credentials
              </button>
            </div>
            <div className="relative w-28 h-24 flex-shrink-0">
              <div className="absolute inset-0 bg-gradient-to-br from-digi-600 to-digi-800 rounded-xl rotate-6 shadow-md opacity-60" />
              <div className="absolute inset-0 bg-gradient-to-br from-digi-500 to-digi-700 rounded-xl shadow-md p-2.5 text-white">
                <div className="flex items-center gap-1">
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor">
                    <path d="M3 5C3 3.895 3.895 3 5 3H14L21 10V19C21 20.105 20.105 21 19 21H5C3.895 21 3 20.105 3 19V5Z" />
                  </svg>
                  <span className="text-[10px] font-bold">DigiLocker Verified</span>
                </div>
                <div className="mt-2 text-[9px] opacity-80">Verified from Aadhaar</div>
                <div className="mt-1.5">
                  <div className="text-[10px] opacity-80">Name</div>
                  <div className="text-[11px] font-semibold">Aman Mittal</div>
                </div>
                <div className="mt-1">
                  <div className="text-[9px] opacity-80">Created on</div>
                  <div className="text-[10px] font-medium">23/05/2024</div>
                </div>
              </div>
            </div>
            {/* Carousel dots */}
            <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
              <span className="w-2 h-2 rounded-full bg-digi-700" />
              <span className="w-2 h-2 rounded-full bg-digi-200" />
            </div>
          </div>

          {/* DigiLocker Utility */}
          <div className="mt-7">
            <h2 className="text-lg font-bold text-gray-900">DigiLocker Utility</h2>
            <div className="mt-4 grid grid-cols-3 gap-3">
              <div className="bg-gray-50 rounded-2xl p-4 flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-xl bg-white shadow-sm flex items-center justify-center text-digi-700">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <span className="mt-3 text-sm font-medium text-gray-800">Authenticat</span>
              </div>
              <div className="bg-gray-50 rounded-2xl p-4 flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-xl bg-white shadow-sm flex items-center justify-center text-amber-500">
                  <Folder className="w-8 h-8" />
                </div>
                <span className="mt-3 text-sm font-medium text-gray-800">Drive</span>
              </div>
              <div className="bg-gray-50 rounded-2xl p-4 flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-xl bg-white shadow-sm flex items-center justify-center text-blue-500">
                  <IdCard className="w-8 h-8" />
                </div>
                <span className="mt-3 text-sm font-medium text-gray-800">Verifiable</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Nav */}
        <nav className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-2 pt-2 pb-5 flex items-end gap-1">
          <button className="flex-1 flex flex-col items-center gap-1 py-1 text-digi-700">
            <HomeIcon className="w-6 h-6" strokeWidth={2.2} />
            <span className="text-xs font-semibold">Home</span>
          </button>
          <button className="flex-1 flex flex-col items-center gap-1 py-1 text-gray-400">
            <Search className="w-6 h-6" strokeWidth={2} />
            <span className="text-xs font-medium">Search</span>
          </button>
          <button className="flex-1 flex flex-col items-center gap-1 py-1 text-gray-400">
            <Award className="w-6 h-6" strokeWidth={2} />
            <span className="text-xs font-medium">Issued</span>
          </button>
          <button className="flex-1 flex flex-col items-center gap-1 py-1 text-gray-400">
            <User className="w-6 h-6" strokeWidth={2} />
            <span className="text-xs font-medium">Menu</span>
          </button>
          <button className="w-20 h-12 -mt-8 rounded-2xl bg-gradient-to-br from-orange-400 to-orange-500 text-white font-bold text-base shadow-lg shadow-orange-500/30 flex items-center justify-center">
            UMANG
          </button>
        </nav>
      </div>
    </div>
  );
}
