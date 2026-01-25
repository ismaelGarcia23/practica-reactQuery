export default function UserProfile() {
  return (
    <div className="flex items-center gap-4 mb-10 p-3 bg-slate-800/50 rounded-xl border border-slate-700/50">
      <img
        src="https://avatars.githubusercontent.com/u/161641330?v=4"
        alt="Avatar"
        className="w-10 h-10 rounded-full border-2 border-indigo-500 shadow-sm"
      />
      <div>
        <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Admin</p>
        <p className="text-sm font-semibold text-gray-100">Ismael Garcia.</p>
      </div>
    </div>
  );
}
