import { useState } from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import TaskForm from "./components/task/TaskForm";
import TaskList from "./components/task/TaskList";
import StatsGrid from "./components/dashboard/StatsGrid";
import initialTasks from "./data/tasks";

export default function App() {
  const [tasks, setTasks] = useState(initialTasks);

  const addTask = (task) => setTasks([...tasks, { ...task, id: Date.now() }]);

  const updateStatus = (id, status) =>
    setTasks(tasks.map((t) => (t.id === id ? { ...t, status } : t)));

  const deleteTask = (id) => setTasks(tasks.filter((t) => t.id !== id));

  return (
    <div className="bg-slate-50 min-h-screen">
      <Header />

      <main className="max-w-7xl mx-auto px-6 py-6">
        <TaskForm onAdd={addTask} />
        <StatsGrid tasks={tasks} />
        <TaskList
          tasks={tasks}
          onUpdateStatus={updateStatus}
          onDelete={deleteTask}
        />
      </main>

      <Footer />
    </div>
  );
}
