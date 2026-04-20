import './App.css'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Home from './pages/Home'

function App() {
  const basePath = import.meta.env.MODE === 'development'
    ? import.meta.env.VITE_BASE_PATH_DEV || '/'
    : import.meta.env.VITE_BASE_PATH_PROD || '/'

  return (
    <>
      <Router basename={basePath}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </>
  )
}

export default App