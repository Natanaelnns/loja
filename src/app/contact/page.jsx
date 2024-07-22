'use client'
import { Container, Row, Col, ListGroup } from 'react-bootstrap';

function Contact() {
    return (
        <footer className="bg-dark text-light py-5">
            <Container>
                <Row>
                    <Col md={4}>
                        <h5>Contatos</h5>
                        <ListGroup.Item>
                            <i className="bi bi-geo-alt-fill"></i> Endereço: Rua Exemplo, 1234
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <i className="bi bi-telephone-fill"></i> Telefone: (11) 1234-5678
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <i className="bi bi-envelope-fill"></i> Email: exemplo@example.com
                        </ListGroup.Item>
                    </Col>
                    <Col md={4}>
                        <h5>Redes Sociais</h5>
                            <ListGroup.Item>
                                <i className="bi bi-facebook"></i> Facebook
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <i className="bi bi-twitter"></i> Twitter
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <i className="bi bi-instagram"></i> Instagram
                            </ListGroup.Item>
                    </Col>
                    <Col md={4}>
                        <h5>Horário de Funcionamento</h5>
                            <ListGroup.Item>
                                Segunda a Sexta: 08:00 - 18:00
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Sábado: 09:00 - 12:00
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Domingo: Fechado
                            </ListGroup.Item>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Contact;
