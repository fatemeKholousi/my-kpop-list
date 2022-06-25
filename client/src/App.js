import './App.css'
import NavBar from './components/layout/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Fragment } from 'react'
import Home from './pages/Home'
import About from './pages/About'
import ContactState from './context/contact/ContactState'

const App = () => {
  return (
    <ContactState>
      <BrowserRouter>
        <Fragment>
          <NavBar />
          <div className="container">
            <Routes>
            <Route path="/" element={<Home />} />

              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </Fragment>
      </BrowserRouter>
    </ContactState>
  )
}

export default App
