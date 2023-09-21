import CartWidget from './CartWidget.jsx';
import './Navbar.css'; // Importa los estilos del navbar

function NavBar() {
  return (
    <nav className="navbar">
      <div className="logo">
      <img src="/Logo.png" alt="" />
        <span>Jaboneria Artesanal Limon</span>
      </div>
      <ul className="nav-links">
        <li><a href="/">Inicio</a></li>
        <li><a href="/productos">Productos</a></li>
        <li><a href="/carrito">Mi Carrito</a></li>
        <li><a href="/cuenta">Mi Cuenta</a></li>
      </ul>
      <CartWidget />
    </nav>
  );
}

export default NavBar;
