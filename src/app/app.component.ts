import { Component, VERSION } from '@angular/core';
import { PrintService } from './print.service';

@Component({
  selector: 'ngd-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  constructor(private printService: PrintService) {

  }

  
  onPrintInvoice() {
    const invoiceIds = ['101', '102'];
    this.printService
      .printDocument('invoice', invoiceIds);
  }

}
