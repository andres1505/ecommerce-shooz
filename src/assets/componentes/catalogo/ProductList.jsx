import { data } from "./data"; 
import style from './ProductList.module.css'

export const ProductList = ({
	allProducts,
	setAllProducts,
	countProducts,
	setCountProducts,
	total,
	setTotal,
}) => {
	const onAddProduct = product => {
		if (allProducts.find(item => item.id === product.id)) {
			const products = allProducts.map(item =>
				item.id === product.id
					? { ...item, quantity: item.quantity + 1 }
					: item
			);
			setTotal(total + product.price * product.quantity);
			setCountProducts(countProducts + product.quantity);
			return setAllProducts([...products]);
		}

		setTotal(total + product.price * product.quantity);
		setCountProducts(countProducts + product.quantity);
		setAllProducts([...allProducts, product]);
	};

	return (
		<div className={style.main}>
			{data.map((product) => (
				<div className={style.carta} key={product.id}>
					<div className={style.card}>
						<img className={style.img} src={product.img} alt={product.nameProduct} />
					
					
					<div className={style.texto}>
						<h2>{product.nameProduct}</h2>
						<p>Precio:{product.price}</p>
						<button className={style.cardbutton} onClick={() => onAddProduct(product)}>
							Añadir al carrito
						</button>
						</div>
					</div>
				</div>
			
			))}
		</div>
	);
};