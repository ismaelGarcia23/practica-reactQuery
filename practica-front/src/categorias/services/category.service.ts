import api from '../services/api.service';
import type { CategoryData } from '../../categorias/interfaces/category.interface.ts';



export const  getCategories = async () => {

    const { data } = await api.get<CategoryData[]>('/categories');
    return data;

};

export  const createCategory = async (category : CategoryData) => {
    const { data } = await  api.post('/categories', category);

    return data;
}


export const deleteCategory = async (id: number) => {
    const { data } = await api.delete(`/categories/${id}`);

    return data;
}