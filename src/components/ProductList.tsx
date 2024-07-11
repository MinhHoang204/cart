import styles from './ProductList.module.css';
import { useNavigate } from 'react-router-dom';
interface Product {
  id: number;
  name: string;
  price: number;
}

interface ProductList {
  products: Product[];
}
export default function ProductList(products:any) {
  const navigate = useNavigate();
  return (
    <table className={styles.productTable}>
    <thead>
        <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Actions</th>
        </tr>
    </thead>
    <tbody>
        {products.map(product => (
            <tr key={product.id}>
                <td>{product.name}</td>
                <td>${product.price}</td>
                <td>
                    <button
                        onClick={() => navigate(`/products/${product.id}`)}
                        className={styles.detailButton}
                    >
                        View Details
                    </button>
                </td>
            </tr>
        ))}
    </tbody>
    </table>

  );
}
