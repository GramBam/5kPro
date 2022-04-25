import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Calculator from "./pages/Calculator";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/calculator' element={<Calculator />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
