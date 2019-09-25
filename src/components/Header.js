import React from 'react'
import PropTypes from 'prop-types'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-diamond"></span>
    </div>
    <div className="content">
      <div className="inner">
        <h1>K-Sato</h1>
        <p>
          Dedicated software-engineer specializing in Web application
          development.
          <br />
          Ruby/JavaScript/TypeScript/Go/C
        </p>
        <ul className="icons">
          <li>
            <a
              href="https://github.com/K-Sato1995"
              target="_blank"
              className="icon fa-github"
            >
              <span className="label">GitHub</span>
            </a>
          </li>
          <li>
            <strong>
              <a
                href="https://dev.to/k_penguin_sato"
                target="_blank"
                className="icon"
              >
                Dev
              </a>
            </strong>
          </li>
          <li>
            <a
              href="https://qiita.com/k-penguin-sato"
              target="_blank"
              className="icon fa-quora"
            ></a>
          </li>
          <li>
            <strong>
              <a
                href="https://www.wantedly.com/users/115232179"
                target="_blank"
                className="icon fa-wikipedia-w"
              ></a>
            </strong>
          </li>
        </ul>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            Experience
          </a>
        </li>
        <li>
          <a href="https://k-sato1995.github.io/blog/" target="_blank">
            BLOG
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              window.open('mailto:katsuki_sato0130@icloud.com')
            }}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
