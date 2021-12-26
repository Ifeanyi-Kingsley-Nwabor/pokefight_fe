import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="page-footer" id="footer">
      <div className="container container_footer">
        <div className="row container_footer">
          <div className="col l4 s12">
            <h5 className="white-text">Contact</h5>
            <ul className="grey-text text-lighten-4">
              <li>
                <a
                  className="grey-text text-lighten-3"
                  href="nwaborkingsley@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Email: nwaborkingsley@gmail.com
                </a>
              </li>
              <li>
                <a
                  className="grey-text text-lighten-3"
                  href="https://github.com/Ifeanyi-Kingsley-Nwabor"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  className="grey-text text-lighten-3"
                  href="https://de.linkedin.com/in/iknwabor"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Linkedin
                </a>
              </li>
            </ul>
          </div>
          <div className="col l4 s12">
            <h5 className="white-text">Repository</h5>
            <li style={{ listStyle: "none" }}>
              <a
                className="grey-text text-lighten-3"
                href="https://github.com/Ifeanyi-Kingsley-Nwabor/pokefight_fe.git"
                target="_blank"
                rel="noopener noreferrer"
              >
                Front-end
              </a>
            </li>
            <li style={{ listStyle: "none" }}>
              <a
                className="grey-text text-lighten-3"
                href="https://github.com/Ifeanyi-Kingsley-Nwabor/pokefight_project.git"
                target="_blank"
                rel="noopener noreferrer"
              >
                Back-end
              </a>
            </li>
          </div>
          <div className="col l4 s12">
            <h5 className="white-text">Tech-stack</h5>
            <ul>
              <li>
                <Link
                  className="grey-text text-lighten-3"
                  to="https://www.mongodb.com/mern-stack"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  MERN stack
                </Link>
              </li>
            </ul>
          </div>
          <div className="col l4 s12">
            <h5 className="white-text">Content</h5>
            <ul>
              <li>
                <a className="grey-text text-lighten-3" href="/about">
                  About
                </a>
              </li>
              <li>
                <a
                  className="grey-text text-lighten-3"
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  className="grey-text text-lighten-3"
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Projects
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="footer-copyright">© 2021 Copyright</p>
      </div>
    </footer>
  );
};

export default Footer;
