export default function Avatar({ name }) {
  return (
    <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold">
      {name[0]}
    </div>
  );
}
