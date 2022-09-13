import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { map, retry } from 'rxjs/operators';

// import interface
import { Product } from '../domain/product.model';

@Injectable({
	providedIn: 'root',
})
export class ProductService {
	API_BASE_URL = './assets/data/MOCK_DATA.json';

	constructor(private http: HttpClient) {}

	getProducts$(): Observable<Array<Product>> {
		return this.http.get<Array<Product>>(`${this.API_BASE_URL}`).pipe(
			map((products) => products),
			retry(3),
			catchError((err) => {
				this.handleError(err);
				return throwError(() => err);
			})
		);
	}

	private handleError(err: HttpErrorResponse): void {
		console.log(err);
	}
}
