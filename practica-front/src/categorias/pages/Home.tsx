import HeaderLogo from '../components/HeaderLogo';
import UserProfile from '../components/UserProfile';
import Navigation from '../components/Navigation';
import { Outlet } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white flex flex-col py-8 px-6 shadow-xl z-10">
        <HeaderLogo />
        <UserProfile />
        <Navigation />
        <div className="text-xs text-slate-600 text-center mt-auto">
          v1.0.0
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-10">
        <Outlet />
      </main>
    </div>
  );
}