import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/model/customer';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {

  public showToggle: boolean = true;

  customers: Customer[];

  constructor(private router: Router, private service: CustomerService) { }

  ngOnInit() {
    // Para que siempre me mande al home.
    this.router.navigate(["/home-customer"]);

    this.service.getCustomersList().subscribe(data => (this.customers = data));
  }

  deleteCustomer(customer: Customer): void {
    this.service.deleteCustomer(customer.id).subscribe(data => (
      this.customers.splice(this.customers.indexOf(customer), 1)
    ));

    console.log("Eliminado Correctamente");
  }

  editCustomer(customer: Customer): void {

    this.service.setCustomer(customer);
    this.router.navigate(['edit-customer']);
  }

  addCustomer(): void {
    this.router.navigate(['add-customer']);
  }

  cancelCustomer() {
    this.router.navigate(["/"]);
  }

  // No funca.
  toggleButtonCancel(event) {
    this.showToggle = event;
  }
}
