import { SubscriptionsPageComponent } from './subscriptions-page/subscriptions-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OffersPageComponent } from './offers-page/offers-page.component';


const routes: Routes = [
  { path: '', redirectTo: '/offers', pathMatch: 'full' },
  { path: 'offers', component: OffersPageComponent },
  { path: 'subscriptions', component: SubscriptionsPageComponent },
  { path: '**', redirectTo: '/offers', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
