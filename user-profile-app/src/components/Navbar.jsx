import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ display: "flex", gap: "1rem", padding: "1rem", borderBottom: "1px solid #ccc" }}>
      <Link to="/">Home</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/settings">Settings</Link>
    </nav>
  );
}

export default Navbar;
