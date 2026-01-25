import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../services/category.service";
import type { CategoryData } from "../interfaces/category.interface";

export default function CategoryList() {
  const { data, isLoading, error } = useQuery<CategoryData[]>({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  if (isLoading) return <div>Cargando...</div>;
  if (error) return <div>Error al cargar categorias</div>;

  return (
    <div className="overflow-x-auto py-4 mt-4">
      <table className="min-w-full bg-white rounded-lg shadow">
        <thead>
          <tr className="bg-slate-100 text-slate-700">
            <th className="py-2 px-4 text-left">ID</th>
            <th className="py-2 px-4 text-left">NOMBRE</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((cat: CategoryData) => (
            <tr key={cat.id} className="border-b">
              <td className="py-2 px-4">{cat.id}</td>
              <td className="py-2 px-4">{cat.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
