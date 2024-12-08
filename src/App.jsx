import './App.css';
import { Header, Welcome, About, Skills } from './components/index';
import constants from './constants.json';

function App() {
  const profileData = constants.profileData;
  const skillsData = constants.skillsData;

  return (
    <>
      <div>
        <Header></Header>
        <Welcome></Welcome>
        <About profileData={profileData}></About>
        <Skills skillsData={skillsData}></Skills>
      </div>
    </>
  )
}

export default App
