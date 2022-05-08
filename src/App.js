import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Schedule from './pages/Schedule';
import Posts from './pages/Posts';
import Settings from './pages/Settings';
import Login from './pages/Login';




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/schedule" element={<Schedule />}>
          <Route path="events" />
          <Route path="birthdays" />
          <Route path="meetings" />
        </Route>
        <Route path="/posts" element={<Posts />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  )
}

export default App;
