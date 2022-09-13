import { Product } from "./product.model";

export interface ProductStore {
	products: Array<Product>;
	cart:  Array<Product>;
}
