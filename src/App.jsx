import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import ShowSummary from './pages/ShowSummary';


function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/show/:id" element={<ShowSummary />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;