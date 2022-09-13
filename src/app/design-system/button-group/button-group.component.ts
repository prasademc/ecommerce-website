import {
	ChangeDetectionStrategy,
	Component,
	EventEmitter,
	Input,
	OnChanges,
	Output,
	SimpleChanges,
} from '@angular/core';
import { IButton } from 'src/app/ecommerce-website/product/domain/button.model';

@Component({
	selector: 'app-button-group',
	templateUrl: './button-group.component.html',
	styleUrls: ['./button-group.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonGroupComponent implements OnChanges {
	@Input() buttonGroupConfig: Array<IButton> = [];
	@Output() clickHandler = new EventEmitter<string>()

	constructor() {}

	ngOnChanges(changes: SimpleChanges): void {
		this.buttonGroupConfig =
			changes['buttonGroupConfig'].currentValue ?? this.buttonGroupConfig;
	}

	onClickHandler(action: string): void {
		this.clickHandler.emit(action);
	}
}
