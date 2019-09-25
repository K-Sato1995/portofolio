import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      />
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
            People often find me outgoing, upbeat, self-motivated and silly. I
            grew up in a very small and peaceful town and moved to a huge city
            for college.
          </p>
          <p>
            In college, I majored in political science and mainly spent my time
            there studying international political economy and public economics.
            I also started coding when I was a senior and have been studying
            programming since then.
          </p>
          <p>
            Though what I learnt in college was academically very interesting, I
            didn't necessarily consider myself suitable for a politician or
            economist. I also was not interested in sales or marketing which a
            lot of my friends in the same department ended up doing after
            college. So I ended up getting a job as a webdeveloper since I
            really liked coding and I was really fascinated with the idea of
            createing something unique and original that didn't exist before.
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Experience</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <h2>Work Experience</h2>
          <h3>DIAMOND MEDIA Co.,Ltd. (2019/10 ~ present)</h3>
          <h4>Job Title: Backend engineer</h4>
          <ul>
            <li>
              Developing several web applications to innovate the real estate
              industry by technology.
            </li>
          </ul>

          <h3>Ruby Development Inc. (2018/04 ~ 2019/09)</h3>
          <h4>Job Title: Sowtware engineer</h4>
          <ul>
            <li>
              Developed web applications for our clients as a member of the
              development team mainly using RoR on the back-end and React.js on
              the front-end.
            </li>
            <li>
              Supported training and mentoring new graduates in practical web
              development by reviewing their code and giving feedbacks.
            </li>
          </ul>
          <h3>Neo Career Co., LTD. (2017/02 ~ 2018/01)</h3>
          <h4>Job Title: Intern</h4>
          <ul>
            <li>
              Developed an application to automate creating cost estimates for
              the sales team as an intern in the application development
              department.
            </li>
            <li>
              Helped creating the profit and loss statement for a new project as
              an intern in the project planning department.
            </li>
          </ul>

          <h2>Tech stack</h2>
          <h3>FrontEnd</h3>
          <ul>
            <li>Languages: HTTM5/CSS/JavaScript/TypeScript</li>
            <li>FrameWorks: React/Redux/Apollo-Client</li>
          </ul>
          <h3>BackEnd</h3>
          <ul>
            <li>Languages: Ruby/Go/JavaScript</li>
            <li>FrameWorks: Rails/Express.js</li>
            <li>Database: MySQL/PostgreSQL/SQLite/Redis</li>
            <li>API: RESTful, GraphQL</li>
          </ul>
          <h3>DevOps・Cloud Service</h3>
          <ul>
            <li>Docker/CircleCI/GitHub/GitLab/AWS</li>
          </ul>

          <h2>Certifications</h2>
          <ul>
            <li>Ruby Association Certified Ruby Programmer.</li>
            <li>
              Scored 965 out of 990 on TOEIC (Test of English for International
              Communication).
            </li>
          </ul>

          <h2>Education</h2>
          <ul>
            <li>Meiji University (Bachelor’s Degree in Politics)</li>
            <li>TECH::CAMP (Web Development)</li>
          </ul>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent
            eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam
            erat volutpat. Praesent urna nisi, fringila lorem et vehicula
            lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices.
            Aliquam libero et malesuada fames ac ante ipsum primis in faucibus.
            Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit
            amet.
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4" />
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/HuntaroSan"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/codebushi/gatsby-starter-dimension"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
