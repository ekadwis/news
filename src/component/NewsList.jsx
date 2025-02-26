import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";

function NewsList() {
  const { category } = useParams(); // Ambil kategori dari URL
  const [news, setNews] = useState([]);
  const apiUrl = `https://api-berita-indonesia.vercel.app/antara/${category}`;

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setNews(data.data.posts))
      .catch((err) => console.error("Error fetching news:", err));
  }, [category]);

  return (
    <Container>
      <h3 className="mt-3 ms-1 mb-4">
        <i className="bx bx-category"></i> {category.toUpperCase()}
      </h3>
      <Row>
        {news.map((article, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card>
              <Card.Img variant="top" src={article.thumbnail} />
              <Card.Body>
                <Card.Title>{article.title}</Card.Title>
                <Card.Text>{article.description}</Card.Text>
                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Baca Selengkapnya
                </a>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default NewsList;
