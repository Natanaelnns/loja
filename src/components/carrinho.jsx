import { Button, Card, Col } from "react-bootstrap"

const Carrinho = ({cartItems, removeFromCart}) => {
    return (
        <>
            <Col md={4} className="order-md-1">
                <Card className="mb-3 mt-2 ml-2">
                    <Card.Body>
                        <Card.Title>Carrinho</Card.Title>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Nome do Produto</th>
                                    <th scope="col">Preço</th>
                                    <th scope="col">Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems.map((cartItem) => (
                                    <tr key={cartItem.id}>
                                        <td>{cartItem.productName}</td>
                                        <td>R$ {cartItem.price.toFixed(2)}</td>
                                        <td>
                                            <Button variant="danger" onClick={() => removeFromCart(cartItem)}>Remover</Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <h4>Total: R$ {cartItems.reduce((total, item) => total + item.price, 0).toFixed(2)}</h4>
                        <Button variant="primary" className="float-right">COMPRAR</Button>
                    </Card.Body>
                </Card>
            </Col>
        </>
    )
}

export default Carrinho