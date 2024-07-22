import Image from 'next/image';
import notebook from '../assets/images/notebook.jpg';
import samsung from '../assets/images/samsung.png'
import iphone from '../assets/images/iphone.jpg'
import AddDocFireBase from '@/components/addDocFireBase';
import { useState } from 'react';
import AlertProduct from '@/components/alert';

function Product1() {
    const [productName, setProductName] = useState('mackBook')
    const [image, setImage] = useState(notebook)
    const [price, setPrice] = useState(100.00)
    const [categoria, setCategoria] = useState('eletronicos')
    const [showAlert, setShowAlert] = useState(false);
    async function handleAddCart() {
        try {
            const result = await AddDocFireBase({
                name: productName,
                image: image,
                price: price,
                categoria: categoria,
            });

            if (result) {
                setShowAlert(true);
                setTimeout(() => setShowAlert(false), 3000); // Mostra o alerta por 3 segundos
            } else {
                console.log('Erro ao adicionar produto.');
            }
        } catch (error) {
            console.error('Erro ao adicionar produto: ', error);
        }
    }

    return (
        <div className="col-md-4 mb-4">
            <div className="card">
                <div className='card-img-top'>
                    <Image
                        src={image}
                        alt="Produto1"
                        width={500}
                        height={500}
                        className='img-fluid'
                    />
                </div>
                <div className="card-body text-center">
                    <h5 className="card-title" id='productName'>{productName}</h5>
                    <p className="card-text"><small className="text-muted">R$ {price}</small></p>
                    <button className="btn btn-sm btn-primary" onClick={() => handleAddCart()}>
                        Adicionar ao carrinho
                    </button>
                </div>
            </div>
            {showAlert && <AlertProduct/>}
        </div>
    );
}

function Product2() {
    return (

        <div className="col-md-4">
            <div className="card">
                <div className="imagem-container">
                    <Image
                        src={samsung}
                        alt="Produto 2"
                        className='card-img-top img-fluid'
                    />
                </div>
                <div className="card-body text-center">
                    <h5 className="card-title">Produto 2</h5>
                    <p className="card-text">Descrição do Produto 2.</p>
                    <p className="card-text"><small className="text-muted">R$ 150,00</small></p>
                </div>
            </div>
        </div>
    )
}

function Product3({ }) {
    return (
        <div className="col-md-4 mb-4">
            <div className="card">
                <Image
                    src={iphone}
                    alt='Iphone'
                    className='card-img-top img-fluid'
                />
                <div className="card-body">
                    <h5 className="card-title">Produto 3</h5>
                    <p className="card-text">Descrição do Produto 3.</p>
                    <p className="card-text"><small className="text-muted">R$ 200,00</small></p>
                </div>
            </div>
        </div>
    )
}


export { Product1, Product2, Product3 };
