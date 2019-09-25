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
          Deicated software-engineer specializing in Web application
          development.
          <br />
          Ruby/JavaScript/TypeScript/Go/C
        </p>
        <ul className="icons">
          <li>
            <a
              href="https://twitter.com/HuntaroSan"
              className="icon fa-diamond"
            ></a>
          </li>
          <li>
            <a href="https://codebushi.com" className="icon fa-facebook">
              <span className="label">Facebook</span>
            </a>
          </li>
          <li>
            <a href="https://codebushi.com" className="icon fa fa-dev"></a>
          </li>
          <li>
            <a href="https://github.com/K-Sato1995" className="icon fa-github">
              <span className="label">GitHub</span>
            </a>
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
          <a href="https://k-sato1995.github.io/blog/">BLOG</a>
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
