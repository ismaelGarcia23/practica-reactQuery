import type { LucideIcon  } from 'lucide-react';

import { NavLink } from "react-router-dom";

// Este componente detecta automáticamente si está activo
export const NavItem = ({ to, icon: Icon, label, subLabel }: { to: string, icon: LucideIcon, label: string, subLabel: string }) => {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) => `
          group flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200
          ${isActive 
            ? "bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-900/20 border border-indigo-500/20" 
            : "text-slate-400 hover:bg-slate-800 hover:text-white"
          }
        `}
      >
        {({ isActive }) => (
          <>
            {/* El icono cambia de color sutilmente al hacer hover si no está activo */}
            <Icon size={22} className={isActive ? "text-white" : "group-hover:text-indigo-400 transition-colors"} />
            
            <div className="flex flex-col">
              <span className="font-medium text-sm">{label}</span>
              {/* El subtítulo cambia de color: claro si está activo, oscuro si no */}
              <span className={`text-[10px] ${isActive ? "text-indigo-200" : "text-slate-500"}`}>
                {subLabel}
              </span>
            </div>
          </>
        )}
      </NavLink>
    </li>
  );
};