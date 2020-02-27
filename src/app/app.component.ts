import { Component, ChangeDetectorRef, OnInit, OnDestroy, AfterViewChecked, ViewChild } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy, AfterViewChecked {

  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  @ViewChild('sidenav') public sidenav: MatSidenav;

  constructor(media: MediaMatcher, private changeDetectorRef: ChangeDetectorRef) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
   }
   ngOnInit(): void {
   }

   sidenavToggle() {
     this.sidenav.toggle();
     this.changeDetectorRef.detectChanges();
   }

   closeSidenavAfterClicking() {
    setTimeout(() => {
      this.sidenav.close();
    }, 1);
   }

   ngAfterViewChecked() {
    this.changeDetectorRef.detectChanges();
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
