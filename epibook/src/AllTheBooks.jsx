
import { Card, Col, Container, Row, Form } from "react-bootstrap";
import books from "./Data/fantasy.json";
import { useState } from "react";

const border = {
    border: "1px solid #000", // Definisco il border per onclick
};

function SingleBook({ book }) {

    const [selected, setSelected] = useState(false);

    return (
        <Col xs={3} key={book.id} onClick={() => setSelected(!selected)} style={border}>
            <Card>
                <Card.Title>{book.title}</Card.Title>
                <Card.Img fluid src={book.img} />
            </Card>
        </Col>
    );
}

export default function AllTheBooks() {
    const [query, setQuery] = useState("");

    const handleQueryChange = (e) => {
        setQuery(e.target.value);
    };

    return (
        <Container>
            <Form.Control type="text" value={query} onChange={handleQueryChange} />

            <Row>
                {books
                    .filter((book) =>
                        book.title.toLowerCase().includes(query.toLowerCase())
                    )
                    .map((book) => (
                        <SingleBook key={book.id} book={book} />
                    ))}
            </Row>
        </Container>
    );
}
