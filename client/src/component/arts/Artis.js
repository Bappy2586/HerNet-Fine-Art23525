import { useState } from "react";
import { motion } from "framer-motion";
import { Container, Row, Col, Form, Card, ListGroup, Dropdown, DropdownButton } from "react-bootstrap";
import { FaUser, FaTrophy, FaUsers, FaGlobeAmericas, FaAward, FaFilm } from "react-icons/fa"; // Import icons
import "bootstrap/dist/css/bootstrap.min.css";
import "./Artis.css";

const categories = [
  { name: "All", icon: <FaUsers />, children: [] },
  { 
    name: "Gender", 
    icon: <FaUser />, 
    children: ["Male Artist", "Female Artist", "Other Artist"] 
  },
  { name: "Senior Artist", icon: <FaAward />, children: [] },
  { name: "National Award Winner", icon: <FaTrophy />, children: [] },
  { name: "Young & Emerging", icon: <FaFilm />, children: [] },
  { name: "International Acclaimed", icon: <FaGlobeAmericas />, children: [] }
];

const artworks = [
  { id: 1, category: "Male Artist", title: "Sunset Bliss", image: "./img/artis.jpg" },
  { id: 2, category: "Female Artist", title: "Stone Beauty", image: "./img/artis2.png" },
  { id: 3, category: "Young & Emerging", title: "Urban Vibes", image: "./img/eye3.jpg" },
  { id: 4, category: "International Acclaimed", title: "Cyber Dreams", image: "./img/eye5.jpg" },
];

function Artist() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [expandedCategory, setExpandedCategory] = useState(null); // Track the expanded category

  const filteredArtworks = artworks.filter(
    (art) =>
      (selectedCategory === "All" || art.category === selectedCategory) &&
      art.title.toLowerCase().includes(search.toLowerCase())
  );
  const handleCategoryClick = (categoryName) => {
    setExpandedCategory(expandedCategory === categoryName ? null : categoryName);
  };

  return (
    <Container className="mt-4">
      <Row>
        <Col md={4} style={{textAlign:"left"}}>
          <h4>Artist Category</h4>
          <h5 className="mt-3"></h5>
          <ListGroup>
            {categories.map((category) => (
              <>
                <ListGroup.Item
                  key={category.name}
                  action
                  active={selectedCategory === category.name}
                  onClick={() => {
                    setSelectedCategory(category.name);
                    handleCategoryClick(category.name); 
                  }}
                >
                  <span className="me-2">{category.icon}</span>
                  {category.name}
                </ListGroup.Item>

                {category.children.length > 0 && expandedCategory === category.name && (
                  <ListGroup.Item className="ms-3">
                    <DropdownButton
                      title="--Gender Select--"
                      id={`dropdown-${category.name}`}
                      variant="link"
                      className="w-100"
                    >
                      {category.children.map((child) => (
                        <Dropdown.Item
                          key={child}
                          onClick={() => setSelectedCategory(child)}
                          active={selectedCategory === child}
                        >
                          {child}
                        </Dropdown.Item>
                      ))}
                    </DropdownButton>
                  </ListGroup.Item>
                )}
              </>
            ))}
          </ListGroup>
        </Col>
        <Col md={8}>
          <Row className="mb-4">
            <Col md={8}></Col>
            <Col md={4}>
              <Form.Control
                type="text"
                placeholder="Search artwork..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </Col>
          </Row>
          <Row>
            {filteredArtworks.length > 0 ? (
              filteredArtworks.map((art) => (
                <Col md={6} key={art.id} className="mb-4">
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
                    <Card>
                      <Card.Img variant="top" src={art.image} style={{ height: "200px", objectFit: "cover" }} />
                      <Card.Body>
                        <Card.Title>{art.title}</Card.Title>
                        <Card.Text>{art.category}</Card.Text>
                      </Card.Body>
                    </Card>
                  </motion.div>
                </Col>
              ))
            ) : (
              <Col className="text-center">
                <p>No artworks available for this category.</p>
              </Col>
            )}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
export default Artist;
