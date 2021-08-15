import logo from './logo.svg';
import './App.css';
import React,{useEffect,useState} from 'react';
import List from './List.js'


function App() {
  const[state,setState]= useState(null)
  useEffect(() =>{
    fetch('https://breakingbadapi.com/api/characters')
      .then(res=>res.json())
      .then((res) => {
       setState(res) ;
        console.log(res)})
      .catch((error) =>{console.log(error)} )

  },[])
  return (<div>
    
      <List data={state}/>
      

    </div>
  );
}

export default App;
