import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
	MatDialogRef,
	MAT_DIALOG_DATA,
	MAT_DIALOG_DEFAULT_OPTIONS,
} from '@angular/material/dialog';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { ProductShellModule } from '../../feature/product-shell.module';

import { ProductDetailsComponent } from './product-details.component';

describe('ProductDetailsComponent', () => {
	let component: ProductDetailsComponent;
	let fixture: ComponentFixture<ProductDetailsComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [ProductShellModule],
			providers: [
				{ provide: MatDialogRef, useValue: {} },
				{ provide: MAT_DIALOG_DATA, useValue: [] },
			],
		}).compileComponents();

		fixture = TestBed.createComponent(ProductDetailsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create product details component', () => {
		expect(component).toBeTruthy();
	});
});
