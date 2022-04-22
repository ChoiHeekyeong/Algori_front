import{
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
import Login from "./routes/Login";
import SignUp from "./routes/SignUp";
import './App.scss';
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/detail" element={<Detail/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<SignUp/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
