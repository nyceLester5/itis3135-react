import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1 className="site-title">
        Welcome to Nyce Lester’s Nova Lion ITIS 3135 Course Page
      </h1>

      {/* Primary Navigation */}
      <nav aria-label="primary navigation">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/introduction">Introduction</Link></li>
          <li><Link to="/contract">Contract</Link></li>

          {/* The assignment requires shortening menu to ONLY 3 pages.
              But if you want to include the full menu temporarily, uncomment this block:

          <li><a href="/tlester5/itis3135/hobby/index.html">Hobby</a></li>
          <li><a href="/tlester5/itis3135/novalion/index.html">Nova Lion</a></li>
          <li><a href="/tlester5/itis3135/website_evaluations.html">Website Evaluations</a></li>
          <li><a href="/tlester5/itis3135/fccfsjs_outline.html">FCC Full Stack JS Outline</a></li>
          <li><a href="/tlester5/itis3135/intro_form.html">Introduction Form</a></li>
          <li><a href="/tlester5/itis3135/project_overview.html">Project Overview</a></li>
          <li><a href="jazzedupdesserts/index.html">Final Project Website</a></li>
          */}
        </ul>
      </nav>

      {/* Secondary "crappy navigation" */}
      <nav aria-label="crappy navigation" className="crappy-nav">
        <ul className="crappy-list">
          <li className="crappy-item">
            <a href="/tlester5/itis3135/stuff/MY&CRAPPY.htm">Crappy Page</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
