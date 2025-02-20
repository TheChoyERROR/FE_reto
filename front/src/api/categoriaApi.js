import axios from 'axios';

const API_URL = '/api/categorias';

export const fetchCategorias = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const createCategoria = async (categoria) => {
    const response = await axios.post(API_URL, categoria);
    return response.data;
};

export const updateCategoria = async (id, categoria) => {
    const response = await axios.put(`${API_URL}/${id}`, categoria);
    return response.data;
};

export const deleteCategoria = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
};