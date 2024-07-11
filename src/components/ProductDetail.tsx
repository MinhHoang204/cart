import { useNavigate, useParams } from 'react-router-dom';
import styles from './ProductDetail.module.css';
interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
}

interface ProductDetail {
    products: Product[];
}
export default function ProductDetail(products:any) {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const product:any = products.find(p => p.id === parseInt(id, 10));

    if (!product) {
        return <div>Product not found</div>;
    }
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>{product.name}</h1>
        <p className={styles.description}>{product.description}</p>
        <p className={styles.price}>${product.price}</p>
        <button className={styles.backButton} onClick={() => navigate(-1)}>Back</button>
    </div>
  )
}
