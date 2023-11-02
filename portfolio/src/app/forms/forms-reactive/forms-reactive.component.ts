import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IUser } from '../user.model';

@Component({
  selector: 'frm-reactive',
  templateUrl: './forms-reactive.component.html',
  styleUrls: ['./forms-reactive.component.scss']
})
export class FormsReactiveComponent implements OnInit {  
  user:IUser | undefined;
  userForm!: FormGroup; 

  constructor(private fb:FormBuilder) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: null,
      phone: null,
      email: null,
      address: null,
      password: null,
      confirmPassword: null,   
      agreement: false
    })
  } 












}