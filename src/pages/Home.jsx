import { useEffect, useState } from 'react';
import { Carousel, Container, Row, Col, Card, Button } from 'react-bootstrap';

function Home() {
  const [news, setNews] = useState([]);
  const [politikNews, setPolitikNews] = useState([]);
  const [hukumNews, setHukumNews] = useState([]);

  useEffect(() => {
    // Fetch berita terbaru untuk carousel
    fetch(`https://api-berita-indonesia.vercel.app/antara/terbaru`)
      .then((res) => res.json())
      .then((data) => setNews(data.data.posts.slice(0, 5))) // Ambil 5 berita pertama
      .catch((err) => console.error('Error fetching news:', err));

    // Fetch berita politik untuk sidebar
    fetch(`https://api-berita-indonesia.vercel.app/antara/politik`)
      .then((res) => res.json())
      .then((data) => setPolitikNews(data.data.posts.slice(0, 4))) // Ambil 3 berita politik
      .catch((err) => console.error('Error fetching politik news:', err));

    // Fetch berita hukum untuk sidebar
    fetch(`https://api-berita-indonesia.vercel.app/antara/hukum`)
      .then((res) => res.json())
      .then((data) => setHukumNews(data.data.posts.slice(0, 4))) // Ambil 3 berita Hukum
      .catch((err) => console.error('Error fetching Hukum news:', err));
  }, []);

  return (
    <Container className="mt-4">
      <Row>
        {/* Jumbotron / Carousel */}
        <Col xs={9} style={{ maxHeight: '400px', overflow: 'hidden' }}>
          <Carousel>
            {news.map((article, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100"
                  src={article.thumbnail}
                  alt={article.title}
                  style={{ height: '400px', objectFit: 'cover' }}
                />
                <Carousel.Caption>
                  <h3 className="jumbotron-text">
                    <a
                      href={article.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: 'white', textDecoration: 'none' }}
                    >
                      {article.title}
                    </a>
                  </h3>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>

        {/* Sidebar Politik */}
        <Col xs={3} style={{ maxHeight: '400px', overflowY: 'auto' }}>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h3>Politik</h3>
            <Button variant="secondary">
              <a href="/politik" className='button-section'>Selengkapnya</a>
            </Button>
          </div>
          {politikNews.map((article, index) => (
            <Card key={index} className="mb-3">
              <Card.Img
                variant="top"
                src={article.thumbnail}
                style={{ height: '120px', objectFit: 'cover' }}
              />
              <Card.Body>
                <Card.Title>
                  <a
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fs-6"
                  >
                    {article.title}
                  </a>
                </Card.Title>
              </Card.Body>
            </Card>
          ))}
        </Col>
      </Row>
      <Row className="mt-4" style={{ maxHeight: '500px' }}>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h3>Hukum</h3>
          <Button variant="secondary">
            <a href="/hukum" className='button-section'>Selengkapnya</a>
          </Button>
        </div>
        {hukumNews.map((article, index) => (
          <Col>
            <Card key={index} className="mb-3">
              <Card.Img
                variant="top"
                src={article.thumbnail}
                style={{ height: '120px', objectFit: 'cover' }}
              />
              <Card.Body>
                <Card.Title>
                  <a
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fs-6"
                  >
                    {article.title}
                  </a>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Home;
