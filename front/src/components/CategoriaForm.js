import React, { useState, useEffect } from 'react';

function CategoriaForm({ onFormSubmit, selectedCategoria, onCancel }) {
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');

    useEffect(() => {
        if (selectedCategoria) {
            setNombre(selectedCategoria.nombre);
            setDescripcion(selectedCategoria.descripcion);
        } else {
            setNombre('');
            setDescripcion('');
        }
    }, [selectedCategoria]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onFormSubmit({ nombre, descripcion });
        setNombre('');
        setDescripcion('');
    };

    return (
        <form className="categoria-form" onSubmit={handleSubmit}>
            <div>
                <label>Nombre: </label>
                <input 
                  type="text" 
                  value={nombre} 
                  onChange={(e) => setNombre(e.target.value)} 
                />
            </div>
            <div>
                <label>Descripción: </label>
                <input 
                  type="text" 
                  value={descripcion} 
                  onChange={(e) => setDescripcion(e.target.value)} 
                />
            </div>
            <div>
                <button type="submit">Guardar</button>
                {selectedCategoria && (
                    <button type="button" onClick={onCancel}>Cancelar</button>
                )}
            </div>
        </form>
    );
}

export default CategoriaForm;