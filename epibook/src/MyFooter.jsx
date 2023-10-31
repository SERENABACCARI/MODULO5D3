import { Col, Container, Row } from "react-bootstrap";

export default function MyFooter(){
    return(
        <Container>
            <Row>
                <Col xs={6}>
                    <p>@2021</p>
                </Col>
                <col xs={6}>
                    <p>Privacy</p>
                </col>
            </Row>
        </Container>
    )
}