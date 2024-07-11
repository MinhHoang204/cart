import styles from './CartItem.module.css';
interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
    onQuantityChange: (id: number, quantity: number) => void;
    onRemove: (id: number) => void;
}

export default function CartItem(id:any, name:any, price:any, quantity:any, onQuantityChange:any, onRemove:any) {
  return (
    <div className={styles.cartItem}>
        <div className={styles.details}>
            <h4>{name}</h4>
            <p>${price}</p>
        </div>
        <div className={styles.quantity}>
            <button onClick={() => onQuantityChange(id, quantity - 1)}>-</button>
            <input
                type="number"
                value={quantity}
                onChange={(e) => onQuantityChange(id, parseInt(e.target.value))}
                min="1"
            />
            <button onClick={() => onQuantityChange(id, quantity + 1)}>+</button>
        </div>
        <div className={styles.actions}>
            <button onClick={() => onRemove(id)}>Remove</button>
         </div>
    </div>
  )
}
