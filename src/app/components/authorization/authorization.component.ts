import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {

  registrationForm : FormGroup;
  loginForm : FormGroup;
  loading: boolean = false;
  message: String;

  constructor(private router: Router, private formBuilder: FormBuilder) { 
    this.registrationForm = formBuilder.group({
            "email": ["", [Validators.required]],
            "password": ["", [ Validators.required, Validators.minLength(6), Validators.maxLength(14)]],
        });

    this.loginForm = formBuilder.group({
            "email": ["", [Validators.required]],
            "password": ["", [ Validators.required, Validators.minLength(6), Validators.maxLength(14)]],
        });
  }

  ngOnInit() {
  }

  register(){
  }

  login(){
  }

  toogleLoading(){
    this.loading = !this.loading;
  }

  ErrorHandling(err){
    console.log(err);
    this.toogleLoading();
    this.message = err.message;
  }
  
  goToApp(){
    this.router.navigate(['/app'])
  }
}
