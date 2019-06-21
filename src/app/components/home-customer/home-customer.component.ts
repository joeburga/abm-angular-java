import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/model/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-home-customer',
  templateUrl: './home-customer.component.html',
  styleUrls: ['./home-customer.component.css']
})
export class HomeCustomerComponent implements OnInit {

  constructor(private router: Router, private service: CustomerService) { }

  private customer: Customer = new Customer();

  ngOnInit() {
    // Inicializo para que cuando modifique no me autocomplete el formulario con la data del modificado.
    this.service.setCustomer(this.customer);
  }

  listarCustomer() {
    this.router.navigate(["list-customer"]);
  }

  addCustomer(): void {
    this.router.navigate(['add-customer']);
  }


}