import { AppService } from './../service/app.service';
import { Component, OnInit, ChangeDetectorRef, AfterViewChecked } from '@angular/core';
import {trigger, transition, style, animate, query, stagger} from '@angular/animations';

@Component({
  selector: 'app-offers-page',
  templateUrl: './offers-page.component.html',
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0 }),
          stagger(150, [
            animate('0.5s', style({ opacity: 1 }))
          ])
        ], { optional: true })
      ])
    ])
  ],
  styleUrls: ['./offers-page.component.css']
})
export class OffersPageComponent implements OnInit, AfterViewChecked {
  public data;
  offerSeized: Array<boolean> = new Array();
  offerPassed: Array<boolean> = new Array();
  showSpinner: boolean = true;

  constructor(private service: AppService, private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.service.getOffers().subscribe(res => {
      this.data = res['offers'];
      for (let i = 0; i < this.data.length; i++) {
        this.offerSeized.push(false);
        this.offerPassed.push(false);
      }
      this.showSpinner = false;
    });
  }

  actionOnTheOffer(index: number, arraySelected: Array<boolean>, otherArray: Array<boolean>) {
    otherArray[index] = false;
    if (arraySelected[index]) {
      arraySelected[index] = false;
    } else {
      arraySelected[index] = true;
    }
  }

  ngAfterViewChecked() {
    this.changeDetectorRef.detectChanges();
  }


}
