import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Navbar = () => {
  return ( 
    <nav className="navbar">
      <h1>The BYSL's Blog</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create" style={{
          color: 'white',
          background: '#f1356d',
          borderRadius: '8px'
        }}>New Blog</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;
