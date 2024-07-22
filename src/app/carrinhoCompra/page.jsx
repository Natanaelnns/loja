'use client'
// import { Button } from 'bootstrap';
import Carrinho from '@/components/carrinho';
import React, { useState, useEffect } from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';
import { db } from '@/services/firebase';
import { collection, deleteDoc, getDocs, doc } from 'firebase/firestore';

const ShoppingCart = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        // const cart = JSON.parse(localStorage.getItem('cart')) || [];
        // setCartItems(cart);

        const fetchProducts = async () => {
            const productsCollection = collection(db, 'ifood');
            const productsSnapshot = await getDocs(productsCollection);
            const productsList = productsSnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setCartItems(productsList);
        };

        fetchProducts();
    }, []);

    const addToCart = (product) => {
        const updatedCart = [...cartItems, product];
        setCartItems(updatedCart);
    };

    const removeFromCart = async (itemId) => {
        try {
            const productDocRef = doc(db, 'ifood', itemId);
            await deleteDoc(productDocRef);
            console.log('Documento deletado com sucesso!');
            // Atualiza o estado local após a remoção no Firestore
            const updatedCart = cartItems.filter(item => item.id !== itemId);
            setCartItems(updatedCart);
        } catch (error) {
            console.error("Erro ao deletar documento: ", error);
        }
    };
    return (
        <div className="container mt-5">
            <h1>Carrinho de Compras</h1>
            {/* <Card className="mb-3"> */}
                <Row>
                    <Col md={8} className="order-md-1 ">
                        <Card.Body>
                            <Card.Title>Produtos</Card.Title>
                            {cartItems.map((product) => (
                                <div key={product.id} className="mb-3">
                                    <Row className="no-gutters">
                                        <Col md={4}>
                                            {/* <Image width={200} height={200} src={product.image} alt={product.name} className="img-fluid" /> */}
                                        </Col>
                                        <Col md={8}>
                                            <div className="ml-md-3">
                                                <h5>{product.name}</h5>
                                                <p>R$ {product.price.toFixed(2)}</p>
                                                <p>Descrição: Aqui vai a descrição do produto. Você pode adicionar informações adicionais sobre o produto, suas características principais, etc.</p>
                                                <Button variant="primary" onClick={() => addToCart(product)}>Adicionar</Button>
                                                 <Button variant="danger" onClick={() => removeFromCart(product.id)}>Remover</Button>
                                            </div>
                                        </Col>
                                    </Row>
                                    { /* Linha divisória entre os produtos */}
                                    <hr />
                                </div>
                            ))}
                        </Card.Body>
                    </Col>
                    <Carrinho
                        cartItems={cartItems}
                        removeFromCart={removeFromCart}
                    />
                </Row>
            {/* </Card> */}
        </div >
    );
};

export default ShoppingCart;
