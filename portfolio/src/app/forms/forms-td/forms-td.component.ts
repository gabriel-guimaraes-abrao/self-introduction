import { Component } from '@angular/core';
import { IUser } from '../user.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'frm-td',
  templateUrl: './forms-td.component.html',
  styleUrls: ['./forms-td.component.scss'],
})
export class FormsTdComponent {

  user:IUser = {
    name: "",
    phone: "",
    email: "",
    address: "",
    password: "",
    confirmPassword: "",   
    agreement: false
  }

  submitted = false;

  onSubmit(f: NgForm): void {
    console.log(f.form.value);
    console.log("Form was submitted");   
    this.submitted = true;   
   
  }
}