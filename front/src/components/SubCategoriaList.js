import React from 'react';
import { deleteSubCategoria } from '../api/subCategoriaApi';

const SubCategoriaItem = ({ subCategoria, onEdit, onDelete }) => {
  return (
    <div className="subcategoria-item">
      <h3>{subCategoria.nombre}</h3>
      <p>Categoria ID: {subCategoria.categoria ? subCategoria.categoria.id : 'N/A'}</p>
      <button className="edit-btn" onClick={() => onEdit(subCategoria.id)}>Edit</button>
      <button className="delete-btn" onClick={() => onDelete(subCategoria.id)}>Delete</button>
    </div>
  );
};

const SubCategoriaList = ({ subCategorias, setSubCategorias, onEdit }) => {
  const handleDelete = async (id) => {
    await deleteSubCategoria(id);
    setSubCategorias(subCategorias.filter(sc => sc.id !== id));
  };

  return (
    <div className="subcategoria-list">
      <h2>Lista de SubCategorías</h2>
      {subCategorias.map(sc => (
        <SubCategoriaItem
          key={sc.id}
          subCategoria={sc}
          onEdit={onEdit}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default SubCategoriaList;