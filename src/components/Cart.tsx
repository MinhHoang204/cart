import CartItem from './CartItem';
interface Product {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

interface Cart {
    products: Product[];
    onQuantityChange: (id: number, quantity: number) => void;
    onRemove: (id: number) => void;
    onClear: () => void;
}
export default function Cart(products:any, onQuantityChange:any, onRemove:any, onClear:any) {
  return (
    <div className={styles.cartContainer}>
    <div className={styles.cartHeader}>
        <h2>Shopping Cart</h2>
        <button onClick={onClear}>Clear All</button>
    </div>
    {products.map(product => (
        <CartItem
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            quantity={product.quantity}
            onQuantityChange={onQuantityChange}
            onRemove={onRemove}
        />
    ))}
</div>
  )
}
