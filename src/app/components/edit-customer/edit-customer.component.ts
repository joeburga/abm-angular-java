import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/model/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  private customer: Customer = new Customer();
  gendersList: string[] = ['M', 'F', 'Others'];


  constructor(private router: Router, private service: CustomerService) { }

  ngOnInit() {
    this.customer = this.service.getCustomer();
  }

  editCustomer() {
    this.service.updateCustomer(this.customer).subscribe(customer => {
      console.log(customer + "Editado Correctamente");
      this.router.navigate(["home-customer"]);
    });
  }

  cancelCustomer() {
    this.router.navigate(["home-customer"]);
  }

}
