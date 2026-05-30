import { Routes, Route } from 'react-router-dom'

import { Nav } from './components/Nav'
import { Footer } from './components/Footer'

import { Home } from './pages/Home'
import { Produtos } from './pages/Produtos'
import { Sobre } from './pages/Sobre'
import { Contato } from './pages/Contato'

export default function App() {
  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>

      <Footer />
    </>
  )
}