// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// import Home from './pages/home'

// function App() {
//   const [count, setCount] = useState(0)

//   return <Home/>
//   // return (
//   //   <>
//   //     <div>
//   //       <a href="https://vitejs.dev" target="_blank">
//   //         <img src={viteLogo} className="logo" alt="Vite logo" />
//   //       </a>
//   //       <a href="https://react.dev" target="_blank">
//   //         <img src={reactLogo} className="logo react" alt="React logo" />
//   //       </a>
//   //     </div>
//   //     <h1>Vite + React</h1>
//   //     <div className="card">
//   //       <button onClick={() => setCount((count) => count + 1)}>
//   //         count is {count}
//   //       </button>
//   //       <p>
//   //         Edit <code>src/App.tsx</code> and save to test HMR
//   //       </p>
//   //     </div>
//   //     <p className="read-the-docs">
//   //       Click on the Vite and React logos to learn more
//   //     </p>
//   //   </>
//   // )
// }

// export default App

import { Routes, Route, BrowserRouter } from "react-router-dom"
import { useState } from 'react';
import Layout from "./components/layout/layout"

import Home from "./pages/home"
import Article from "./pages/article"
import Catalogue from "./pages/catalogue"
import Login from "./pages/login"
import Planner from "./pages/planner"
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  return (
    
    <BrowserRouter>
      <Routes>
        <Route element={<Layout isLoggedIn={isLoggedIn}/>}>
          <Route path="/PharmaPlan/" element={<Home />} />
          <Route path="/PharmaPlan/article" element={<Article />} />
          <Route path="/PharmaPlan/medicine" element={<Catalogue />} />
          <Route path="/PharmaPlan/planner" element={<Planner />} />
          <Route path="/PharmaPlan/login" element={<Login onLogin={handleLogin}/>} />
        </Route>
      </Routes>

    </BrowserRouter>
  )
}

export default App

