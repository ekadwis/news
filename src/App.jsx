import { useState } from "react";
import Container from "react-bootstrap/Container";
import NavbarComponent from "./component/NavbarComponent";
import NewsList from "./component/NewsList";

function App() {
  const [category, setCategory] = useState("terbaru");

  return (
    <Container>
      <NavbarComponent setCategory={setCategory} />
      <NewsList category={category} />
    </Container>
  );
}

export default App;
