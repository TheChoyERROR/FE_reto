import React from 'react';
import { deleteCategoria } from '../api/categoriaApi';
import CategoriaItem from './CategoriaItem';

const CategoriaList = ({ categorias, setCategorias, onEdit }) => {
    const handleDelete = async (id) => {
        await deleteCategoria(id);
        setCategorias(categorias.filter(categoria => categoria.id !== id));
    };

    return (
        <div>
            <h2>Lista de Categorías</h2>
            <ul>
                {categorias.map(categoria => (
                    <CategoriaItem 
                        key={categoria.id} 
                        categoria={categoria} 
                        onEdit={onEdit}
                        onDelete={handleDelete}
                    />
                ))}
            </ul>
        </div>
    );
};

export default CategoriaList;