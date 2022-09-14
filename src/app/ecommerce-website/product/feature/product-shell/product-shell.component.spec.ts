import { HttpClientModule } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef } from '@angular/material/dialog';
import { DesignSystemModule } from 'src/app/design-system/design-system.module';
import { ProductStoreService } from '../../application/product-store.service';
import { ProductShellModule } from '../product-shell.module';

import { ProductShellComponent } from './product-shell.component';

describe('ProductShellComponent', () => {
	let component: ProductShellComponent;
	let fixture: ComponentFixture<ProductShellComponent>;
	let el: DebugElement;
	let productStoreService: ProductStoreService;

	beforeEach(async () => {
		const productStoreServiceSpy = jasmine.createSpyObj(
			'productStoreService',
			['products$']
		);
		await TestBed.configureTestingModule({
			imports: [ProductShellModule, DesignSystemModule, HttpClientModule],
			declarations: [ProductShellComponent],
			providers: [
				{
					provde: ProductStoreService,
					useValue: productStoreServiceSpy,
				},
			],
		}).compileComponents();

		fixture = TestBed.createComponent(ProductShellComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create product shell component', () => {
		expect(component).toBeTruthy();
	});
});
