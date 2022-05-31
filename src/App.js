import UserInfo from './data/UserInfo';
import React,{useContext, useState} from 'react';
import './App.css';
import Bag from './components/Bag';
import Navbar from './components/Navbar';
import { ThemeContext } from './context/ThemeContext';

function App() {

  const [data, setData] = useState(UserInfo);
  console.log(data);
  const {isLight}=useContext(ThemeContext);
  return (
    <div className={`App ${isLight? "light":"dark"}`}>
      <Navbar/>
     <Bag data={data}/>
    </div>
  );
}

export default App;
