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
          <h2 class="ex-title">Work Experience</h2>
          <h3>DIAMOND MEDIA Co.,Ltd. (2019/10 ~ present)</h3>
          <h4 class="job-title">Job Title: Backend engineer</h4>
          <ul>
            <li>
              Developing several web applications to innovate the real estate
              industry by technology.
            </li>
          </ul>

          <h3>Ruby Development Inc. (2018/04 ~ 2019/09)</h3>
          <h4 class="job-title">Job Title: Sowtware engineer</h4>
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
          <h4 class="job-title">Job Title: Intern</h4>
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

          <h2 class="ex-title">Tech stack</h2>
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

          <h2 class="ex-title">Certifications</h2>
          <ul>
            <li>Ruby Association Certified Ruby Programmer.</li>
            <li>
              Scored 965 out of 990 on TOEIC (Test of English for International
              Communication).
            </li>
          </ul>

          <h2 class="ex-title">Education</h2>
          <ul>
            <li>Meiji University (Bachelor’s Degree in Politics)</li>
            <li>TECH::CAMP (Web Development)</li>
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
