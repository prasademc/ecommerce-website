import {
	ChangeDetectionStrategy,
	Component,
	Input,
	OnChanges,
	OnInit,
	SimpleChanges,
} from '@angular/core';

export interface PriceTag {
	price: number;
	rrp: number;
}

@Component({
	selector: 'app-price-tag',
	templateUrl: './price-tag.component.html',
	styleUrls: ['./price-tag.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PriceTagComponent implements OnChanges {
	@Input() pricetagConfig: PriceTag = {
		price: 0,
		rrp: 0,
	};

	constructor() {}

	ngOnChanges(changes: SimpleChanges): void {
		this.pricetagConfig = changes['pricetagConfig'].currentValue ?? this.pricetagConfig;
	}
}
