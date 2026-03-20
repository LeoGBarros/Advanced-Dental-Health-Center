import { Routes, Route } from 'react-router-dom'
import DentistaModelo2 from './DentistaModelo2'
import DoctorsPage from './pages/DoctorsPage'
import ScrollToHash from './components/ScrollToHash'

function App() {
  return (
    <>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<DentistaModelo2 />} />
        <Route path="/doctors" element={<DoctorsPage />} />
      </Routes>
    </>
  )
}

export default App
