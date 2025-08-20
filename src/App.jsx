import { useState } from 'react'
import './App.css'
import NavBar from "./NavBar";
import SignInModal from "./SignInModal";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="min-h-screen bg-gray-900 text-white">
      <nav className="flex gap-6 p-4 bg-gray-800">
        <NavBar />
      
        <Link to="/" className="hover:text-yellow-400">Books</Link>
        <Link to="/pages" className="hover:text-yellow-400">Pages To Read</Link>
      </nav>
      <Outlet />
    </div>
    </>
  )
}

export default App
