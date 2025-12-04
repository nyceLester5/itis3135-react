import { useEffect, useState } from "react";

export default function Footer() {
  const [year, setYear] = useState("");

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer>
      <nav aria-label="footer links">
        <a href="https://webpages.charlotte.edu/tlester5/itis3135/" target="_blank" rel="noopener">
          ITIS3135
        </a>
        <span className="sep" aria-hidden="true">|</span>

        <a href="https://github.com/nyceLester5/nyceLester5.github.io" target="_blank" rel="noopener">
          Github.com
        </a>
        <span className="sep" aria-hidden="true">|</span>

        <a href="https://webpages.charlotte.edu/tlester5/" target="_blank" rel="noopener">
          CLT Web
        </a>
        <span className="sep" aria-hidden="true">|</span>

        <a href="http://nyceLester5.github.io" target="_blank" rel="noopener">
          Github.io
        </a>
        <span className="sep" aria-hidden="true">|</span>

        <a href="https://www.freecodecamp.org/NyceL" target="_blank" rel="noopener">
          freeCodeCamp
        </a>
        <span className="sep" aria-hidden="true">|</span>

        <a href="https://www.codecademy.com/profiles/NyceLester" target="_blank" rel="noopener">
          Codecademy
        </a>
        <span className="sep" aria-hidden="true">|</span>

        <a href="https://www.linkedin.com/in/tranycelester" target="_blank" rel="noopener">
          LinkedIn
        </a>
      </nav>

      <p>
        page built by{" "}
        <a
          href="https://webpages.charlotte.edu/tlester5/itis3135/lesterlabs.co/"
          target="_blank"
          rel="noopener"
        >
          Lester Labs
        </a>{" "}
        © {year}
      </p>

      <div className="validators">
        <a href="https://validator.w3.org/check?uri=referer" id="validation-link-html">
          <img
            src="/tlester5/itis3135/images/button_validation_html5.png"
            width="88"
            height="31"
            alt="Validate webpage HTML"
          />
        </a>

        <a href="https://jigsaw.w3.org/css-validator/check/referer" id="validation-link-css">
          <img
            src="/tlester5/itis3135/images/button_validation_css.png"
            width="88"
            height="31"
            alt="Validate webpage CSS"
          />
        </a>
      </div>
    </footer>
  );
}
