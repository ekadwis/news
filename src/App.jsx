import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import NavbarComponent from "./component/NavbarComponent";
import NewsList from "./component/NewsList";
import Home from "./pages/Home";
import "./App.css"

function App() {
  return (
    <Router>
      <NavbarComponent /> {/* Navbar tetap ada di semua halaman */}
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:category" element={<NewsList />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
