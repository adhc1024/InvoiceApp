import { Component, Input } from '@angular/core';

@Component({
  selector: 'invoice-view',
  imports: [],
  templateUrl: './invoice-view.component.html'
})
export class InvoiceViewComponent {

@Input() name!: string;
@Input() id!: number;

}
