import PropTypes from 'prop-types';
import './ItemListContainer.css'; // Importa los estilos del ItemListContainer

function ItemListContainer({ bienvenida }) {
  return (
    <div className="item-list-container">
      <h1>{bienvenida}</h1>
      {/*  lista de productos */}
      <img src="/Logo2.png" alt="" />
    </div>
  );
}
// Definiendo las propiedades para PropTypes
ItemListContainer.propTypes = {
  bienvenida: PropTypes.string.isRequired, // Solo aceptara que bienvenida sea una cadena (string) requerida
};

export default ItemListContainer;
