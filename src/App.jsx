import './App.css';
import { Header, Welcome, About, Skills, Experience } from './components/index';
import constants from './constants.json';

function App() {
  const profileData = constants.profileData;
  const skillsData = constants.skillsData;
  const experienceData = constants.experienceData;

  return (
    <>
      <div>
        <Header></Header>
        <Welcome></Welcome>
        <About profileData={profileData}></About>
        <Skills skillsData={skillsData}></Skills>
        <Experience experienceData={experienceData}></Experience>
      </div>
    </>
  )
}

export default App
