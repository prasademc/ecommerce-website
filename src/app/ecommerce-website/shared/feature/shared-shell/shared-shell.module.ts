import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// import components
import { HeaderComponent } from '../header/header.component';


@NgModule({
	declarations: [HeaderComponent],
	imports: [CommonModule, RouterModule],
	exports: [HeaderComponent]
})
export class SharedShellModule {}
