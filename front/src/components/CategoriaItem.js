//// filepath: /d:/Data/FE_reto/front/src/components/CategoriaItem.js
import React from 'react';
import './styles.css';

const CategoriaItem = ({ categoria, onEdit, onDelete }) => {
    return (
        <div className="categoria-item">
            <h3>{categoria.nombre}</h3>
            <p>{categoria.descripcion}</p>
            <button className="edit-btn" onClick={() => onEdit(categoria.id)}>Edit</button>
            <button className="delete-btn" onClick={() => onDelete(categoria.id)}>Delete</button>
        </div>
    );
};

export default CategoriaItem;