//import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";
//function App() {
//return (
  //<div className="App">
      //<header className="App-header">
        //<img src={logo} className="App-logo" alt="logo" />
        //<p>
         // Edit <code>src/App.js</code> and save to reload.
       // </p>
        //<a
         // className="App-link"
         // href="https://reactjs.org"
         // target="_blank"
          //rel="noopener noreferrer"
        //>
        //  Learn React
        //</a>
      //</header>
   // </div>
 // );
//}

import "./App.css";

  function App() {
  const [isDataFetch, setisDataFetch] = useState(false);


  const [users, setUsers] = useState([]);
  const [isBtnClick, setisBtnClick] = useState(false);


  const userInfo = async () => {
    setisBtnClick(true);    
    
    const response = await fetch("https://reqres.in/api/users?page=1");

    const jsonresponse = await response.json();

    setUsers(jsonresponse.data);

    setInterval(() => {
      setisDataFetch(true);
    }, 1500);


  };
  


  return ( 

    <div className="App">
      <div className="navbar">
        <h1>Letsgrowmore</h1>
        
        <button onClick={userInfo }>Get Users</button>
        
      </div>
        

    {
     isBtnClick ?(
      isDataFetch ?(

      <div className="grid">
        {
        users.map(({ id, first_name, last_name, avatar, email }) => {
          return(

          <div className="card">
            <div className="picture">
              <img src={avatar} alt=""></img>
            </div>
            <hr></hr>
            <div>
              <h3>{first_name} {last_name}</h3>
              <p>{email}</p>
            </div>
          </div>
      )})}
    </div>
      ):(<div classname="loaders">LOADING.....</div>)):(<> </>)
  }
  </div>

  );

}
export default App;





