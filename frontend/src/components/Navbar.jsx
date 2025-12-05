import "./../styles/global.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">Kaamko Kura</div>

      <div className="nav-right">
        <a href="#" className="login-btn">Log In</a>
        <button className="signup-btn">Sign Up</button>
      </div>
    </nav>
  );
}

export default Navbar;
