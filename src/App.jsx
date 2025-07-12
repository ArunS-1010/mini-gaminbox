// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/pages/home/Home'
import Nav from './components/nav/Nav'
import Cards from './practice-components/Cards'
import Practice from './practice-components/Practice'
import Rockpaper from './components/pages/Rockpaper/Rockpaper'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game/rock-paper-scissors" element={<Rockpaper />} />
        </Routes>
      </Router>

      {/* <Practice />
      <hr />
      <div className="d-flex gap-3">
        <Cards
          image="src/assets/react.svg"
          title="React JS"
          content="Single Page Application"
        />
        <Cards
          image="https://yt3.googleusercontent.com/L7fPOHO5TwVC_qz78Yo8P0MuJAB8I4FdQmOY2HSW7Z4_AFJZgAHzJCKQXo7ek1sy0pj0dIzM2Xg=s900-c-k-c0x00ffffff-no-rj"
          title="Angular JS"
          content="SPA, Framework"
        />
        <Cards
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png"
          title="Vue JS"
          content="Single Page Application"
        />
        <Cards hideYear={true} />
      </div> */}
      {/* <Nav /> */}
      {/* <Home /> */}
      {/* <div className="" style={{ height: '120vh' }}>
        {' '}
        content
        <p>content</p>
        <p>content</p> <p>content</p> <p>content</p>
      </div> */}
    </>
  )
}

export default App

{
  /* <div>
<a href="https://vite.dev" target="_blank">
  <img src={viteLogo} className="logo" alt="Vite logo" />
</a>
<a href="https://react.dev" target="_blank">
  <img src={reactLogo} className="logo react" alt="React logo" />
</a>
</div>
<h1>Vite + React</h1>
<div className="card">
<button onClick={() => setCount((count) => count + 1)}>
  count is {count}
</button>
<p>
  Edit <code>src/App.jsx</code> and save to test HMR
</p>
</div>
<p className="read-the-docs">
Click on the Vite and React logos to learn more
</p> */
}
