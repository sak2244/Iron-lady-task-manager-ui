import { FiBell, FiUser } from "react-icons/fi";

export default function Header() {
  return (
    <header className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
        <h1 className="font-semibold text-lg">
          Iron Lady <span className="text-slate-400">— Task Manager</span>
        </h1>

        <div className="flex items-center gap-4">
          <FiBell className="text-xl text-slate-500 cursor-pointer" />
          <div className="flex items-center gap-2">
            <FiUser className="text-lg" />
          </div>
        </div>
      </div>
    </header>
  );
}
