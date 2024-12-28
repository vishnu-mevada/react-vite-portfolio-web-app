import './App.css';
import { Header, Welcome, About, Skills, Experience, Portfolio, Contact } from './components/index';
import constants from './constants.json';

function App() {
  const profileData = constants.profileData;
  const skillsData = constants.skillsData;
  const experienceData = constants.experienceData;
  const projectData = constants.projectData;

  return (
    <>
      <div>
        <Header></Header>
        <Welcome></Welcome>
        <About profileData={profileData}></About>
        <Skills skillsData={skillsData}></Skills>
        <Experience experienceData={experienceData}></Experience>
        <Portfolio projectData={projectData}></Portfolio>
        <Contact></Contact>
      </div>
    </>
  )
}

export default App
