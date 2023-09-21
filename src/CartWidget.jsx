import './CartWidget.css'; // Importa los estilos del CartWidget

function CartWidget() {
  return (
    <div className="cart-widget">
      <i className="fas fa-shopping-cart"></i>
      <span className="cart-count">6</span> {/* Este servira luego para indicar la cantidad de elementos que tenemos en el carrito, pero por ahora es un numero fijo */}
    </div>
  );
}

export default CartWidget;