import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Post from "./pages/Post";


export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-gray-100 font-sans">
        <header className="bg-gray-800 p-4 shadow-md">
          <nav className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-extrabold text-indigo-400">Shakya's Lab</h1>
            <div className="space-x-4">
              <Link to="/" className="hover:text-indigo-300 transition-colors">Home</Link>
              <Link to="/about" className="hover:text-indigo-300 transition-colors">About</Link>
            </div>
          </nav>
        </header>


        <main className="container mx-auto p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post/:id" element={<Post />} />
          </Routes>
        </main>


        <footer className="text-center p-4 border-t border-gray-700 text-sm text-gray-400">
          © {new Date().getFullYear()} Shakya — Gaming x Cybersecurity Blog
        </footer>
      </div>
    </Router>
  );
}