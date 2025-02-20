//// filepath: /d:/Data/FE_reto/front/src/App.js
import React, { useState, useEffect } from 'react';
import CategoriaList from './components/CategoriaList';
import CategoriaForm from './components/CategoriaForm';
import SubCategoriaModal from './components/SubCategoriaModal';
import { fetchCategorias, createCategoria, updateCategoria } from './api/categoriaApi';
import { fetchSubCategorias } from './api/subCategoriaApi';
import './components/styles.css';

function App() {
  const [categorias, setCategorias] = useState([]);
  const [selectedCategoria, setSelectedCategoria] = useState(null);
  const [subCategorias, setSubCategorias] = useState([]);
  const [showSubCategoriaModal, setShowSubCategoriaModal] = useState(false);

    useEffect(() => {
    const loadData = async () => {
      const dataCategorias = await fetchCategorias();
      // Si dataCategorias no es array, lo forzamos a serlo (o mostramos error)
      setCategorias(Array.isArray(dataCategorias) ? dataCategorias : []);
      const dataSubCategorias = await fetchSubCategorias();
      setSubCategorias(Array.isArray(dataSubCategorias) ? dataSubCategorias : []);
    };
    loadData();
  }, []);

  const onFormSubmit = async (categoriaData) => {
    if (selectedCategoria) {
      // Actualización
      const updated = await updateCategoria(selectedCategoria.id, categoriaData);
      setCategorias(categorias.map(cat => cat.id === selectedCategoria.id ? updated : cat));
    } else {
      // Creación
      const newCategoria = await createCategoria(categoriaData);
      setCategorias([...categorias, newCategoria]);
    }
    setSelectedCategoria(null);
  };

  const handleEditCategoria = (id) => {
    const categoria = categorias.find(cat => cat.id === id);
    setSelectedCategoria(categoria);
  };

  const handleNewSubCategoria = (newSubCategoria) => {
    setSubCategorias([...subCategorias, newSubCategoria]);
  };

  const handleEditSubCategoria = (id) => {
    // Implementar lógica de edición de subcategoría si es necesario
  };

  return (
    <div className="App">
      <h1>Reto</h1>
      <CategoriaForm 
        onFormSubmit={onFormSubmit} 
        selectedCategoria={selectedCategoria}
        onCancel={() => setSelectedCategoria(null)}
      />
      <CategoriaList 
        categorias={categorias} 
        setCategorias={setCategorias}
        onEdit={handleEditCategoria}
      />
      <hr />
      <h2>Gestión de SubCategorías</h2>
      <button onClick={() => setShowSubCategoriaModal(true)}>
        Gestionar Sub Categorías
      </button>
      <SubCategoriaModal 
        isOpen={showSubCategoriaModal}
        onClose={() => setShowSubCategoriaModal(false)}
        subCategorias={subCategorias}
        setSubCategorias={setSubCategorias}
        onNewSubCategoria={handleNewSubCategoria}
        onEditSubCategoria={handleEditSubCategoria}
      />
    </div>
  );
}

export default App;