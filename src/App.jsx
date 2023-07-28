import { Home } from './pages/Home'
import { Feed } from './pages/Feed'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Detail } from './pages/Detail'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movie/:slug' element={<Feed />} />
          <Route path='/detail/:slug' element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
