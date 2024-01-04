import {Component} from 'react'
import {RiInstagramFill} from 'react-icons/ri'
import {FaLinkedin} from 'react-icons/fa'
import {IoMdMail} from 'react-icons/io'
import {MdCopyright} from 'react-icons/md'
import './index.css'

const myProject = [
  {
    uniqueNo: 1,
    projectName: 'NxtWatch',
    projectLink: 'https://mukilanNxtwatch.ccbp.tech',
    projectDescription:
      'I created a nxtwatch a video showing app. It is like a youtube Clone app and i created it using React.js',
  },
  {
    uniqueNo: 2,
    projectName: 'JobbyApp',
    projectLink: 'https://mukilanjobapp.ccbp.tech',
    projectDescription:
      "It's a jobby app a job searching application its created by using the React.",
  },
]

class PersonalPortfolio extends Component {
  state = {
    projectList: myProject,
    prjName: '',
    prjLink: '',
    prjDescription: '',
  }

  navDetails = () => (
    <nav className="nav-bar">
      <ul className="ul-lists-container">
        <li className="logo">Modelyn Torff</li>
        <ul className="section-list-container">
          <a href="#about" className="nav-anchor">
            <li className="section-list">About</li>{' '}
          </a>
          <a href="#projects" className="nav-anchor">
            <li className="section-list">Projects</li>
          </a>
          <a href="#footer" className="nav-anchor">
            <li className="section-list">Contacts</li>
          </a>
        </ul>
      </ul>
    </nav>
  )

  introDetails = () => (
    <div className="intro-container">
      <p className="role-para">UI/UX DESIGNER</p>
      <h1 className="name">
        Hello, My name <br />
        is Madelyn Torff
      </h1>
      <p className="description">
        Short text with details about you, what you do or your professional
        career. You can add more information on the about page.
      </p>
      <div>
        <a href="#projects">
          <button className="projects-button" type="button">
            Projects
          </button>
        </a>
        <button className="linked-in-button" type="button">
          LinkedIn
        </button>
      </div>
    </div>
  )

  projectNameChanged = event => {
    this.setState({prjName: event.target.value})
  }

  changeProjectLink = event => {
    this.setState({prjLink: event.target.value})
  }

  changeProjectDescription = event => {
    this.setState({prjDescription: event.target.value})
  }

  onClickAddPrjButton = () => {
    const {prjName, prjLink, prjDescription, uniqueNo} = this.state

    const newProject = {
      uniqueNo: uniqueNo + 1,
      projectName: prjName,
      projectLink: prjLink,
      projectDescription: prjDescription,
    }

    if (prjName !== '' && prjLink !== '' && prjDescription !== '') {
      this.setState(prevState => ({
        projectList: [...prevState.projectList, newProject],
        prjName: '',
        prjLink: '',
        prjDescription: '',
      }))
    } else {
      alert('Fill All Project Details! ')
    }
  }

  addProjectSection = () => {
    const {prjName, prjLink, prjDescription} = this.state
    return (
      <div>
        <form>
          <h1 className="form-title">Add Project</h1>
          <hr className="form-title-underline" />
          <div className="inputandlabel-bg-container">
            <div className="input-label-container">
              <label htmlFor="projectName" className="prj-label">
                Project Name
              </label>
              <input
                type="text"
                id="projectName"
                className="prj-input"
                value={prjName}
                onChange={this.projectNameChanged}
              />
            </div>

            <div className="input-label-container">
              <label htmlFor="projectName" className="prj-label">
                Project link
              </label>
              <input
                type="text"
                id="projectName"
                className="prj-input"
                value={prjLink}
                onChange={this.changeProjectLink}
              />
            </div>

            <div className="input-label-container">
              <label htmlFor="projectName" className="prj-label">
                Project Description
              </label>
              <textarea
                type="TextArea"
                id="projectName"
                rows="7"
                className="prj-text-area"
                onChange={this.changeProjectDescription}
                value={prjDescription}
              />
            </div>

            <button
              type="button"
              className="add-button"
              onClick={this.onClickAddPrjButton}
            >
              Add
            </button>
          </div>
        </form>
      </div>
    )
  }

  myProject = projectDetail => {
    const {projectName, projectDescription, projectLink} = projectDetail

    return (
      <div className="project-card">
        <h1 className="project-name">{projectName} </h1>
        <p className="project-description">{projectDescription}</p>
        <a href={projectLink} target="_blank" rel="noopener noreferrer">
          <button type="button" className="view-project-button">
            View Project{' '}
          </button>
        </a>
      </div>
    )
  }

  projectSection = () => {
    const {projectList} = this.state

    return (
      <div id="projects">
        <h1 className="projects-section-title">Projects</h1>
        <hr className="form-title-underline" />
        <ul className="prj-list-container">
          {projectList.map(eachPrj => (
            <li key={eachPrj.uniqueNo}>{this.myProject(eachPrj)}</li>
          ))}
        </ul>
      </div>
    )
  }

  aboutSection = () => (
    <div id="about" className="about-section">
      {this.navDetails()}
      {this.introDetails()}
    </div>
  )

  footerSection = () => (
    <div id="footer" className="footer-container">
      <div>
        <RiInstagramFill className="footer-icons" />
        <FaLinkedin className="footer-icons" />
        <IoMdMail className="footer-icons" />
      </div>
      <p>
        copyright <MdCopyright /> 2024. All rights reserved
      </p>
    </div>
  )

  render() {
    return (
      <div className="bg-container">
        {this.aboutSection()}
        {this.addProjectSection()}
        {this.projectSection()}
        {this.footerSection()}
      </div>
    )
  }
}

export default PersonalPortfolio
