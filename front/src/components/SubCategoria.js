import React, { useState } from 'react';
import { createSubCategoria } from '../api/subCategoriaApi';

function SubCategoriaForm({ onNewSubCategoria }) {
  const [categoriaId, setCategoriaId] = useState('');
  const [nombre, setNombre] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Se espera que categoriaId sea numérico
    const payload = { categoriaId: Number(categoriaId), nombre };
    const newSubCategoria = await createSubCategoria(payload);
    onNewSubCategoria(newSubCategoria);
    setCategoriaId('');
    setNombre('');
  };

  return (
    <form className="subcategoria-form" onSubmit={handleSubmit}>
      <div>
        <label>ID de Categoría:</label>
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
        <button type="submit">Crear SubCategoría</button>
      </div>
    </form>
  );
}

export default SubCategoriaForm;