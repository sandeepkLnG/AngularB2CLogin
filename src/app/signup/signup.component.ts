import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupform:FormGroup

  constructor(private _formbuilder: FormBuilder) {
    this.signupform = this._formbuilder.group({
      name:[null,Validators.required],
      email: [null, Validators.required],
      password: [null, [Validators.required, Validators.minLength(4)]],
    });
  }

  ngOnInit(): void {
  }
  signup(){
   localStorage.setItem( "user",JSON.stringify(this.signupform.value))
    
  }

}
