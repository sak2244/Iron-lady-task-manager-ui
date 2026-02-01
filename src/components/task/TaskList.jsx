import TaskRow from "./TaskRow";

export default function TaskList({ tasks, onUpdateStatus, onDelete }) {
  return (
    <div>
      <h2 className="font-semibold mb-4">
        Recent Tasks{" "}
        <span className="text-xs text-slate-400">{tasks.length} total</span>
      </h2>

      <div className="space-y-3">
        {tasks.map((task) => (
          <TaskRow
            key={task.id}
            task={task}
            onUpdateStatus={onUpdateStatus}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
}
