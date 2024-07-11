import {useState} from 'react'
import Cart from '../../../components/Cart';
import styles from './CartPage.module.css';
interface Product {
    id: number;
    name: string;
    price: number;
    quantity: number;
}
export default function CartPage() {
    const [products, setProducts] = useState<Product[]>([
        { id: 1, name: 'Product 1', price: 100, quantity: 1 },
        { id: 2, name: 'Product 2', price: 200, quantity: 2 },
    ]);

    const handleQuantityChange = (id: number, quantity: number) => {
        setProducts(products.map(product =>
            product.id === id ? { ...product, quantity: Math.max(quantity, 1) } : product
        ));
    };

    const handleRemove = (id: number) => {
        setProducts(products.filter(product => product.id !== id));
    };

    const handleClear = () => {
        setProducts([]);
    };

  return (
    <div className={styles.container}>
        <h1>My Cart</h1>
        <Cart
           products={products}
           onQuantityChange={handleQuantityChange}
           onRemove={handleRemove}
           onClear={handleClear}
        />
    </div>
  )
}
