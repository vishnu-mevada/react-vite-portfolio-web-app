import './App.css';
import { Header, Welcome, About } from './components/index';
import constants from './constants.json';

function App() {
  const profileData = constants.profileData;

  return (
    <>
      <div>
        <Header></Header>
        <Welcome></Welcome>
        <About profileData={profileData}></About>
      </div>
    </>
  )
}

export default App
