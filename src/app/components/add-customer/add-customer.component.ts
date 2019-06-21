import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Customer } from 'src/app/model/customer';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  private customer: Customer = new Customer();
  gendersList: string[] = ['M', 'F', 'Others'];

  @Output() flag = new EventEmitter();

  constructor(private router: Router, private service: CustomerService) { }

  ngOnInit() {
    this.flag.emit(false);

    this.customer = this.service.getCustomer();
  }

  saveCustomer() {

    if (this.customer.id == undefined) {
      this.service.createCustomer(this.customer).subscribe(customer => {
        console.log(this.customer + "Creado Correctamente");
        this.router.navigate(["/list-customer"]);
        // En list-customer.ts en el init lo mando siempre al home.
        // Para que me actualice la lista.
      });
    }
  }

  // cancelCustomer() {
  //   this.router.navigate(["home-customer"]);
  // }
}
