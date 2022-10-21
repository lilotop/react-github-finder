import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Footer } from './components/layout/Footer';
import { Navbar } from './components/layout/Navbar';

function App() {
  return (
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <Navbar />
        <main className="container mx-auto px-3 pb-12">
          <Routes>
            <Route
              path="/"
              element={<div className="text-xl mx-auto block w-40 border-dashed border-2 border-blue-300 text-center">Main content goes here</div>}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
