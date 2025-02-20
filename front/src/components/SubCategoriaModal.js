import React from 'react';
import Modal from './Modal';
import SubCategoriaForm from './SubCategoriaForm';
import SubCategoriaList from './SubCategoriaList';
import './Modal.css';

function SubCategoriaModal({ 
  isOpen, 
  onClose, 
  subCategorias, 
  setSubCategorias, 
  onNewSubCategoria, 
  onEditSubCategoria 
}) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2>Gestión de SubCategorías</h2>
      <SubCategoriaForm 
        onNewSubCategoria={onNewSubCategoria} 
        onClose={onClose}
      />
      <SubCategoriaList 
        subCategorias={subCategorias} 
        setSubCategorias={setSubCategorias}
        onEdit={onEditSubCategoria}
      />
    </Modal>
  );
}

export default SubCategoriaModal;