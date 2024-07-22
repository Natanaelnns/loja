'use client'
import Contact from '../app/contact/page';
import { Product1, Product2, Product3 } from '../products/products';
import NavBarLeft from './navBarLeft';
function Main() {
    return (
        <>
            <div className="container-fluid mt-5">
                <div className="row">
                    <NavBarLeft />
                    <div className="col-md-9">
                        <h2 className="text-right">Produtos em Destaque</h2>
                        <div className="row">
                            <Product1/>
                            <Product2 />
                            <Product3 />
                            <Product3 />
                            <Product3 />
                            <Product3 />
                            <Product3 />
                            <Product3 />

                        </div>
                    </div>

                </div>
            </div >
            <Contact />
        </>
    )
}

export default Main;