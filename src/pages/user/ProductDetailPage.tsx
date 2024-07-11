import ProductDetail from '../../components/ProductDetail';
import styles from './ProductDetailPage.module.css'
interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
}

const products: Product[] = [
    { 
      id: 1, 
      name: 'Product 1', 
      description: 'Description for product 1', 
      price: 100 
    },
    { 
      id: 2, 
      name: 'Product 2', 
      description: 'Description for product 2', 
      price: 200 
    },
    { 
      id: 3, 
      name: 'Product 3', 
      description: 'Description for product 3', 
      price: 300 
    },
];
export default function ProductDetailPage() {
  return (
    <div className={styles.container}>
        <ProductDetail products={products} />
    </div>
  )
}
