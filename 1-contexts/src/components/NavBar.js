import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <header className="header">
      <div className="logo">
      <Link to="/">
        <img src="logo192.png" alt="logo"/>
      </Link>
      </div>
      <nav className="navLinks">
      <NavLink to="/Page1" 
        className={({ isActive }) => (isActive ? "navLink active" : "navLink")}
      >
        첫 페이지
      </NavLink><i />
      <NavLink to="/Page2" 
        className={({ isActive }) => (isActive ? "navLink active" : "navLink")}
      >
        둘째 페이지
      </NavLink><i />
      <NavLink to="/Page3" 
        className={({ isActive }) => (isActive ? "navLink active" : "navLink")}
      >
        3번째 페이지
      </NavLink>
      </nav>
    </header>
  );
}