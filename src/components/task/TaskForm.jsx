import { useState } from "react";
import { FiBriefcase, FiUser, FiPlus } from "react-icons/fi";

export default function TaskForm({ onAdd }) {
  const [client, setClient] = useState("");
  const [assigned, setAssigned] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!client || !assigned) return;

    onAdd({
      client,
      assigned,
      status: "New",
    });

    setClient("");
    setAssigned("");
  };

  return (
    <form
      onSubmit={submit}
      className="bg-white border border-slate-200 rounded-xl p-6 mb-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
        {/* Client Name */}
        <div className="md:col-span-5">
          <label className="block text-xs font-semibold text-slate-500 uppercase mb-2">
            Client Name
          </label>
          <div className="relative">
            <FiBriefcase className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="e.g. Acme Corp"
              value={client}
              onChange={(e) => setClient(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Assigned To */}
        <div className="md:col-span-5">
          <label className="block text-xs font-semibold text-slate-500 uppercase mb-2">
            Assigned To
          </label>
          <div className="relative">
            <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="e.g. Sarah Connor"
              value={assigned}
              onChange={(e) => setAssigned(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Add Task Button */}
        <div className="md:col-span-2">
          <button
            type="submit"
            className="w-full h-[42px] bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg flex items-center justify-center gap-2 transition"
          >
            <FiPlus />
            Add Task
          </button>
        </div>
      </div>
    </form>
  );
}
