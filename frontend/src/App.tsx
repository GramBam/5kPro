import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Calculator from "./pages/Calculator";
import Register from "./pages/Register";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/calculator' element={<Calculator />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
