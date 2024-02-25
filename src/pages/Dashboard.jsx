import React from "react";
import { useState } from "react";
import Header from "../components/Header";
import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  Button,
  Modal,
  Form,
  ListGroupItem,
} from "react-bootstrap";
import robo from "../robo.avif";

function Dashboard() {
  const [showModal, setShowModal] = useState(false);
  const [suggestions, setSuggestions] = useState([]);

  const handleModal = () => setShowModal(!showModal);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Placeholder for actual logic to generate suggestions
    const dummySuggestions = [
      "Consider diversifying your portfolio with index funds.",
      "Review your investment strategy and consider long-term goals.",
      "Explore opportunities in emerging markets for potential growth.",
    ];
    setSuggestions(dummySuggestions);
  };
  const portfolioValue = 50000;
  const cashBalance = 10000;
  const recentTransactions = [
    { id: 1, symbol: "AAPL", quantity: 10, price: 150.25 },
    { id: 2, symbol: "GOOGL", quantity: 5, price: 2700.75 },
    { id: 3, symbol: "MSFT", quantity: 8, price: 290.5 },
  ];

  // Dummy data for market overview, watchlist, and news insights
  const marketData = {
    indices: ["S&P 500", "NASDAQ", "Dow Jones"],
    topGainers: ["AAPL", "GOOGL", "MSFT"],
    topLosers: ["TSLA", "AMZN", "NFLX"],
  };

  const watchlistData = [
    { id: 1, symbol: "AAPL", price: 150.25, change: "+0.75" },
    { id: 2, symbol: "GOOGL", price: 2700.75, change: "-1.25" },
    { id: 3, symbol: "MSFT", price: 290.5, change: "+0.50" },
  ];

  const newsInsights = [
    { id: 1, title: "Market Update: Tech Stocks Surge", date: "2023-08-15" },
    {
      id: 2,
      title: "New Investment Opportunities in Emerging Markets",
      date: "2023-08-14",
    },
    {
      id: 3,
      title: "How to Diversify Your Portfolio in a Volatile Market",
      date: "2023-08-13",
    },
  ];

  return (
    <>
      <Header />
      <Container className="mt-3">
        <Row className="mt-3">
          <Col>
            <Card>
              <Card.Body>
                <Card.Text>
                  <div className="desc">
                    The Robo Advisory feature, located in the bottom right
                    corner of the page, empowers users to provide their
                    preferences and receive personalized investment suggestions.
                    While this prototype offers a limited selection of options,
                    the full version will encompass a comprehensive array of
                    questionnaires. Processing these choices will be managed by
                    advanced mechanisms, such as pre-trained AI models or
                    purpose-built algorithms, meticulously designed for this
                    task. The implementation of these features will be conducted
                    on the server side, ensuring optimal performance and
                    reliability.
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <br />
        <Row>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Account Overview</Card.Title>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>
                    Portfolio Value: ${portfolioValue}
                  </ListGroupItem>
                  <ListGroupItem>Cash Balance: ${cashBalance}</ListGroupItem>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>

          <Col md={8}>
            <Card>
              <Card.Body>
                <Card.Title>Recent Transactions</Card.Title>
                <ListGroup>
                  {recentTransactions.map((transaction) => (
                    <ListGroupItem key={transaction.id}>
                      {transaction.symbol} - {transaction.quantity} shares at $
                      {transaction.price}
                    </ListGroupItem>
                  ))}
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Market Overview</Card.Title>
                <ul>
                  <li>
                    <strong>Indices:</strong> {marketData.indices.join(", ")}
                  </li>
                  <li>
                    <strong>Top Gainers:</strong>{" "}
                    {marketData.topGainers.join(", ")}
                  </li>
                  <li>
                    <strong>Top Losers:</strong>{" "}
                    {marketData.topLosers.join(", ")}
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Watchlist</Card.Title>
                <ul>
                  {watchlistData.map((item) => (
                    <li key={item.id}>
                      {item.symbol}: ${item.price} ({item.change})
                    </li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>News and Insights</Card.Title>
                <ul>
                  {newsInsights.map((news) => (
                    <li key={news.id}>
                      {news.title} - {news.date}
                    </li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Button variant="primary" className="fixed-icon" onClick={handleModal}>
          <i className="fas fa-robot">
            <img src={robo} alt="" />
          </i>
        </Button>

        <Modal show={showModal} onHide={handleModal} centered>
          <Modal.Header closeButton>
            <Modal.Title>Investment Plans Questionnaire</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="question1">
                <Form.Label>What are your investment goals?</Form.Label>
                <Form.Control as="select">
                  <option>Grow wealth</option>
                  <option>Save for retirement</option>
                  <option>Save for education</option>
                </Form.Control>
              </Form.Group>
              <br />
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
            <div className="mt-3">
              <h5>Personalized Suggestions:</h5>
              <ul>
                {suggestions.map((suggestion, index) => (
                  <li key={index}>{suggestion}</li>
                ))}
              </ul>
            </div>
          </Modal.Body>
        </Modal>
      </Container>
    </>
  );
}

export default Dashboard;
