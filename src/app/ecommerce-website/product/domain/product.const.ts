import { Product } from './product.model';
import { ProductStore } from './product.store.model';

export const PRODUCT_INITIAL_STATE: ProductStore = {
	products: [],
	cart: [],
};

export const PRODUCT_INITIAL: Product = {
	sku: '',
	name: '',
	price: 0,
	rrp: 0,
	image: '',
};
