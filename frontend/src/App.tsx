import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Signup } from './pages/Signup'
import { Signin } from './pages/Signin'
import { Blog } from './pages/Blog'
import { BlogContent } from './pages/BlogContent'
import { Publish } from './pages/Publish'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/blog/:id" element={<BlogContent />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/publish" element={< Publish/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App