import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/introduction">Introduction</Link>
        </li>
        <li>
          <Link to="/contract">Contract</Link>
        </li>
        <li>
          <Link to="/students">Students</Link>
        </li>
      </ul>
    </nav>
  );
}
