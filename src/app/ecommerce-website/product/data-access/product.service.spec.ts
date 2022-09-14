import { TestBed } from '@angular/core/testing';
import {
	HttpClientTestingModule,
	HttpTestingController,
} from '@angular/common/http/testing';
import { ProductService } from './product.service';

describe('ProductService', () => {
	let service: ProductService, httpTestingController: HttpTestingController;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
			providers: [ProductService],
		});
		service = TestBed.get(ProductService);
		httpTestingController = TestBed.get(HttpTestingController);
	});

	it('should retrieve all products', () => {
		service.getProducts$().subscribe((products) => {
			expect(products.length).toEqual(50, "Incorrect number of products");

			const product = products.find((product) => product?.sku === '671695659-X');
			console.log(product)
			expect(product?.price).toEqual(166, "Incorrect price of product");
		});
	});
});
