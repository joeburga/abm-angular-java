import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { EditCustomerComponent } from './components/edit-customer/edit-customer.component';
import { ListCustomerComponent } from './components/list-customer/list-customer.component';
import { HomeCustomerComponent } from './components/home-customer/home-customer.component';

const routes: Routes = [
  { path: 'add-customer', component: AddCustomerComponent },
  { path: 'edit-customer', component: EditCustomerComponent },
  { path: 'list-customer', component: ListCustomerComponent },
  { path: 'home-customer', component: HomeCustomerComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home-customer' },
  { path: '**', pathMatch: 'full', redirectTo: 'home-customer' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
