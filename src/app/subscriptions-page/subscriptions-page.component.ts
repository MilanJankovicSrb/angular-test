import { AppService } from './../service/app.service';
import { Component, OnInit, ChangeDetectorRef, AfterViewChecked } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-subscriptions-page',
  templateUrl: './subscriptions-page.component.html',
  animations: [
    trigger('fadeAnimation', [
      transition(':enter', [
        style({ opacity: 0 }), animate('500ms', style({ opacity: 1 }))]
      ),
      transition(':leave',
        [style({ opacity: 1 }), animate('500ms', style({ opacity: 0 }))]
      )
    ])
  ],
  styleUrls: ['./subscriptions-page.component.css']
})
export class SubscriptionsPageComponent implements OnInit, AfterViewChecked {
  public data;
  showSpinner: boolean = true;
  subscribed: Array<boolean> = new Array();

  constructor(private service: AppService, private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.service.getSubscriptions().subscribe(res => {
      this.data = res['subscriptions'];
      for (let index = 0; index < this.data.length; index++) {
        this.subscribed.push(false);
      }
      this.showSpinner = false;
      this.changeDetectorRef.detectChanges();
    });
  }

  subscribe(index: number): void {
    this.subscribed[index] = true;
  }
  unsubscribe(index: number): void {
    this.subscribed[index] = false;
  }

  ngAfterViewChecked() {
    this.changeDetectorRef.detectChanges();
  }

}
