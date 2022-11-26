import './App.css';
import { Header } from './components/Header/Header';
import SideBar from './components/SideBar/Sidebar';

function App({state}) {
  return (
    <div className='app-wrapper'>
      <Header />
      <SideBar />
    </div>
  );
}

export default App;
