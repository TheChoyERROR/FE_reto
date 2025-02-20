import axios from 'axios';

const API_URL = '/api/subcategorias';

export const fetchSubCategorias = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createSubCategoria = async (data) => {
  const response = await axios.post(API_URL, data);
  return response.data;
};

export const updateSubCategoria = async (id, data) => {
  const response = await axios.put(`${API_URL}/${id}`, data);
  return response.data;
};

export const deleteSubCategoria = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};