import CategoryList from "../components/CategoryList";

export default function CategoryCrud() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Gestión de procesos de categorias</h2>
      <CategoryList />
      {/* Aquí irá la barra de menú y la tabla */}
    </div>
  );
}