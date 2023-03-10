import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { gapi } from 'gapi-script';

import About from './components/about/About';
import Login from './components/login&logout/Login';
import Main from './components/main_page/Main';
import './index.css'

const url = "https://rickandmortyapi.com/api/character";

const clientId = "1014785059938-nfjddqca3dqsrrr4b1bi66p8h5e3s5mq.apps.googleusercontent.com"

function App() {
  const [characters, setCharacters] = useState([])
    
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setCharacters(data.results);
            } catch (e) {
                console.error("error", e);
            }
        }
        fetchData()
    }, [])

    useEffect(() => {
      function start() {
        gapi.client.init(
          {
            clientId: clientId,
            scope: ""
          }
        )
      }
      gapi.load('client:auth2', start)
    })

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login /> } />
        <Route path="about/:id" element={<About characters={characters} />} />  
        <Route path='main' element={< Main characters={characters} />} />      
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
