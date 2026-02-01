import StatusBadge from "../ui/StatusBadge";
import Avatar from "../ui/Avatar";
import { FiPlay, FiCheck, FiTrash2 } from "react-icons/fi";

export default function TaskRow({ task, onUpdateStatus, onDelete }) {
  return (
    <div className="bg-white border rounded-xl p-4 flex justify-between items-center">
      {/* LEFT */}
      <div className="flex items-center gap-4">
        <Avatar name={task.client} />

        <div>
          <p className="font-semibold text-slate-900">
            {task.client}
            <span className="text-slate-400"> / {task.assignedTo}</span>
          </p>

          <StatusBadge status={task.status} />
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-3">
        {task.status === "New" && (
          <button
            onClick={() => onUpdateStatus(task.id, "In Progress")}
            className="flex items-center gap-1 text-sm text-blue-600 hover:underline"
          >
            <FiPlay />
            Start
          </button>
        )}

        {task.status === "In Progress" && (
          <button
            onClick={() => onUpdateStatus(task.id, "Completed")}
            className="flex items-center gap-1 text-sm text-green-600 hover:underline"
          >
            <FiCheck />
            Complete
          </button>
        )}

        <button
          onClick={() => onDelete(task.id)}
          className="text-red-500 hover:text-red-600"
          title="Delete Task"
        >
          <FiTrash2 />
        </button>
      </div>
    </div>
  );
}
