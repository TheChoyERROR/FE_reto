import React, { useState } from 'react';
import { createSubCategoria } from '../api/subCategoriaApi';

function SubCategoriaForm({ onNewSubCategoria, onClose }) {
  const [categoriaId, setCategoriaId] = useState('');
  const [nombre, setNombre] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { categoriaId: Number(categoriaId), nombre };
    const newSubCategoria = await createSubCategoria(payload);
    onNewSubCategoria(newSubCategoria);
    setCategoriaId('');
    setNombre('');
    onClose(); // Cierra el modal al enviar
  };

  return (
    <form className="subcategoria-form" onSubmit={handleSubmit}>
      <div>
        <label>Id de la Categoría:</label>
        <input
          type="number"
          value={categoriaId}
          onChange={(e) => setCategoriaId(e.target.value)}
        />
      </div>
      <div>
        <label>Nombre de SubCategoría:</label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>
      <div>
        <button type="submit">Crear Sub-Categoría</button>
        <button type="button" onClick={onClose}>Cancelar</button>
      </div>
    </form>
  );
}

export default SubCategoriaForm;