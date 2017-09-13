import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-shipping-information',
  templateUrl: './shipping-information.component.html',
  styleUrls: ['./shipping-information.component.css']
})
export class ShippingInformationComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      'name': new FormControl('', [Validators.required, Validators.maxLength(30)]),
      'address': new FormControl('', [Validators.required, Validators.maxLength(50)]),
      'email': new FormControl('', [Validators.required, Validators.minLength(7)])
    });
   }

  ngOnInit() {
  }
}
