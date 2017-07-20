import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder} from '@angular/forms';
import { AuthService } from '../../services/auth.service'
@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent{

  registrationForm : FormGroup;
  loginForm : FormGroup;
  loading: boolean = false;

  constructor(private router: Router, 
              private formBuilder: FormBuilder,
              private authService: AuthService) { 
    this.registrationForm = formBuilder.group({
            "email": ["", [Validators.required, Validators.email]],
            "password": ["", [ Validators.required, Validators.minLength(5), Validators.maxLength(14)]],
        });
    this.loginForm = formBuilder.group({
            "email": ["", [Validators.required, Validators.email]],
            "password": ["", [ Validators.required, Validators.minLength(5), Validators.maxLength(14)]],
        });
  }

  register(email, password){
    if(this.registrationForm.valid){
      if(this.authService.register(email, password)) this.goToApp();
    }
  }

  login(email, password){
    if(this.loginForm.valid){
      if(this.authService.login(email, password)) this.goToApp();
    }
  }
  
  goToApp(){
    this.router.navigate(['/app'])
  }
}
