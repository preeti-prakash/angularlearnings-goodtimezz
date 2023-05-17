import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';


@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  // customerName: string = ""
  // customerAddress: string = ""

  public form:FormGroup;
  constructor(fb:FormBuilder) { 
      this.form = fb.group({
        userName:[null , Validators.required]
      })
  }

}
