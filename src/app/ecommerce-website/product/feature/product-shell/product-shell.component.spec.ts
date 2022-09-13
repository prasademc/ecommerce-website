import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ProductStoreService } from '../../application/product-store.service';
import { ProductShellModule } from '../product-shell.module';

import { ProductShellComponent } from './product-shell.component';

describe('ProductShellComponent', () => {
	let component: ProductShellComponent;
	let fixture: ComponentFixture<ProductShellComponent>;
	let el: DebugElement;
	let productStoreService: ProductStoreService;

	beforeEach(async () => {
		const productStoreServiceSpy = jasmine.createSpyObj('productStoreService', ['products$'])
		await TestBed.configureTestingModule({
			imports: [ProductShellModule, NoopAnimationsModule],
			declarations: [ProductShellComponent],
			providers: [{
				provde: ProductStoreService,
				useValue: productStoreServiceSpy
			}],
		}).compileComponents();

		fixture = TestBed.createComponent(ProductShellComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).to.true;
	});
});
