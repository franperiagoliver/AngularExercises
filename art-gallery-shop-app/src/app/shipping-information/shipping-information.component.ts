import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ShippingInformation } from './shipping-information.model';

@Component({
  selector: 'app-shipping-information',
  templateUrl: './shipping-information.component.html',
  styleUrls: ['./shipping-information.component.css']
})
export class ShippingInformationComponent implements OnInit {

  form: FormGroup;
  spModel: ShippingInformation;

  @Output()
  shippingInformation: EventEmitter<ShippingInformation> = new EventEmitter();

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      'name': new FormControl('', Validators.required),
      'address': new FormControl('', Validators.required),
      'email': new FormControl('', Validators.required)
    });
   }

  ngOnInit() {
  }

  onSubmit() {
    this.spModel = new ShippingInformation();
    this.spModel = this.form.value.name;
    this.spModel = this.form.value.address;
    this.spModel = this.form.value.email;
    this.shippingInformation.emit(this.spModel);
  }
}
