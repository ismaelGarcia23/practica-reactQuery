import { Database, ShoppingCart } from 'lucide-react';

import { NavItem } from './NavItem';

// 2. Tu componente de navegación principal queda mucho más limpio
export default function Navigation() {
  return (
    <nav className="flex-1">
      <ul className="space-y-3">
        
        {/* Opción 1: Categorías */}
        <NavItem 
          to="/categorias" 
          icon={Database} 
          label="Categoría" 
          subLabel="Gestión global" 
        />

        {/* Opción 2: Productos */}
        {/* Nota: Asegúrate de que tu ruta en App.tsx sea "/productos" (minúscula) */}
        <NavItem 
          to="/Productos" 
          icon={ShoppingCart} 
          label="Productos" 
          subLabel="Inventario" 
        />

      </ul>
    </nav>
  );
}