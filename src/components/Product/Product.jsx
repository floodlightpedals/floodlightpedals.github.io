import './Product.css';
import { Link } from 'react-router-dom';
import products from '../../data/products.json'

function Product({productKey}) {
    const product = products[productKey];

    return (
        <div className="product">
            <Link to={'/' + product.category + '/' + productKey}>
                <img src={process.env.PUBLIC_URL + product.images[0]} alt={product.title}/>
                <p className='title'>{product.title}</p>
                <p className='subtitle'>{product.subtitle}</p>
            </Link>
        </div>
    );
}

export default Product;
